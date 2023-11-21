import React, { useState } from 'react';
import './eventReservation.css';

interface PaymentCheckProps {
  label: string;
  additionalContent: string;
}

const PaymentCheck: React.FC<PaymentCheckProps> = ({ label, additionalContent }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className={`paymentCheckContainer ${isChecked ? '' : ''}`}>
        {label}
        <input
          type="radio"
          className="makePaymentMoreContentToggle"
          checked={isChecked}
          onChange={handleCheckboxChange}
          name="radio"
        />

        <span className="makePaymentCheckmark"></span>
        <div className={`makePaymentMoreContent ${isChecked ? 'show' : ''}`}>
          {additionalContent}
        </div>
      </label>
    </>
  );
};

export default PaymentCheck;
