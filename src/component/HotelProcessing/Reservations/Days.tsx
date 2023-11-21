/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import ".//Days.css";
import DateDropDown from "./DateDropDown";
import Sunday from "./Days/sunday";
import Monday from "./Days/monday";
import Tuesday from "./Days/tuesday";
import Wednesday from "./Days/wednesday";
import Thursday from "./Days/thursday";
import Friday from "./Days/friday";

const options = [
    { value: 'option1', label: 'February' },
    { value: 'option2', label: 'March' },
    { value: 'option3', label: 'April' },
    { value: 'option4', label: 'May' },
    { value: 'option5', label: 'June' },
    { value: 'option6', label: 'July' },
    { value: 'option7', label: 'August' },
    { value: 'option8', label: 'September' },
    { value: 'option9', label: 'October' },
    { value: 'option10', label: 'November' },
    { value: 'option11', label: 'December' },
];

const daysReservations = () => {
    const handleSelect = (selectedValue: any) => {
        console.log('January', selectedValue);
        // You can perform any other actions based on the selected value here
    };
    return(
        <>
            <div className="daysReservationContainer">
                <div className="daysReservationContent">
                    <div className="row">
                        <div className="daysReservationColumn monthsColumn">
                            <DateDropDown options={options} onSelect={handleSelect} />
                        </div>

                        <div className="daysReservationColumn sundayColumn">
                            <Sunday />
                        </div>

                        <div className="daysReservationColumn mondayColumn">
                            <Monday />
                        </div>

                        <div className="daysReservationColumn tuesdayColumn">
                            <Tuesday />
                        </div>

                        <div className="daysReservationColumn wednesdayColumn">
                            <Wednesday />
                        </div>

                        <div className="daysReservationColumn thursdayColumn">
                            <Thursday />
                        </div>

                        <div className="daysReservationColumn fridayColumn">
                            <Friday />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default daysReservations