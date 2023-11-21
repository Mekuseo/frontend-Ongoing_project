import React, { Dispatch, SetStateAction } from "react";
import "../../../component/stay/addtohotel/Photos.css";
import Upload from "./Upload";
import { Container } from "@mui/material";

interface UploadPhotosProps {
  uploadedImages: string[];
  setUploadedImages: Dispatch<SetStateAction<string[]>>;
}

const UploadPhotos: React.FC<UploadPhotosProps> = ({
  uploadedImages,
  setUploadedImages,
}) => (
  <Container>
    <Upload
      acceptedFileTypes={["image/png", "image/jpeg"]}
      maxFileSize={100}
      label="Max File Size: 1MB"
      labelAlt="Accepted File Types: png, jpeg"
      uploadedImages={uploadedImages}
      setUploadedImages={setUploadedImages}
    />
  </Container>
);

export default UploadPhotos;