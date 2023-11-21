// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import '../topDes/topDes.css';
import WaysToCards from './cards';

const WaysTo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = [
    { title: 'Card 1',},
    { title: 'Card 2',},
    { title: 'Card 3',},
  ];

  const nextSlide = () => {
    if (currentIndex < cardData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleCard = cardData[currentIndex];

  return (
    <>

      <div className="topDesSub">

        <h1>
          Vacation Rentals
        </h1>

        <div className="centeredSub">
          Enjoy your stay holiday in a discreet and well savoured location.
        </div>

        <div className="navigatingButtons">
          <button
            className="prevhome-button"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <g clip-path="url(#clip0_6985_10899)">
                  <path d="M15 18.3589L9 12.3589L15 6.35889" stroke="#263238" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_6985_10899">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.358887)"/>
                  </clipPath>
                </defs>
            </svg>
          </button>

          <button
            className="nexthome-button"
            onClick={nextSlide}
            disabled={currentIndex >= cardData.length - 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_6882_3500)">
                  <path d="M9 6L15 12L9 18" stroke="#263238" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_6882_3500">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
            </svg>
          </button>
        </div>
      </div>

      <div className="carouselhome-container">
        <div className="carouselhome">
          <div className="cardhome-wrapper">
            <div
              className="cardhome"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >

             <WaysToCards/>
            </div>

            <div
              className="cardhome"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
             <WaysToCards/>
            </div>

            <div
              className="cardhome"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <WaysToCards/>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default WaysTo;