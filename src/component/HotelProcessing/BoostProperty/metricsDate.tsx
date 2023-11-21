/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as React from "react";
import { render } from "react-dom";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


const MetricsDate = () => {
  const [startDate, setDate] = React.useState(new Date)
  const [rangeStart, setRangeStart] = React.useState(new Date)
  const defaultEndDate = new Date()
  defaultEndDate.setDate(defaultEndDate.getDate() + 7)
  const [rangeEnd, setRangeEnd] = React.useState(defaultEndDate)
  const today = new Date()

  const selectDateHandler = (d) => {
    setDate(d)
  }

  const selectStartDate = d => {
    setRangeStart(d)
  }

  const selectEndDate = d => {
    setRangeEnd(d)
  }
  return (
    <div className="row">
        <div className="metricsColumn">
             <label htmlFor="">l</label>
             <div className="datePickerMetric">
                <DatePicker
                    selectsStart
                    selected={rangeStart} 
                    minDate={today}
                    startDate={rangeStart} 
                    endDate={rangeEnd}
                    onChange={selectStartDate} 
                    />
            </div>
        </div>

        <div className="metricsColumn">
            <label htmlFor="">l</label>
            <DatePicker
                selectsEnd
                selected={rangeEnd} 
                startDate={rangeStart} 
                endDate={rangeEnd}
                onChange={selectEndDate} 
            />
        </div>
       

    </div>
  );
}

export default MetricsDate;