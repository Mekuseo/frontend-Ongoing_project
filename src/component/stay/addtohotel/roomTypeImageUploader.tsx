import React, { ChangeEvent, useState } from "react";
// import { baseURL } from '../../../severs/auth';
// import successTick from '../../../assets/pics/ep_success-filled.png';
import addmore from "../../../assets/pics/add-square.png";
import "./photosMobile.css";
import "./roomtypeimage.css";
import { baseURL } from "../../../severs/auth";

interface RoomTypeImageUploaderProps {
  uploadedImages: File[];
  setUploadedImages: (newImages: File[]) => void;
}

const RoomTypeImageUploader: React.FC<RoomTypeImageUploaderProps> = ({
  uploadedImages,
  setUploadedImages,
}) => {
  const [uploadProgress] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  // const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;

  //   if (files) {
  //     const fileArray: File[] = Array.from(files);

  //     const totalFiles = fileArray.length;

  //     for (let i = 0; i < totalFiles; i++) {
  //       const file = fileArray[i];

  //       for (let progress = 0; progress <= 100; progress += 10) {
  //         await new Promise((resolve) => setTimeout(resolve, 100));
  //         setUploadProgress(progress);
  //       }

  //       setUploadedImages((prevImages: string[]) => {
  //         const newImages: string[] = [...prevImages];
  //         newImages.push(URL.createObjectURL(file));
  //         return newImages;
  //       });
  //     }
  //     setUploadProgress(null);
  //   }
  // };
  const acceptedFileTypes = ["image/png", "image/jpeg"];
  const maxFileSize = 5;
  // const allowMultiple = true;
  // const label = "Max File Size: 1MB";
  // const labelAlt = "Accepted File Types: png, jpeg";

  const MAX_FILE_BYTES = maxFileSize * 1024 * 1024;

  const [, setFileProgress] = useState<{ [key: string]: number }>({});
  const [, setFileStatus] = useState<{ [key: string]: string }>({});
  // const [uploadError, setUploadError] = useState<string | null>(null);

  const [, setPreviewImages] = useState<{
    [key: string]: string;
  }>({});

  // const fileInputRef = useRef<HTMLInputElement>(null);

  const fileSelectedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    // setUploadError(null);
    if (event.target.files) {
      const files = Array.from(event.target.files);
      let isValid = true;
      const fileErrors: { [key: string]: string } = {};

      for (const file of files) {
        if (file.size > MAX_FILE_BYTES) {
          fileErrors[file.name] = `File size cannot exceed ${maxFileSize} MB`;
          isValid = false;
        }
        if (acceptedFileTypes && !acceptedFileTypes.includes(file.type)) {
          fileErrors[file.name] =
            "File type not accepted. Accepted types: " +
            acceptedFileTypes.join(", ");
          isValid = false;
        }
      }

      if (!isValid) {
        console.log("File type not accepted. Accepted types: ");
        setFileStatus(fileErrors);
      } else {
        files.forEach((file) => {
          setFileProgress((prev) => ({ ...prev, [file.name]: 0 }));
          fileUploadHandler(file);

          const reader = new FileReader();
          reader.onload = () => {
            if (reader.result) {
              setPreviewImages((prev) => ({
                ...prev,
                [file.name]: reader.result as string,
              }));
            }
          };
          reader.readAsDataURL(file);
        });

        event.target.value = "";
      }
    }
  };

  const fileUploadHandler = async (file: File) => {
    const formData = new FormData();
    formData.append("hotel_image", file);
    formData.set("boundary", "your-custom-boundary");

    try {
      // Retrieve user token from local storage
      const userToken = localStorage.getItem("token") || "";

      // Send a POST request to the server with the file data
      const response = await fetch(`${baseURL}hotels/images/`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Token ${userToken}`,
        },
        // mode: "cors",
        // credentials: "include",
      });

      if (response.ok) {
        // If the response is successful, parse the JSON response
        const responseData = await response.json();
        const images = responseData.hotel_image;
        console.log(responseData);

        // Assuming setUploadedImages is a state setter function
        if (Array.isArray(images)) {
          setUploadedImages([...uploadedImages, ...images]);
        } else {
          setUploadedImages([...uploadedImages, images]);
        }
        console.log({ uploadedImages });
      } else {
        // If the response is not ok, log an error with the server response
        const responseBody = await response.text();
        console.error("Image upload failed! Server response:", responseBody);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleDeleteImage = (index: number) => {
    const updatedImages = [...uploadedImages];
    updatedImages.splice(index, 1);
    setUploadedImages(updatedImages);
    setSelectedImageIndex(null);
  };

  const handleToggleImageSize = (index: number) => {
    if (selectedImageIndex === index) {
      setSelectedImageIndex(null);
    } else {
      setSelectedImageIndex(index);
    }
  };

  return (
    <div>
      <div className="property-roomDetails-container">
        <p className="roomsanddeetsmobile">Rooms photos</p>
        <div className="photoroomtypeContainer">
          <div className="upload-btn-room-type-wrapper">
            <button className="photoBtnRoomtypeImag">
              <img src={addmore} alt="Add more" />
              <span>Add photo(s)</span>
            </button>
            <input
              type="file"
              multiple
              onChange={fileSelectedHandler}
              name=""
            />
          </div>

          {uploadProgress !== null && (
            <div>
              <progress
                value={uploadProgress}
                max={100}
                className="progressbarroomtype"
              />
              <span>{uploadProgress}%</span>
            </div>
          )}

          <div>
            {uploadedImages.map((imageUrl, index) => (
              <div key={index} className="uploadedimageroomtype">
                <div
                  className={`uploaded-image-container ${
                    selectedImageIndex === index ? "selected" : ""
                  }`}
                >
                  <img
                    src={imageUrl}
                    alt={`Uploaded Image ${index}`}
                    onClick={() => handleToggleImageSize(index)}
                  />
                </div>

                <div className="nameandsizeroomtype">
                  <p>{imageUrl}</p>
                </div>
                <button onClick={() => handleDeleteImage(index)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomTypeImageUploader;
