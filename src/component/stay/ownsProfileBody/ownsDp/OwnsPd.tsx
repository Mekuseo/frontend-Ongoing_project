import React from "react";
import { baseURL } from "../../../../severs/auth";

interface OwnsPdProps {
  onProfileImageUpload: (url: string) => void;
  profileImageUrl: string;
  setProfileImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const OwnsPd: React.FC<OwnsPdProps> = ({
  setProfileImageUrl,
  profileImageUrl,
}) => {
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const selectedImage = event.target.files[0];

    // Perform image upload to the server
    const formData = new FormData();
    formData.append("profile_image", selectedImage);

    try {
      const userToken = localStorage.getItem("token") || "";
      const response = await fetch(`${baseURL}/auth/porfileImage/`, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${userToken}`,
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        setProfileImageUrl(responseData.profile_image_url);
      } else {
        console.error("Image upload failed!");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="ProfilePic">
      <h1 className="reusedH1">Add/change profile photo</h1>
      <p>
        Please provide us with an image we can use to help you set up your
        profile.
      </p>
      <div className="ProfilePicBody">
        <img src={profileImageUrl} alt="" className="headIcon" />
        <h2 className="imageDesc">
          Please pick a clear and good looking photo for easy identification.
        </h2>

        <div className="addProBtn">
          <label className="label-input-file">
            <b>ADD/CHANGE PROFILE PHOTO</b>

            <input type="file" id="file" onChange={handleChange} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default OwnsPd;
