import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { baseURL } from "../../../severs/auth";

interface ProfilePhotoProps {
  handleImageUpload1: (event: React.ChangeEvent<HTMLInputElement>) => void;
  images1: string | null;
  setImages1: React.Dispatch<React.SetStateAction<string>>;
}

const ProfilePhoto = ({ images1, setImages1 }: ProfilePhotoProps) => {
  const uploadImageUrl = `${baseURL}auth/porfileImage/`;
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("profile_image", file);

      try {
        const response = await fetch(uploadImageUrl, {
          method: "POST",
          body: formData,
        });
        console.log(response);

        if (response.status === 201) {
          const responseData = await response.json();
          const imageUrl = responseData.profile_image_url;
          console.log("Image uploaded successfully:", imageUrl);

          // Uncomment if you want to update the component state
          setImages1(imageUrl);

          // Pass the image URL to the parent component or perform other actions
          // handleImageUpload1(imageUrl);
        } else {
          const errorData = await response.json();
          console.error("Image upload failed:", errorData);
        }
      } catch (error) {
        console.error("Error during image upload:", error);
      }
    }
  };

  return (
    <div
      style={{
        width: "198px",
        height: "198px",
        border: "1px dashed #4C535F",
        borderRadius: "10px",
        backgroundColor: "#EDF2F6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <label htmlFor="image-upload1" className="upload-label1">
        <div style={{ cursor: "pointer" }}>
          {images1 ? (
            <img
              src={images1 || ""}
              alt="Uploaded"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                marginTop: "5px",
              }}
            />
          ) : (
            <div style={{ textAlign: "center" }}>
              <FontAwesomeIcon icon={faImage} size="2xl" />
              <p
                style={{
                  fontFamily: "raleway, sans-serif",
                  fontSize: "20px",
                  color: "#4C535F",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Upload your <br /> photo
              </p>
            </div>
          )}
        </div>
        <input
          type="file"
          id="image-upload1"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </label>
      {/* {images1 && (
        <div
          style={{
            fontFamily: "raleway, sans-serif",
            fontSize: "14px",
            color: "red",
            fontWeight: "500",
            textAlign: "center",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          Upload another image
        </div>
      )} */}
    </div>
  );
};
export default ProfilePhoto;
