/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import "../travel.css";
// import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { Dayjs } from 'dayjs';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { UseDateFieldProps } from '@mui/x-date-pickers/DateField';
import {
  BaseSingleInputFieldProps,
  DateValidationError,
  FieldSection,
} from '@mui/x-date-pickers/models';

interface ButtonFieldProps
  extends UseDateFieldProps<Dayjs>,
    BaseSingleInputFieldProps<
      Dayjs | null,
      Dayjs,
      FieldSection,
      DateValidationError
    > {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

function ButtonField(props: ButtonFieldProps) {
    const {
      setOpen,
      label,
      id,
      disabled,
      InputProps: { ref } = {},
      inputProps: { 'aria-label': ariaLabel } = {},
    } = props;
  
    return (
      <Button
        variant="outlined"
        id={id}
        disabled={disabled}
        ref={ref}
        aria-label={ariaLabel}
        onClick={() => setOpen?.((prev) => !prev)}
      >
        {label ?? 'Pick a date'}
      </Button>
    );
  }
  
  function ButtonDatePicker(
    props: Omit<DatePickerProps<Dayjs>, 'open' | 'onOpen' | 'onClose'>,
  ) {
    const [open, setOpen] = React.useState(false);
  
    return (
      <DatePicker
        slots={{ field: ButtonField, ...props.slots }}
        slotProps={{ field: { setOpen } as any }}
        {...props}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        className="datePickerTravel"
      />
    );
  }
  

const Dates = ({ checkboxChecked, onCheckboxChange, buttonDatePickerProps }) => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    return(
        <>
            <form className="BoostPropertyInline" action="/">
                <label className="BoostPropertyTravelContainer">
                    Appear on the top hotel search for a particular day.
                    <input type="checkbox" />
                    <span className="BoostPropertyTravelCheckMark"></span>
                </label>
                <div>
                    <div className="dateChanger">

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={1}>
                                <ButtonDatePicker
                                label={` ${
                                    value == null ? 'Input date(s)' : value.format('MM/DD/YYYY')
                                }`}
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                className="datePickerTravel"
                                />
                            </Stack>
                        </LocalizationProvider>
                    </div>
                    
                </div>
                
                <p className="smallerThree">N2,000.00/day</p>
            </form>
        </>
    );
};

export default Dates;