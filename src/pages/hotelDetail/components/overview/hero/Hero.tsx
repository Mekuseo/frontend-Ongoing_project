import "./Hero.css";
import { useState } from "react";
import SeeMore from "./SeeMore";

interface ImageObject {
  caption: string;
  imgPath: string;
  progress: number;
}

interface HeroProps {
  mainPictures: string[];
  exteriorImages: ImageObject[];
  interiorsImages: ImageObject[];
}

const Hero: React.FC<HeroProps> = ({
  mainPictures,
  exteriorImages,
  interiorsImages,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleSeeMore = () => {
    setShowModal(true);
    console.log("clicked");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className="modal-backdrop" onClick={handleCloseModal} />
      )}
      {showModal && <SeeMore onClose={handleCloseModal} />}
      <div className="navMenu-hero">
        <img
          src={mainPictures[0]}
          alt="Transcorp hillton"
          onClick={handleSeeMore}
        />
        <img src={interiorsImages[0]?.imgPath} alt="Transcorp hillton" />
        <img src={interiorsImages[1]?.imgPath} alt="Transcorp hillton" />
        <img src={exteriorImages[0]?.imgPath} alt="Transcorp hillton" />
        <img src={exteriorImages[1]?.imgPath} alt="Transcorp hillton" />
      </div>
    </div>
  );
};

export default Hero;
