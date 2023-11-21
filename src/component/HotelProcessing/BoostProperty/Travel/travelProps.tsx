// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import Dates from "./TravelComponents/Dates";
import Star from "./TravelComponents/Star";
import Nightly from "./TravelComponents/Nightly";
import Time from "./TravelComponents/Time";
import City from "./TravelComponents/City";

interface TravelPropsProps {
    additionalContent: React.ReactNode;
    checkboxChecked: boolean;
    setCheckboxChecked: (checked: boolean) => void;
}

const TravelProps: React.FC<TravelPropsProps> = ({ additionalContent, checkboxChecked, setCheckboxChecked }) => {
    return (
        <>
            {additionalContent}
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
        </>
    );
};

export default TravelProps;