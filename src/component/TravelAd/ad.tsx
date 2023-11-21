// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ".//ad.css"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const names = [
  'Single',
  'Double',
  'Twin',
  'Studio suite',
  'Quadruple',
  'Cottage',
  'Chalet',
  'Suite',
];

interface AdProps {
  personName: string[];
  setPersonName: (value: string[]) => void;
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
  endDate: Date | null;
  setEndDate: (date: Date | null) => void;
  selectedDates: Date[];
  setSelectedDates: (dates: Date[]) => void;
}

const Ad: React.FC<AdProps> = () => {
  const [personName, setPersonName] = useState<string[]>([]);
  const changeHandling = (event) => {
    const { target: { value } } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [selectedDates, setSelectedDates] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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

  return (
    <>
      <div className="travelContainer">
        <p>
          The hotel will advertise their property on our various pages on the website. The charge will be based on duration. We will provide fixed advert sizes. 
          Special rate apply for ads on homepage.
        </p>

        <div className="tAds-inline">
          <div>
            <FormControl sx={{ m: 1, width: 300 }} >
              <Select
              className="dropdownAds"
              displayEmpty
              value={personName}
              onChange={changeHandling}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                  if (selected.length === 0) {
                  return <>Select page type</>;
                  }

                  return selected.join(', ');
              }}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
              >
              <MenuItem disabled value="">
              </MenuItem>
              {names.map((name) => (
                  <MenuItem
                  key={name}
                  value={name}
                  >
                  {name}
                  </MenuItem>
              ))}
              </Select>
            </FormControl>
          </div>

          <div className='leftFromDate'>
            <DatePicker selected={startDate} onChange={handleStartDateChange} placeholderText='From date' className='fromDate'/>
          </div>

          <div className='leftToDate'>
            <DatePicker selected={endDate} onChange={handleEndDateChange} placeholderText='To date' className='toDate'/>
          </div>

          <div className='adDatesCont'>
            <div className='adDates'>
              {selectedDates.map(date => (
                <p key={date.getTime()}>
                  <span>
                    {date.toDateString()}
                  </span>
                  
                  <button onClick={() => handleCancelDate(date)}>X</button>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="totalCostAd">
          Total cost of Ads = N5,000.00
        </div>

        <div className="noteTextAds">
          <span>
            Note*
          </span>
          Payment will be deducted from your account at the end of the advertisement period.
        </div>

        <button className="createAdBtn">
          Create
        </button>
      </div>
    </>
  );
};

export default Ad;