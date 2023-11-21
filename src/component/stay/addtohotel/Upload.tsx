import React, {
  ChangeEvent,
  useRef,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "../addtohotel/Photos.css";
import UploadIcon from "../../../assets/pics/Upload icon.png";
import addmore from "../../../assets/pics/add-square.png";
import successTick from "../../../assets/pics/ep_success-filled.png";
import { baseURL } from "../../../severs/auth";

interface FileUploaderProps {
  acceptedFileTypes?: string[] | null;
  maxFileSize?: number;
  allowMultiple?: boolean;
  label?: string;
  labelAlt?: string;
  uploadedImages: string[];
  setUploadedImages: Dispatch<SetStateAction<string[]>>;
}

export default function Upload(props: FileUploaderProps) {
  const {
    acceptedFileTypes,
    maxFileSize = 3,
    allowMultiple = false,
    label = "",
    labelAlt = "",
    setUploadedImages,
    uploadedImages,
  } = props;

  const MAX_FILE_BYTES = maxFileSize * 1024 * 1024;

  const [fileProgress, setFileProgress] = useState<{ [key: string]: number }>(
    {}
  );
  const [fileStatus, setFileStatus] = useState<{
    [key: string]: string | boolean;
  }>({});
  const [previewImages] = useState<{ [key: string]: string }>({});
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fileSelectedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      let isValid = true;
      const fileErrors: { [key: string]: string } = {};

      if (uploadedImages.length + files.length > 3) {
        fileErrors[""] = "You can upload a maximum of 3 images.";
        isValid = false;
      }

      for (const file of files) {
        if (file.size > MAX_FILE_BYTES) {
          fileErrors[file.name] = `File size cannot exceed ${maxFileSize} MB`;
          isValid = false;
        }
        if (acceptedFileTypes && !acceptedFileTypes.includes(file.type)) {
          fileErrors[
            file.name
          ] = `File type not accepted. Accepted types: ${acceptedFileTypes.join(
            ", "
          )}`;
          isValid = false;
        }
      }

      if (!isValid) {
        setFileStatus(fileErrors);
      } else {
        setUploading(true);
        files.forEach((file) => {
          setFileProgress((prev) => ({ ...prev, [file.name]: 0 }));
          fileUploadHandler(file);
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
      const userToken = localStorage.getItem("token") || "";

      const response = await fetch(`${baseURL}hotels/images/`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Token ${userToken}`,
        },
      });

      if (response.ok) {
        const responseData = await response.json();

        setUploadedImages((prevImages) => [
          ...prevImages,
          responseData.hotel_image,
        ]);
      } else {
        const responseBody = await response.text();
        console.error("Image upload failed! Server response:", responseBody);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  };

  const updateFileProgress = (fileName: string, progress: number) => {
    setFileProgress((prev) => ({ ...prev, [fileName]: progress }));
  };

  const getUploadProgress = (fileName: string): number => {
    return fileProgress[fileName] || 0;
  };

  const handleDeleteImage = (fileName: string) => {
    const updatedImages = uploadedImages.filter((img) => img !== fileName);
    setUploadedImages(updatedImages);
  };

  return (
    <div>
      <div className="row">
        <div className="uploadcolumn">
          {!Object.keys(previewImages).length && (
            <>
              <div>
                <label className="label">
                  <span className="label-text">{label}</span>
                  <span className="label-text-alt">{labelAlt}</span>
                </label>
                {uploadedImages && uploadedImages.length > 0 ? (
                  <div className="row"></div>
                ) : (
                  <div>
                    <div>
                      {uploading ? (
                        <CircularProgress />
                      ) : (
                        <div className="image-upload">
                          <input
                            type="file"
                            name=""
                            onChange={fileSelectedHandler}
                            accept={
                              acceptedFileTypes
                                ? acceptedFileTypes.join(",")
                                : undefined
                            }
                            ref={fileInputRef}
                            multiple={allowMultiple}
                          />
                          <label className="upload-field" id="file-label">
                            <div className="file-thumbnail">
                              <img id="image-preview" src={UploadIcon} alt="" />
                              <h3 id="filename">
                                Drag & drop photos or&nbsp;
                                <span>Browse</span>
                              </h3>
                              <p>Supported formats: JPEG, PNG, GIF, MP4, PDF</p>
                            </div>
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {uploadedImages.length < 3 && (
                  <div className="upload-btn-wrapper">
                    <div className="image-preview"></div>
                    <button
                      className={`photoBtn ${
                        uploadedImages.length >= 3
                          ? "disabled-photo-upload-button"
                          : ""
                      }`}
                    >
                      <img src={addmore} alt="Add more" />
                      <span>Add more</span>
                    </button>
                    <input
                      type="file"
                      name=""
                      onChange={fileSelectedHandler}
                      accept={
                        acceptedFileTypes
                          ? acceptedFileTypes.join(",")
                          : undefined
                      }
                      ref={fileInputRef}
                      multiple={allowMultiple}
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <div className="uploadcolumn">
          {uploadedImages.map((fileName, index) => {
            const extractedFileName = fileName.split("/").pop() || fileName;

            return (
              <div className="image-card" key={index}>
                <div className="image-details">
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteImage(fileName)}
                  >
                    delete
                  </button>
                  <img
                    src={fileName}
                    alt={`Preview - ${extractedFileName}`}
                    className="file-preview"
                  />

                  <div className="imagedetailsprogressbarcard">
                    <div className="progressbaruplodtop">
                      <p className="file-name">{extractedFileName}</p>
                      <img src={successTick} alt="" />
                    </div>

                    <div className="progressbarupload"></div>

                    <div className="progressbaruplodbottom">
                      <p className="file-size">
                        {Math.round(MAX_FILE_BYTES / 1024)} KB
                      </p>
                      <p className="progressdetail">100%</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
