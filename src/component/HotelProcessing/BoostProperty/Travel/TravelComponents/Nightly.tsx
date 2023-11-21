// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from 'react';
import "../travel.css";

const InputField = ({ amount, onAmountChange }) => {
    const handleAmountChange = event => {
      const input = event.target.value;
      const numericInput = input.replace(/[^0-9]/g, '');
      onAmountChange(numericInput);
    };
  
    return (
      <div className="inputPriceTravel">
        <span className='naira'>₦</span>
        <input
          type="text"
          value={amount === 0 ? '' : Intl.NumberFormat('en-US').format(amount)}
          onChange={handleAmountChange}
        />
        <span className='digit'>.00</span>
      </div>
    );
};

const Nightly = ({ inputField }) => {
    const [amount, setAmount] = useState(0);
  
    const handleAmountChange = (newAmount) => {
      setAmount(newAmount);
    };

    return(
        <>
            <form className="BoostPropertyInline" action="/">
                <label className="BoostPropertyTravelContainer">
                    Appear on the top hotel search when hotel is searched based on the price. 
                    <input type="checkbox" />
                    <span className="BoostPropertyTravelCheckMark"></span>
                </label>
                    <div>
                        <div className="inputPriceTravel">
                            <span className='naira'>₦</span>
                            {inputField({ amount, onAmountChange: handleAmountChange })}
                            <span className='digit'>.00</span>
                        </div>
                    </div>


                {/* <input type="text" className="inputPriceTravel" placeholder="Input rate"/> */}
                
                <p className="smallerThree">N2,000.00/day</p>
            </form>
        </>
    );
};

export default Nightly;