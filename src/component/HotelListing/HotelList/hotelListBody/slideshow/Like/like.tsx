import React, { useState } from 'react';
import './like.css';

const HeartButton: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <button className={`likeHL${isLiked ? ' liked' : ''}`} onClick={toggleLike}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        style={{ fill: isLiked ? 'red' : 'none' }}
      >
        <path
          d="M9.59964 2.52953L10 3.06465L10.4004 2.52953C11.3204 1.29973 12.7949 0.5 14.44 0.5C17.2315 0.5 19.5 2.7738 19.5 5.59C19.5 6.72562 19.3189 7.77375 19.0043 8.74609L19.0032 8.74934C18.249 11.136 16.7035 13.0596 15.0354 14.4933C13.365 15.9289 11.6004 16.8483 10.4589 17.2366L10.4589 17.2366L10.4536 17.2385C10.3537 17.2737 10.1893 17.3 10 17.3C9.81075 17.3 9.64625 17.2737 9.54641 17.2385L9.54642 17.2385L9.54106 17.2366C8.3996 16.8483 6.635 15.9289 4.96465 14.4933C3.29649 13.0596 1.75096 11.136 0.996763 8.74934L0.996774 8.74934L0.995722 8.74609C0.681141 7.77375 0.5 6.72562 0.5 5.59C0.5 2.7738 2.76848 0.5 5.56 0.5C7.2051 0.5 8.67958 1.29973 9.59964 2.52953Z"
          stroke="red"
        />
      </svg>
    </button>
  );
};

export default HeartButton;