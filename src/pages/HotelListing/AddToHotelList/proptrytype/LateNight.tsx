import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import arrowimage from "../../../../assets/pics/Vector-4.png";

const LateNight = () => {
  return (
    <div>
      <p className="propTypeHeaderreused">Late night deals</p>

      <br />
      <br />

      <div className="typeContainerFour">
        <p className="detailsA">How it works.</p>

        <div className="list">
          <p>
            <img src={arrowimage} alt="" className="list" />
            30% discount off room prices.
          </p>

          <br />

          <p>
            <img src={arrowimage} alt="" className="list" />
            Check-in time is from 9:00pm, and property check-out time applies.
          </p>

          <br />

          <p>
            <img src={arrowimage} alt="" className="list" />
            Guests make payment immediately, no cancellation.
          </p>

          <br />

          <p>
            <img src={arrowimage} alt="" className="list" />
            TheTravelHunters take 7% from the deal.
          </p>

          <br />

          <p>
            <img src={arrowimage} alt="" className="list" />
            Deal goes live everyday by 8:30pm on our website.
          </p>
        </div>

        <label className="containerCalendar">
          <p className="automate">
            Automate late night deals
            <sup>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                *Select days in calender
                <DatePicker />
              </LocalizationProvider>
            </sup>
          </p>

          <input type="checkbox" />
          <span className="tick"></span>
        </label>
      </div>
    </div>
  );
};

export default LateNight;
