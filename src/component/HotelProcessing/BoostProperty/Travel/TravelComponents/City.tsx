/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import "../travel.css";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};
const InputField = ({ placeholder }) => {
  return (
    <input
      type="text"
      className="inputPriceTravel"
      placeholder={placeholder}
    />
  );
};

const City = () =>{
    return(
        <>
            <form className="BoostPropertyInline" action="/">
                <label className="BoostPropertyTravelContainer">
                  Appear based on location being searched from.
                    <input type="checkbox" />
                    <span className="BoostPropertyTravelCheckMark"></span>
                </label>
                <div>
                  
                  <input type="text" className="inputPriceTravel" placeholder="Input city"/>
                    
                </div>
                
                <p className="smallerTwo">N2,000.00/day</p>
            </form>
        </>
    );
};

export default City;