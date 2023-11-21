import { useState, ChangeEvent } from "react";
import "./Reservation.css";

const Reservation = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // Use string | null for selectedOption

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => { // Use ChangeEvent<HTMLInputElement>
    setSelectedOption(event.target.value);
  };

  return (
    <div className="reservations-border">
      <div>
        <h1 className="reservations-title">
          Reservations and Payment <span>(how do you want to pay?)</span>
        </h1>
        <form action="#" className="reservations-payment-container">
          <div
            className={`flex-radio ${
              selectedOption === "bookhold" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="hotelpay"
              id="bookhold"
              value="bookhold"
              onChange={handleRadioChange}
            />
            <div className="flex-radioDiv">
              <label htmlFor="bookhold">
                Book on hold -<span> 20% of total price.</span>
              </label>
              <small>
                Make a payment of N1,060.00 now, and have your booking
                confirmed. Pay balance of N4,240.00 at hotel.
              </small>
            </div>
          </div>
          <div
            className={`flex-radio ${selectedOption === "paynow" ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="hotelpay"
              id="paynow"
              value="paynow"
              onChange={handleRadioChange}
            />
            <div className="flex-radioDiv">
              <label htmlFor="paynow">Pay now</label>
              <small>You can choose to make payment now with a card.</small>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
