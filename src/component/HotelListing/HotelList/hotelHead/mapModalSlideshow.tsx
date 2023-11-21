// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import HeartButton from '../hotelListBody/slideshow/Like/like';

const MapModalSlider = ({ images, text }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextSlide = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const previousSlide = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };

    return (
        <div className="mapmodalslideshow">
            <div className="mapmodalslideshowheart">
                <HeartButton />
            </div>
            <button className="prev" onClick={previousSlide}>
                &#10094;
            </button>
            <img src={images[currentImage]} alt={` Image ${currentImage}`} />
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default MapModalSlider;
