/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import "../travel.css";
import { TimePicker } from 'antd';
import React, { useState } from 'react';
import "../../../../../pages/hotelBooking/booking.css"

const Time = () =>{
    const [selectedRange, setSelectedRange] = useState([]);
    const handleRangeChange = (timeRange, timeString) => {
        setSelectedRange(timeRange);
    };

    return(
        <>
            <form className="BoostPropertyInline" action="/">
                <label className="BoostPropertyTravelContainer">
                    Appear on the top hotel search for a time duration.
                    <input type="checkbox" />
                    <span className="BoostPropertyTravelCheckMark"></span>
                </label>

                <div>
                    <div>
                        <TimePicker.RangePicker
                        format="HH:mm"
                        value={selectedRange}
                        onChange={handleRangeChange}
                        />
                    </div>
                </div>
                
                <p className="smaller">N2,000.00/day</p>
            </form>
        </>
    );
};

export default Time;