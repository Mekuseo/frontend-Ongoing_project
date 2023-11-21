import React, { useState } from "react";
import "./Slideshow.css";

import HeartButton from "./Like/like";

interface SlideshowProps {
  images: any[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="hotelListSlideshow">
        <div className="textHL">
          <HeartButton />
        </div>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="hotellistingCardImage"
        />
        <div className="prevButtonHL" onClick={prevImage}>
          &#10094;
        </div>
        <div className="nextButtonHL" onClick={nextImage}>
          &#10095;
        </div>
    </div>
  );
};

export default Slideshow;
