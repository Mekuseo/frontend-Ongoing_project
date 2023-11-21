import React from 'react';
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
  selectedPageType: string[];
  onPageTypeChange: (newValue: string[]) => void;
  fromDate: string;
  toDate: string;
  onFromDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Ad: React.FC<AdProps> = ({
  selectedPageType,
  onPageTypeChange,
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
}) => {
  const changeHandling = (event: SelectChangeEvent<typeof selectedPageType>) => {
    const {
      target: { value },
    } = event;
    onPageTypeChange(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <>
      <div className="travelContainer">
        <p>
          The hotel will advertise their property on our various pages on the website. The charge will be based on duration. We will provide fixed advert sizes.
          Special rate apply for ads on homepage.
        </p>

        <div className="tAds-inline">
          <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <Select
              className="dropdownAds"
              displayEmpty
              value={selectedPageType}
              onChange={changeHandling}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Select page type</em>;
                }

                return selected.join(', ');
              }}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem disabled value="" />
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <input
            type="text"
            placeholder="From date"
            value={fromDate}
            onChange={onFromDateChange}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="To date"
            value={toDate}
            onChange={onToDateChange}
          />
        </div>

        <button className="createAdBtn">Create</button>
      </div>
    </>
  );
};

export default Ad;