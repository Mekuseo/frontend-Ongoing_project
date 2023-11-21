// FlipDigit.tsx
import React from 'react';
import ".//time.css";

interface FlipDigitProps {
  digit: number;
}

const FlipTime: React.FC<FlipDigitProps> = ({ digit }) => {
  const digitStr = digit.toString().padStart(2, '0');

  return (
    <div className="flip-digit">
      <div className="digit-container">
        <div className="digit-top">{digitStr}</div>
        <div className="digit-bottom">{digitStr}</div>
      </div>
    </div>
  );
};

export default FlipTime;
