import React from 'react';
import clickSound from '../../../assets/pics/wrong-47985.mp3';
import ".//dealsHeader.css"

interface LockedDivProps {
  onClick: () => void;
}

const LockedTime: React.FC<LockedDivProps> = ({ onClick }) => {
  const handleClick = () => {
    const audio = new Audio(clickSound);
    audio.play();
    onClick();
  };

  return (
    <div className="selectTime" onClick={handleClick}>
        <p>
            <span>
            When: 
            </span>Tonight

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 46 51" fill="none">
                <path d="M23.376 31.9851V36.9851M10.876 20.8071C12.0545 20.7351 13.5075 20.7351 15.376 20.7351H31.376C33.2445 20.7351 34.6975 20.7351 35.876 20.8071M10.876 20.8071C9.40518 20.8969 8.3617 21.0989 7.47105 21.5526C6.05983 22.2716 4.91248 23.4189 4.19343 24.8301C3.37598 26.4346 3.37598 28.5346 3.37598 32.7351V36.2351C3.37598 40.4356 3.37598 42.5356 4.19343 44.1401C4.91248 45.5514 6.05983 46.6986 7.47105 47.4176C9.07538 48.2351 11.1756 48.2351 15.376 48.2351H31.376C35.5765 48.2351 37.6765 48.2351 39.281 47.4176C40.6922 46.6986 41.8395 45.5514 42.5585 44.1401C43.376 42.5356 43.376 40.4356 43.376 36.2351V32.7351C43.376 28.5346 43.376 26.4346 42.5585 24.8301C41.8395 23.4189 40.6922 22.2716 39.281 21.5526C38.3902 21.0989 37.3467 20.8969 35.876 20.8071M10.876 20.8071V15.7351C10.876 8.83156 16.4724 3.23511 23.376 3.23511C30.2795 3.23511 35.876 8.83156 35.876 15.7351V20.8071" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </p> 
    </div>
  );
};

export default LockedTime;
