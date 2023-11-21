import React, { ChangeEvent } from "react";
import "./RoomRates.css";
import NightDeals from "../nightDeals/NightDeals";

const numberFormat = (value: number | null): string => {
  if (value !== null) {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(value);
  }
  return "";
};

interface RoomRatesProps {
  nightlyRate: number;
  weeklyDiscount: number;
  monthlyDiscount: number;
  roomDiscount: number;
  late_Night_Deal_Off: number;
  automate_late_night_deals: boolean;
  selectedDates: Date[];
  hasSelectedDates: boolean;
  roomAvailability: number;
  discountedPrice: number | null;
  nightDealsDiscount: string;
  setNightDealsDiscount: (value: string) => void;
  setDiscountedPrice: (value: number | null) => void;
  setRoomAvailability: (value: number) => void;
  onNightlyRateChange: (value: number) => void;
  onWeeklyRateChange: (value: number) => void;
  onMonthlyRateChange: (value: number) => void;
  onRoomDiscountChange: (value: number) => void;
  setLate_Night_Deal_Off: (valueType: number) => void;
  setAutomate_Late_Night_Deals: (valueType: boolean) => void;
  setSelectedDates: (valueType: Date[]) => void;
  setHasSelectedDates: (valueType: boolean) => void;
}

const RoomRates: React.FC<RoomRatesProps> = ({
  nightlyRate,
  weeklyDiscount,
  monthlyDiscount,
  roomDiscount,
  late_Night_Deal_Off,
  automate_late_night_deals,
  selectedDates,
  hasSelectedDates,
  roomAvailability,
  discountedPrice,
  nightDealsDiscount,
  setDiscountedPrice,
  setNightDealsDiscount,
  setRoomAvailability,
  onNightlyRateChange,
  onWeeklyRateChange,
  onMonthlyRateChange,
  onRoomDiscountChange,
  setLate_Night_Deal_Off,
  setAutomate_Late_Night_Deals,
  setSelectedDates,
  setHasSelectedDates,
}) => {
  const handleNightlyRateChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(automate_late_night_deals);
    console.log(nightlyRate);
    const inputtedValue = event.target.value.replace(/[^\d.]/g, "");
    const numericValue = parseFloat(inputtedValue);

    if (!isNaN(numericValue)) {
      onNightlyRateChange(numericValue);
      if (weeklyDiscount !== null) {
        onWeeklyRateChange((numericValue * weeklyDiscount) / 100);
      }
    } else {
      onNightlyRateChange(0);
      onWeeklyRateChange(0);
    }

    if (inputtedValue === "" || isNaN(parseFloat(inputtedValue))) {
      onNightlyRateChange(0);
      onWeeklyRateChange(0);
    } else {
      const numericValue = parseFloat(inputtedValue);
      onNightlyRateChange(numericValue);
      if (weeklyDiscount !== null) {
        onWeeklyRateChange((numericValue * weeklyDiscount) / 100);
      }
    }
  };

  const handleWeeklyRateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputtedValue = event.target.value.replace(/[^\d.]/g, "");
    const numericValue = parseFloat(inputtedValue);
    const isPercentage = inputtedValue.includes("%");

    if (!isNaN(numericValue)) {
      if (isPercentage) {
        if (nightlyRate !== null) {
          const calculatedDiscount = (numericValue / 100) * nightlyRate;
          onWeeklyRateChange(calculatedDiscount);
        }
      } else {
        onWeeklyRateChange(numericValue);
      }
    } else {
      onWeeklyRateChange(0);
    }

    if (inputtedValue === "" || isNaN(parseFloat(inputtedValue))) {
      onWeeklyRateChange(0);
    } else {
      const numericValue = parseFloat(inputtedValue);
      onWeeklyRateChange(numericValue);
      if (nightlyRate !== null) {
        onNightlyRateChange(nightlyRate);
      }
    }
  };

  const handleMonthlyRateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputtedValue = event.target.value.replace(/[^\d.]/g, "");
    const numericValue = parseFloat(inputtedValue);

    if (!isNaN(numericValue)) {
      onMonthlyRateChange(numericValue);
    } else {
      onMonthlyRateChange(0);
    }

    if (inputtedValue === "" || isNaN(parseFloat(inputtedValue))) {
      onMonthlyRateChange(0);
    } else {
      const numericValue = parseFloat(inputtedValue);
      onMonthlyRateChange(numericValue);
    }
  };

  const handleRoomDiscount = (event: ChangeEvent<HTMLInputElement>) => {
    const inputtedValue = event.target.value.replace(/[^\d.]/g, "");
    const numericValue = parseFloat(inputtedValue);

    if (!isNaN(numericValue)) {
      onRoomDiscountChange(numericValue);
    } else {
      onRoomDiscountChange(0);
    }

    if (inputtedValue === "" || isNaN(parseFloat(inputtedValue))) {
      onRoomDiscountChange(0);
    } else {
      const numericValue = parseFloat(inputtedValue);
      onRoomDiscountChange(numericValue);
    }
  };

  return (
    <div className="roomRates-container">
      <div className="property-roomDetails-container">
        <p>Room rates</p>
      </div>
      <small className="roomratessmall">
        You get to input your prices based on guests and other prevailing
        factors.
      </small>
      <div className="roomRates-Cards" style={{ marginBottom: "20px" }}>
        <div className="roomRate-sections">
          <p>Nightly rates</p>
          <small>Input your price per night for this property</small>
          <div className="nightlyRates-price">
            <input
              type="text"
              placeholder="₦5,000.00"
              value={nightlyRate != null ? nightlyRate.toString() : ""}
              onChange={handleNightlyRateChange}
            />
            <span className="currency-display">
              {numberFormat(Number.isFinite(nightlyRate) ? nightlyRate : 0)}
            </span>
          </div>
        </div>

        <div className="roomRate-sections">
          <p>Weekly rates</p>
          <small>
            Discount that will apply when guest(s) book for 7 nights and more,
            up until 27 nights.
          </small>
          <div className="roomRates-discount">
            <input
              type="text"
              placeholder="10% off"
              className="roomRates-discount-input"
              value={weeklyDiscount != null ? `${weeklyDiscount}% off` : ""}
              onChange={handleWeeklyRateChange}
            />
            <div>
              {weeklyDiscount != null && nightlyRate != 0
                ? `${numberFormat(
                    nightlyRate - (weeklyDiscount / 100) * nightlyRate
                  )}`
                : "Discount price"}
            </div>
          </div>
        </div>

        <div className="roomRate-sections">
          <p>Monthly rates</p>
          <small>
            Discount that will apply when guest(s) book for 28 nights and more
          </small>
          <div className="roomRates-discount">
            <input
              type="text"
              placeholder="20% off"
              className="roomRates-discount-input"
              value={monthlyDiscount != null ? `${monthlyDiscount}% off` : ""}
              onChange={handleMonthlyRateChange}
            />
            <div>
              {monthlyDiscount != null && nightlyRate != null
                ? `${numberFormat(
                    nightlyRate - (monthlyDiscount / 100) * nightlyRate
                  )}`
                : "Discount price"}
            </div>
          </div>
        </div>

        <div className="roomRate-sections">
          <p>Offer guests a deal. This helps you get increased bookings</p>
          <div className="roomRates-discount">
            <input
              type="text"
              placeholder="20% off"
              className="roomRates-discount-input"
              value={roomDiscount != null ? `${roomDiscount}% off` : ""}
              onChange={handleRoomDiscount}
            />
            <div>
              {roomDiscount != null && nightlyRate != null
                ? `${numberFormat(
                    nightlyRate - (roomDiscount / 100) * nightlyRate
                  )}`
                : "Discount price"}
            </div>
          </div>
        </div>
        <small className="roomRates-notice">
          Guests will receive the lowest rate if multiple rates apply*
        </small>
      </div>
      <NightDeals
        late_Night_Deal_Off={late_Night_Deal_Off}
        setLate_Night_Deal_Off={setLate_Night_Deal_Off}
        automate_late_night_deals={automate_late_night_deals}
        setAutomate_Late_Night_Deals={setAutomate_Late_Night_Deals}
        selectedDates={selectedDates}
        setSelectedDates={setSelectedDates}
        hasSelectedDates={hasSelectedDates}
        setHasSelectedDates={setHasSelectedDates}
        roomAvailability={roomAvailability}
        setRoomAvailability={setRoomAvailability}
        nightlyRate={nightlyRate}
        discountedPrice={discountedPrice}
        nightDealsDiscount={nightDealsDiscount}
        setDiscountedPrice={setDiscountedPrice}
        setNightDealsDiscount={setNightDealsDiscount}
      />
    </div>
  );
};

export default RoomRates;
