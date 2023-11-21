import React from "react";
import "./Photos.css";
import FileUploader from "./photoUploader";
import Container from "./Container";
import { Dispatch, SetStateAction } from "react";

interface ImageObject {
  caption: string;
  imgPath: string;
  progress: number;
}

interface UploadFilesProps {
  exteriorImages: ImageObject[];
  setExteriorImages: Dispatch<SetStateAction<ImageObject[]>>;
}

const UploadFiles: React.FC<UploadFilesProps> = ({
  exteriorImages,
  setExteriorImages,
}) => (
  <Container>
    <FileUploader
      exteriorImages={exteriorImages}
      setExteriorImages={setExteriorImages}
    />
  </Container>
);

export default UploadFiles;