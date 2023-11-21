import { useState, ChangeEvent, useRef } from 'react';
import "./OPbpdy.css"
// import { FaCheck, FaTimes } from 'react-icons/fa';=


interface FileUploaderProps {
    acceptedFileTypes?: string[] | null;
    url: string;
    maxFileSize?: number;
    allowMultiple?: boolean;
    label?: string;
    labelAlt?: string;
}
  
export default function FileUploader(props: FileUploaderProps) {

    const {
        acceptedFileTypes,
        url, maxFileSize = 5,
        allowMultiple = false,
    } = props;

    const MAX_FILE_BYTES = maxFileSize * 1024 * 1024;

    const [fileProgress, setFileProgress] = useState<{ [key: string]: number }>({});
    const [fileStatus, setFileStatus] = useState<{ [key: string]: string }>({});

    const fileInputRef = useRef<HTMLInputElement>(null);

    const fileSelectedHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
                    fileErrors[file.name] = "File type not accepted. Accepted types: " + acceptedFileTypes.join(', ');
                    isValid = false;
                }
            }

            if (!isValid) {
                setFileStatus(fileErrors);
            } else {
                files.forEach(file => {
                    setFileProgress(prev => ({ ...prev, [file.name]: 0 }));
                    OPUploader(file);
                });
            }
        }
    };

    const OPUploader = (file: File) => {
        const formData = new FormData();
        formData.append("uploads", file);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);

        xhr.upload.addEventListener("progress", event => {
            if (event.lengthComputable) {
                const progress = Math.round((event.loaded / event.total) * 100);
                setFileProgress(prev => ({ ...prev, [file.name]: progress }));
            }
        });

        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    setFileStatus(prev => ({ ...prev, [file.name]: 'Uploaded' }))
                } else {
                    // setFileStatus(prev => ({ ...prev, [file.name]: "An error occurred while uploading the file. Server response: " + xhr.statusText }));
                    setFileStatus(prev => ({ ...prev, [file.name]: ""}));
                }
            }
        });

        xhr.send(formData);
    };

    return (
        <div>
            {
                <div>

                    <label className="add-file">
                        <b>add a document</b>

                        <input 
                            type="file" 
                            name=""
                            onChange={fileSelectedHandler}
                            accept={acceptedFileTypes ? acceptedFileTypes.join(',') : undefined}
                            ref={fileInputRef}
                            multiple={allowMultiple}
                        />

                    </label>

                    <div>
                    {/* <span>{uploadError}</span> */}
                    {Object.entries(fileProgress).map(([fileName, progress]) => (
                        <div className="OpProgressUpload">
                            <div key={fileName}>
                                <p>
                                    {fileName}
                                </p>
                                <div>
                                    <progress
                                        className="OpProgressBarUpload"
                                        value={progress}
                                        max="100"
                                    />
                                    
                                </div>
                                {progress === 100 &&
                                    <>
                                        {/* {
                                            fileStatus[fileName] === 'Uploaded'
                                                ?
                                                <p className='status'>
                                                    100%
                                                </p>
                                                
                                                :
                                                <p className='status'>
                                                    100%
                                                </p>
                                        } */}
                                    </>
                                }
                                <p className="text-red-500">{fileStatus[fileName] !== 'Uploaded' ? fileStatus[fileName] : ''}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                    
            }
        </div>
    );
}