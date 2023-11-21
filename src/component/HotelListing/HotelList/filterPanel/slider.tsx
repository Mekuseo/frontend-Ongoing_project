import React, { useState } from 'react';
import './filterSideBar.css';

const PriceRangeSlider: React.FC = () => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(200000);
  const [isDraggingMin, setIsDraggingMin] = useState<boolean>(false);
  const [isDraggingMax, setIsDraggingMax] = useState<boolean>(false);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinValue = Math.min(parseInt(event.target.value), maxValue - 1);
    setMinValue(newMinValue);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Math.max(parseInt(event.target.value), minValue + 1);
    setMaxValue(newMaxValue);
  };

  const handleMinMouseDown = () => {
    setIsDraggingMin(true);
  };

  const handleMaxMouseDown = () => {
    setIsDraggingMax(true);
  };

  const handleMouseUp = () => {
    setIsDraggingMin(false);
    setIsDraggingMax(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isDraggingMin) {
      const slider = event.currentTarget;
      const { width } = slider.getBoundingClientRect();
      const percent = (event.clientX - slider.getBoundingClientRect().left) / width;
      const newValue = Math.min(Math.floor(percent * 100), maxValue - 1);
      setMinValue(newValue);
    }

    if (isDraggingMax) {
      const slider = event.currentTarget;
      const { width } = slider.getBoundingClientRect();
      const percent = (event.clientX - slider.getBoundingClientRect().left) / width;
      const newValue = Math.max(Math.floor(percent * 100), minValue + 1);
      setMaxValue(newValue);
    }
  };

  return (
    <div className="price-range-slider">
      <div className="price-range-label">
        <span>₦{minValue}</span> - <span>₦{maxValue}</span>
      </div>
      <input
        type="range"
        min={0}
        max={200000}
        value={minValue}
        onChange={handleMinChange}
        onMouseDown={handleMinMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      />
      <input
        type="range"
        min={0}
        max={200000}
        value={maxValue}
        onChange={handleMaxChange}
        onMouseDown={handleMaxMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      />
      <div className="slider-track">
        <div
          className="slider-fill"
          style={{ left: `${(minValue / 200000) * 100}%`, width: `${((maxValue - minValue) / 200000) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
