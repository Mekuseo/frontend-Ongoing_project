import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './form.css';

interface DatesProps {
  onSelectedDateChange: (dateString: string) => void;
  onDateRangeChange: (dateRangeString: string) => void;
}

const Dates: React.FC<DatesProps> = ({
  onSelectedDateChange,
  onDateRangeChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('singleDay');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleSelectedDate = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      onSelectedDateChange(date.toDateString());
    }
  };

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date && endDate) {
      onDateRangeChange(
        `${date.toDateString()} - ${endDate.toDateString()}`
      );
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    if (date && startDate) {
      onDateRangeChange(
        `${startDate.toDateString()} - ${date.toDateString()}`
      );
    }
  };

  return (
    <div className="datesCont">
      <div className="dateCreateEvent">
        <div>
          <label className="datesContainer">
            <input
              type="radio"
              name="dateOption"
              value="singleDay"
              checked={selectedOption === 'singleDay'}
              onChange={() => handleOptionChange('singleDay')}
            />
            <span className="datesCheckmark"></span>
            Single Day
          </label>

          <br />

          {selectedOption === 'singleDay' && (
            <DatePicker
              selected={selectedDate}
              onChange={handleSelectedDate}
              className="custom-datepicker-class"
              placeholderText="event date"
            />
          )}

          {/* {selectedOption === 'singleDay' && selectedDate && (
            <p>{selectedDate.toDateString()}</p>
          )} */}
        </div>

        <div>
          <label className="datesContainer">
            <input
              type="radio"
              name="dateOption"
              value="multipleDates"
              checked={selectedOption === 'multipleDates'}
              onChange={() => handleOptionChange('multipleDates')}
            />
            Multiple Dates
            <span className="datesCheckmark"></span>
          </label>
          <br />

          {selectedOption === 'multipleDates' && (
            <>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="custom-datepicker-class"
                placeholderText="start date"
              />
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="custom-datepicker-class"
                placeholderText="end date"
              />
            </>
          )}

          {/* {selectedOption === 'multipleDates' && startDate && endDate && (
            <p>
              {startDate.toDateString()} - {endDate.toDateString()}
            </p>
          )} */}
        </div>
      </div>
      <br/>
    </div>
  );
};

export default Dates;
