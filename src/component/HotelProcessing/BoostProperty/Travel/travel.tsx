// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import "./travel.css";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Dates from "./TravelComponents/Dates";
import Star from "./TravelComponents/Star";
import Nightly from "./TravelComponents/Nightly";
import Time from "./TravelComponents/Time";
import City from "./TravelComponents/City";

interface TravelProps {
    dateString: string;
}

const Travel = ({ additionalContent }) =>{
    const [selectedDates, setSelectedDates] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [checkboxChecked, setCheckboxChecked] = useState(false);

    const handleStartDateChange = (date) => {
        setStartDate(date);
        updateSelectedDates(date, endDate);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        updateSelectedDates(startDate, date);
    };

    const updateSelectedDates = (start, end) => {
        if (start && end) {
        const newSelectedDates = [];
        const currentDate = new Date(start);
        
        while (currentDate <= end) {
            newSelectedDates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        
        setSelectedDates(newSelectedDates);
        }
    };

    const handleCancelDate = (date) => {
        const updatedSelectedDates = selectedDates.filter(
        selectedDate => selectedDate.getTime() !== date.getTime()
        );
        setSelectedDates(updatedSelectedDates);
    };

    const buttonDatePickerProps = {
    };

    const inputField = ({ amount, onAmountChange }) => (
        <input
          type="text"
          value={amount === 0 ? '' : Intl.NumberFormat('en-US').format(amount)}
          onChange={(event) => onAmountChange(event.target.value)}
        />
    );

    const timePickerRangePicker = ({ selectedRange, onRangeChange }) => (
        <TimePickerRangePicker selectedRange={selectedRange} onRangeChange={onRangeChange} />
    );
    
    return (
        <>

        <div className="startStop">
            <div className="row">
                <div className="startStopBoostPropertyCol">
                    <div className=''>
                        <DatePicker selected={startDate} onChange={handleStartDateChange} placeholderText='Start date' className='startDateTravel'/>
                    </div>
                </div>

                <div className="startStopBoostPropertyCol">
                    <div className=''>
                        <DatePicker selected={endDate} onChange={handleEndDateChange} placeholderText='Stop date' className='stopDateTravel'/>
                    </div>
                </div>
            </div>
           
        </div>
        

        <div className='adDatesCont'>
            <div className='adDates'>
                {selectedDates.map(date => (
                <div className="selectedDates" key={date.getTime()}>
                    <span>
                    {date.toDateString()}
                    </span>
                    
                    <button onClick={() => handleCancelDate(date)}>X</button>
                </div>
                ))}
            </div>
        </div>

        <div className="travelSpcingTop">
            <Dates 
             checkboxChecked={checkboxChecked}
             onCheckboxChange={() => setCheckboxChecked(!checkboxChecked)}
             buttonDatePickerProps={buttonDatePickerProps}
            />
            <Star />
            <Nightly 
            checkboxChecked={checkboxChecked}
            inputField={inputField}
            />
            <Time 
            checkboxChecked={checkboxChecked}
            timePickerRangePicker={timePickerRangePicker} 
            />
            <City 
            checkboxChecked={checkboxChecked}
            inputField={inputField}
            />
        </div>
           

           <br />

           <div className="totalCostAd">
                  Total cost of Ads   =  N10,000.00
            </div>

            <div className="noteTextTravel">
                <span>
                Note*
                </span>
                Payment will be deducted from your account at the end of the advertisement period.
            </div>

            <button className="createButtonTravel">
                Create
            </button>
                
        </>
    );
};

export default Travel;