import React, { useState } from 'react';
import "../filterPanel/filterSideBar.css"

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonIndex: React.SetStateAction<number>) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="hotelListFilterButton-group">
      <button
        onClick={() => handleButtonClick(1)}
        className="mainActive"
      >
        Sort
      </button>
      <button
        onClick={() => handleButtonClick(1)}
        className={activeButton === 1 ? 'active' : ''}
      >
        Price
      </button>
      <button
        onClick={() => handleButtonClick(2)}
        className={activeButton === 2 ? 'active' : ''}
      >
        Top rated
      </button>
      <button
        onClick={() => handleButtonClick(3)}
        className={activeButton === 3 ? 'active' : ''}
      >
        Most reviewed
      </button>
      <button
        onClick={() => handleButtonClick(4)}
        className={activeButton === 4 ? 'active' : ''}
      >
        Proximity to entertainment hotspot
      </button>
      <button
        onClick={() => handleButtonClick(5)}
        className={activeButton === 5 ? 'active' : ''}
      >
        Deals
      </button>
    </div>
  );
};

export default ButtonGroup;
