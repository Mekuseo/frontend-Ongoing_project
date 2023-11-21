/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import "../../../pages/hotelBooking/booking.css"
import Calendar from "./calendar";
import MetricsDate from "./metricsDate";
import dayjs, { Dayjs } from 'dayjs';

const Metrics: React.FC = () => {
    const [rangePickerValue, setRangePickerValue] = useState<[Dayjs | null, Dayjs | null] | null>(null);
  
    const handleRangePickerChange = (dates: [Dayjs | null, Dayjs | null] | null, dateStrings: [string, string]) => {
      setRangePickerValue(dates);
    };
    return (
        <>
            <h1 className="metricsHeader">
                User metrics for property performance
            </h1>

            <div className="boostPropContainer">
                <div className="row">
                    <div className="metricsColumn">
                        <h1>
                            24
                        </h1>

                        <p>
                            No. of click per property
                        </p>
                    </div>

                    <div className="metricsColumn">
                        <h1>
                            40
                        </h1>

                        <p>
                            No. of times your property has been searched for
                        </p>
                    </div>

                    <div className="metricsColumn">
                        <h1>
                            10
                        </h1>

                        <p>
                            No. of views per property
                        </p>
                    </div>
                </div>

                <div className="metricsDate">
                     <Calendar rangePickerValue={rangePickerValue} onRangePickerChange={handleRangePickerChange} />
                </div>
                
            </div>
        </>
    );
};

export default Metrics;