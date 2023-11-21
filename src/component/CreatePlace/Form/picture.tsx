/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import "./form.css";

interface PictureProps {
  onImageUpload: (imageSrc: string) => void;
}

const Picture: React.FC<PictureProps> = ({ onImageUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  // const [uploadProgress, setUploadProgress] = useState<number[]>([]);
  const [, setUploadProgress] = useState<number[]>([]);
  const [isUploadComplete, setIsUploadComplete] = useState(false);

  useEffect(() => {
    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file, index) => {
        uploadFileToServer(file, index);
      });
    }
  }, [selectedFiles]);

  const uploadFileToServer = async (file: File, index: number) => {
    try {
      const totalSize = file.size;
      let uploadedSize = 0;
      const chunkSize = 1024;
      let currentChunk = 0;

      while (currentChunk < totalSize) {
        await new Promise((resolve) => setTimeout(resolve, 200));

        currentChunk += chunkSize;
        uploadedSize = Math.min(currentChunk, totalSize);
        const progress = (uploadedSize / totalSize) * 100;

        setUploadProgress((prevProgress) => {
          const newProgress = [...prevProgress];
          newProgress[index] = progress;
          return newProgress;
        });

        if (uploadedSize === totalSize) {
          setIsUploadComplete(true);
          break;
        }
      }
      const uploadedImageUrl = URL.createObjectURL(file);
      onImageUpload(uploadedImageUrl);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newFiles = Array.from(files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
      setUploadProgress((prevProgress) => [...prevProgress, 0]);
      setIsUploadComplete(false);
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="fileUploadPics">
      {/* {selectedFiles.map((file: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; size: number; }, index: React.Key | null | undefined) => (
        <div key={index} className="fileUploadPics">
          <br />
          <div>
            <div className="uploadCont">
              <h1>
                {file.name}
              </h1>

              {uploadProgress[index] !== undefined && (
                <>
                  <div className="progress-bar">
                    <div
                      style={{
                        width: `${uploadProgress[index]}%`,
                        backgroundColor: '#92E3A9',
                        borderRadius: '20px',
                        height: '5px',
                      }}
                      className="progress-fill"
                    />
                  </div>
                </>
              )}
              {uploadProgress[index] !== undefined && (
                <div className="progressPicUpload">
                  <p>{Math.round(file.size / 1024)} KB</p>
                  <p className='split'>{uploadProgress[index].toFixed(2)}%</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))} */}

      {!isUploadComplete && (
        <label className="upload">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            multiple
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="30"
            viewBox="0 0 25 31"
            fill="none"
          >
            <path
              d="M3.5 30.5H21.5C22.2956 30.5 23.0587 30.1839 23.6213 29.6213C24.1839 29.0587 24.5 28.2956 24.5 27.5V9.5L15.5 0.5H3.5C2.70435 0.5 1.94129 0.81607 1.37868 1.37868C0.81607 1.94129 0.5 2.70435 0.5 3.5V27.5C0.5 28.2956 0.81607 29.0587 1.37868 29.6213C1.94129 30.1839 2.70435 30.5 3.5 30.5ZM14 3.5L21.5 11H14V3.5ZM7.25 14C7.54557 14.0001 7.83823 14.0584 8.11127 14.1716C8.3843 14.2848 8.63237 14.4507 8.8413 14.6598C9.05023 14.8688 9.21594 15.117 9.32896 15.3901C9.44198 15.6632 9.5001 15.9559 9.5 16.2515C9.4999 16.5471 9.44159 16.8397 9.32838 17.1128C9.21518 17.3858 9.04931 17.6339 8.84024 17.8428C8.63117 18.0517 8.38299 18.2174 8.10988 18.3305C7.83677 18.4435 7.54407 18.5016 7.2485 18.5015C6.65156 18.5013 6.07916 18.264 5.6572 17.8417C5.23524 17.4195 4.9983 16.8469 4.9985 16.25C4.9987 15.6531 5.23602 15.0807 5.65826 14.6587C6.0805 14.2367 6.65306 13.9998 7.25 14ZM8 21.5L10.3955 23.5445L14 17L20 26H5L8 21.5Z"
              fill="#6E9E76"
            />
          </svg>
          <span>Upload</span>
        </label>
      )}

      {isUploadComplete ? (
        <label className="uploadMore">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            multiple
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <path
              d="M22.3055 0.21875H10.5152C5.3939 0.21875 2.34082 3.47375 2.34082 8.93375V21.4888C2.34082 26.9638 5.3939 30.2188 10.5152 30.2188H22.2914C27.4127 30.2188 30.4658 26.9638 30.4658 21.5037V8.93375C30.4798 3.47375 27.4268 0.21875 22.3055 0.21875ZM22.0381 16.3438H17.4655V21.2188C17.4655 21.8337 16.9872 22.3438 16.4103 22.3438C15.8335 22.3438 15.3551 21.8337 15.3551 21.2188V16.3438H10.7825C10.2057 16.3438 9.72731 15.8337 9.72731 15.2188C9.72731 14.6038 10.2057 14.0938 10.7825 14.0938H15.3551V9.21875C15.3551 8.60375 15.8335 8.09375 16.4103 8.09375C16.9872 8.09375 17.4655 8.60375 17.4655 9.21875V14.0938H22.0381C22.615 14.0938 23.0933 14.6038 23.0933 15.2188C23.0933 15.8337 22.615 16.3438 22.0381 16.3438Z"
              fill="#6E9E76"
            />
          </svg>
          <span>Add more</span>
        </label>
      ) : null}
    </div>
  );
};

export default Picture;
