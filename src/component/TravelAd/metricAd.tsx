/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import Calendar from "../HotelProcessing/BoostProperty/calendar";
import "../../pages/hotelBooking/booking.css"
import dayjs, { Dayjs } from 'dayjs';

const metricAd: React.FC = () => {
    const [rangePickerValue, setRangePickerValue] = useState<[Dayjs | null, Dayjs | null] | null>(null);
  
    const handleRangePickerChange = (dates: [Dayjs | null, Dayjs | null] | null, dateStrings: [string, string]) => {
      setRangePickerValue(dates);
    };
    return(
        <>
            <h1 className="metricsHeader">
                User metrics for property performance based on this advert.
            </h1>

            <div className="travelContainer">
                <div className="row">
                    <div className="metricsAdColumn">
                        <h1>
                            24
                        </h1>

                        <h6>
                            Number of clicks on property
                        </h6>
                    </div>

                    <div className="metricsAdColumn">
                        <h1>
                            40
                        </h1>

                        <h6>
                            Number of views on property
                        </h6>
                    </div>
                </div>

                <div className="metricsDate">
                    <Calendar rangePickerValue={rangePickerValue} onRangePickerChange={handleRangePickerChange} />
                </div>

                <br />
            </div>
        </>
    );
};

export default metricAd;