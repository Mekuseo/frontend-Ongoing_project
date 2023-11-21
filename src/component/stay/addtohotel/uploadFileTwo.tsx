import "../addtohotel/Photos.css";
import FileUploaderTwo from "./photoUploaderTwo";
import Container from "./Container";

interface ImageObject {
  caption: string;
  imgPath: string;
  progress: number;
}
interface uploadFileTwoProps {
  interiorsImages: ImageObject[];
  setInteriorsImages: React.Dispatch<React.SetStateAction<ImageObject[]>>;
}

export default function uploadFileTwo({
  interiorsImages,
  setInteriorsImages,
}: uploadFileTwoProps) {
  return (
    <Container>
      <FileUploaderTwo
        interiorsImages={interiorsImages}
        setInteriorsImages={setInteriorsImages}
      />
    </Container>
  );
}
