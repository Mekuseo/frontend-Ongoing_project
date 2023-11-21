// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import ".//dealsDetails.css"

const DateRangePicker: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  // const isDateDisabled = (date: Date) => {
  //   const today = new Date();
  //   return date < today;
  // };

  const handleCheckInDateChange = (date: Date | null) => {
    setCheckInDate(date);
    if (checkOutDate && date && date > checkOutDate) {
      setCheckOutDate(null);
    }
  };

  const handleCheckOutDateChange = (date: Date | null) => {
    setCheckOutDate(date);
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);


  

  return (
    <>
    <div className="custom-date-range-picker">
      <div className="date-picker-container">
        <label>Check-In</label>
        <DatePicker
          selected={checkInDate}
          onChange={handleCheckInDateChange}
          minDate={new Date()} 
          selectsStart
          startDate={checkInDate}
          endDate={checkOutDate}
          placeholderText={today.toLocaleDateString()}
        />
      </div>
      <div className="date-picker-container">
        <label>Check-Out</label>
        <DatePicker
          selected={checkOutDate}
          onChange={handleCheckOutDateChange}
          minDate={checkInDate}
          selectsEnd
          startDate={checkInDate}
          endDate={checkOutDate}
          placeholderText={tomorrow.toLocaleDateString()}
        />
      </div>
      
    </div>
    </>
  );
};

export default DateRangePicker;
