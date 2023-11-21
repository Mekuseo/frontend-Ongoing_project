/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';

interface MarketingCheckboxesProps {
  onTotalValueChange: (newValue: number) => void;
}

const MarketingCheckboxes: React.FC<MarketingCheckboxesProps> = ({ onTotalValueChange }) => {
  const checkboxValue = 6000;
  const [totalValue, setTotalValue] = useState(6000);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const valueToAdd = isChecked ? checkboxValue : -checkboxValue;
    setTotalValue((prevTotal) => {
      const newTotal = prevTotal + valueToAdd;
      onTotalValueChange(newTotal);
      return newTotal;
    });
  };

  return (
    <div>
      <label className="marketingCheckContainer">
        Place an advert
        <input type="checkbox" defaultChecked={true} onChange={handleCheckboxChange} />
        <span className="marketingCheckmark"></span>
      </label>

      <label className="marketingCheckContainer">
        Appear on homepage by location being searched from
        <input type="checkbox" onChange={handleCheckboxChange} />
        <span className="marketingCheckmark"></span>
      </label>

      <label className="marketingCheckContainer">
        Feature in top trending events in the city
        <input type="checkbox" onChange={handleCheckboxChange} />
        <span className="marketingCheckmark"></span>
      </label>

      {/* <p>Total Value: {totalValue.toLocaleString()}</p> */}
    </div>
  );
};

export default MarketingCheckboxes;
