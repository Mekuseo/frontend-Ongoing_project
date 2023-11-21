import React, { useState, useEffect } from 'react';
import ".//dealsHome.css"

interface SlideshowProps {
  images: string[];
  interval: number; // Interval between slides in milliseconds
}

const Slideshow: React.FC<SlideshowProps> = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className='backgroundSlideImages'
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '200%',
        height: '90vh',
        overflow: 'hidden',
        right: 0,
        position: 'inherit',
        transition: 'background-image 0.5s ease-in-out',
      }}
    ></div>
  );
};

export default Slideshow;
