import React, { useState, useEffect } from 'react';
import './form.css';

const PicUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [isUploadComplete, setIsUploadComplete] = useState(false);

  useEffect(() => {
    if (selectedFile) {
      uploadFileToServer(selectedFile);
    }
  }, [selectedFile]);

  const uploadFileToServer = async (file: File) => {
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
        
        setUploadProgress(progress);

        if (uploadedSize === totalSize) {
          setIsUploadComplete(true);
          break;
        }
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadProgress(0);
      setIsUploadComplete(false);
    }
  };

  return (
    <div>
      <label className="upload">
        <input type="file" onChange={handleFileChange} />
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 25 31" fill="none">
            <path d="M3.5 30.5H21.5C22.2956 30.5 23.0587 30.1839 23.6213 29.6213C24.1839 29.0587 24.5 28.2956 24.5 27.5V9.5L15.5 0.5H3.5C2.70435 0.5 1.94129 0.81607 1.37868 1.37868C0.81607 1.94129 0.5 2.70435 0.5 3.5V27.5C0.5 28.2956 0.81607 29.0587 1.37868 29.6213C1.94129 30.1839 2.70435 30.5 3.5 30.5ZM14 3.5L21.5 11H14V3.5ZM7.25 14C7.54557 14.0001 7.83823 14.0584 8.11127 14.1716C8.3843 14.2848 8.63237 14.4507 8.8413 14.6598C9.05023 14.8688 9.21594 15.117 9.32896 15.3901C9.44198 15.6632 9.5001 15.9559 9.5 16.2515C9.4999 16.5471 9.44159 16.8397 9.32838 17.1128C9.21518 17.3858 9.04931 17.6339 8.84024 17.8428C8.63117 18.0517 8.38299 18.2174 8.10988 18.3305C7.83677 18.4435 7.54407 18.5016 7.2485 18.5015C6.65156 18.5013 6.07916 18.264 5.6572 17.8417C5.23524 17.4195 4.9983 16.8469 4.9985 16.25C4.9987 15.6531 5.23602 15.0807 5.65826 14.6587C6.0805 14.2367 6.65306 13.9998 7.25 14ZM8 21.5L10.3955 23.5445L14 17L20 26H5L8 21.5Z" fill="#6E9E76"/>
        </svg>
        <span>Upload</span>
      </label>
      {selectedFile && (
        <div className="picEventInfo">
            <div className="eventPicUploadTop">
                <p>{selectedFile.name}</p>
                <p className="uploadIcon">
                    {isUploadComplete && 
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clip-path="url(#clip0_6423_8880)">
                            <path d="M5.89436 0.722656C7.23502 0.722656 8.52078 1.25524 9.46878 2.20323C10.4168 3.15123 10.9494 4.43699 10.9494 5.77766C10.9494 7.11833 10.4168 8.40408 9.46878 9.35208C8.52078 10.3001 7.23502 10.8327 5.89436 10.8327C4.55369 10.8327 3.26793 10.3001 2.31993 9.35208C1.37193 8.40408 0.839355 7.11833 0.839355 5.77766C0.839355 4.43699 1.37193 3.15123 2.31993 2.20323C3.26793 1.25524 4.55369 0.722656 5.89436 0.722656ZM5.26465 6.77494L4.14171 5.65128C4.10146 5.61102 4.05367 5.57909 4.00107 5.5573C3.94847 5.53552 3.8921 5.5243 3.83517 5.5243C3.77823 5.5243 3.72186 5.53552 3.66926 5.5573C3.61666 5.57909 3.56887 5.61102 3.52862 5.65128C3.44731 5.73258 3.40164 5.84285 3.40164 5.95783C3.40164 6.07281 3.44731 6.18308 3.52862 6.26438L4.95846 7.69422C4.9986 7.73468 5.04636 7.76679 5.09897 7.78871C5.15158 7.81062 5.20801 7.8219 5.26501 7.8219C5.322 7.8219 5.37843 7.81062 5.43105 7.78871C5.48366 7.76679 5.53141 7.73468 5.57156 7.69422L8.53234 4.73272C8.57314 4.69263 8.60559 4.64486 8.62783 4.59216C8.65007 4.53947 8.66166 4.48289 8.66193 4.42569C8.66219 4.3685 8.65113 4.31182 8.62938 4.25892C8.60763 4.20602 8.57562 4.15795 8.5352 4.11748C8.49479 4.07701 8.44675 4.04495 8.39388 4.02314C8.34101 4.00132 8.28434 3.9902 8.22714 3.9904C8.16994 3.99059 8.11335 4.00212 8.06063 4.02429C8.00791 4.04647 7.9601 4.07887 7.91997 4.11962L5.26465 6.77494Z" fill="#06C00D"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_6423_8880">
                            <rect width="11.5543" height="11.5543" fill="white" transform="translate(0.117188)"/>
                            </clipPath>
                        </defs>
                      </svg>
                    }
                </p>
            </div>
           
          {uploadProgress !== null && (
            <>
              <div className="progress-bar">
                <div
                  style={{ width: `${uploadProgress}%`, backgroundColor: '#92E3A9', borderRadius: '20px', height: '5px' }} // Set background color to red
                  className="progress-fill"
                />
              </div>
              
              <div className="progressPicUpload">
                <p>{Math.round(selectedFile.size / 1024)} KB</p>
                <p className='split'>{uploadProgress.toFixed(2)}%</p>
              </div>
              
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PicUpload;
