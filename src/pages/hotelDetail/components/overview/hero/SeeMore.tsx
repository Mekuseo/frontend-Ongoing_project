import "./SeeMore.css";
import room2 from "../../../../../assets/pics/rooms2 card.png";
import room3 from "../../../../../assets/pics/rooms3 card.png";
import slide1 from "../../../../../assets/pics/unsplash1.jpg";
import slide2 from "../../../../../assets/pics/unsplash2.jpg";
import slide3 from "../../../../../assets/pics/unsplash3.jpg";
import slide4 from "../../../../../assets/pics/unsplash4.jpg";
import slide5 from "../../../../../assets/pics/unsplash5.jpg";
import slide6 from "../../../../../assets/pics/unsplash6.jpg";
import slide7 from "../../../../../assets/pics/unsplash17.jpg";
import slide8 from "../../../../../assets/pics/unsplash8.jpg";
import slide9 from "../../../../../assets/pics/unsplash9.jpg";
import { useState } from "react";

interface SeeMoreProps {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const SeeMore: React.FC<SeeMoreProps> = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(slide9); // Initialize with slide9 image

  const handleImageClick = (newImage: string) => {
    setSelectedImage(newImage);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          x
        </button>
        <div className="images-container">
        <div>
            <img src={selectedImage} alt="room1" className="large-img" />
          </div>
          <div className="scroll-images">
            <img src={room2} onClick={() => handleImageClick(room2)} alt="room2" />
            <img src={room3} onClick={() => handleImageClick(room3)} alt="room3" />
            <img src={slide1} onClick={() => handleImageClick(slide1)} alt="room3" />
            <img src={slide2} onClick={() => handleImageClick(slide2)} alt="room3" />
            <img src={slide3} onClick={() => handleImageClick(slide3)} alt="room3" />
            <img src={slide4} onClick={() => handleImageClick(slide4)} alt="room3" />
            <img src={slide5} onClick={() => handleImageClick(slide5)} alt="room3" />
            <img src={slide6} onClick={() => handleImageClick(slide6)} alt="room3" />
            <img src={slide7} onClick={() => handleImageClick(slide7)} alt="room3" />
            <img src={slide8} onClick={() => handleImageClick(slide8)} alt="room3" />
            <img src={slide9} onClick={() => handleImageClick(slide9)} alt="room3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeMore;
