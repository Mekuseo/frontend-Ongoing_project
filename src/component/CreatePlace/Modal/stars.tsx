import React, { useState } from 'react';
import './modal.css';

const StarIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="28" 
    viewBox="0 0 35 30"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
  <path d="M18.1064 2.1685L20.7504 7.49181C21.1066 8.22801 22.0629 8.92646 22.8693 9.07747L27.6508 9.87031C30.7073 10.38 31.4198 12.6075 29.2259 14.835L25.4944 18.5915C24.8756 19.2144 24.5194 20.4414 24.7256 21.3286L25.7945 25.9724C26.6383 29.6345 24.6881 31.0692 21.4817 29.1437L17.0001 26.4632C16.1938 25.9724 14.8437 25.9724 14.0374 26.4632L9.55584 29.1437C6.34938 31.0503 4.39924 29.6345 5.24305 25.9724L6.31187 21.3286C6.48064 20.4225 6.12436 19.1955 5.50557 18.5726L1.77406 14.8161C-0.419837 12.6075 0.292712 10.38 3.34917 9.85143L8.13075 9.0586C8.93705 8.92646 9.89337 8.20914 10.2496 7.47293L12.8936 2.14962C14.3374 -0.719679 16.6626 -0.719679 18.1064 2.1685Z" />
  </svg>
);

const StarRating: React.FC = () => {
  const [selectedStars, setSelectedStars] = useState<number[]>([]);

  const handleStarClick = (value: number) => {
    if (selectedStars.includes(value)) {
      setSelectedStars(selectedStars.filter((star) => star !== value));
    } else {
      setSelectedStars([...selectedStars, value]);
    }
  };

  return (
    <div className="starPlace-rating">
      {[1, 2, 3].map((value) => (
        <span
          key={value}
          className={`starPlace ${selectedStars.includes(value) ? 'selected' : ''}`}
          onClick={() => handleStarClick(value)}
        >
          <StarIcon /> 
        </span>
      ))}
      {/* <p className="rating-text">
        {selectedStars.length === 0
          ? 'Please rate this item.'
          : `You rated this ${selectedStars.length} stars.`}
      </p> */}
    </div>
  );
};

export default StarRating;
