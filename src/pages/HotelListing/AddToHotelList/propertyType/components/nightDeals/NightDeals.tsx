import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import React, { useState } from "react";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "react-calendar/dist/Calendar.css";
import "./NightDeals.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import NightlyRateIcons from "./NightlyRateIcons";
import DiscountRateCounter from "./DiscountRateCounter";

const numberFormat = (value: number | null) =>
  value !== null
    ? new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(value)
    : "";

const PrimaryTypography = styled(Typography)({
  fontFamily: "Volkhov, sans-serif",
  fontSize: "25px",
  fontWeight: "700",
});

const TertiaryTypography = styled(Typography)({
  fontFamily: "Volkhov, sans-serif",
  fontSize: "20px",
});

const theme = createTheme();

interface NightDealsProps {
  late_Night_Deal_Off: number;
  setLate_Night_Deal_Off: (valueType: number) => void;
  automate_late_night_deals: boolean;
  setAutomate_Late_Night_Deals: (valueType: boolean) => void;
  selectedDates: Date[];
  setSelectedDates: (valueType: Date[]) => void;
  hasSelectedDates: boolean;
  setHasSelectedDates: (valueType: boolean) => void;
  roomAvailability: number;
  setRoomAvailability: (value: number) => void;
  nightlyRate: number;
  nightDealsDiscount: string;
  discountedPrice: number | null;
  setDiscountedPrice: (value: number | null) => void;
  setNightDealsDiscount: (value: string) => void;
}

const NightDeals: React.FC<NightDealsProps> = ({
  // late_Night_Deal_Off,
  // setLate_Night_Deal_Off,
  automate_late_night_deals,
  setAutomate_Late_Night_Deals,
  selectedDates,
  setSelectedDates,
  hasSelectedDates,
  setHasSelectedDates,
  roomAvailability,
  setRoomAvailability,
  nightlyRate,
  nightDealsDiscount,
  discountedPrice,
  setDiscountedPrice,
  setNightDealsDiscount,
}) => {
  const handleNightDealsDiscount = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const discountValue = event.target.value;
    setNightDealsDiscount(discountValue);

    if (discountValue.trim() !== "") {
      const discountPrice = (nightlyRate * parseInt(discountValue)) / 100;
      setDiscountedPrice(discountPrice);
    } else {
      setDiscountedPrice(null);
    }
  };

  if (selectedDates === undefined) {
    selectedDates = [];
  }
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleCheckboxChange = (isChecked: boolean) => {
    setShowDatePicker(isChecked);
    setHasSelectedDates(isChecked);
    setAutomate_Late_Night_Deals(isChecked);
  };

  const handleDateChange = (date: Date | Date[]) => {
    if (!Array.isArray(date)) {
      date = [date]; // Convert to an array if it's not already
    }

    if (date.length > 0) {
      // Update the selected dates
      setSelectedDates([...selectedDates, ...date]);
      setHasSelectedDates(true);
    }
  };

  const handleClearDate = (dateToRemove: Date) => {
    const updatedDates = selectedDates.filter((date) => date !== dateToRemove);
    setSelectedDates(updatedDates);
    if (updatedDates.length === 0) {
      setHasSelectedDates(false);
    }
  };

  const adaptedHandleDateChange = (newValue: Date | Date[] | null) => {
    if (newValue !== null) {
      handleDateChange(newValue);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <PrimaryTypography
          style={{
            fontFamily: "Volkhov, sans-serif",
          }}
          variant="h5"
          className="latenightdealsextranet"
        >
          Nightly Deals
        </PrimaryTypography>
        <div className="nightDeals-container">
          <TertiaryTypography className="nightDeals-cardTitle">
            How it works
          </TertiaryTypography>

          <div className="nightDeals-flex">
            <div className="nightdealsTextEx">
              <NightlyRateIcons />
              <p>30% discount on room price.</p>
            </div>
          </div>

          <div className="nightDeals-flex">
            <div className="nightdealsTextEx">
              <NightlyRateIcons />
              <p>
                Check-in time is from 9:00pm, and hotel check-out time applies.
              </p>
            </div>
          </div>

          <div className="nightDeals-flex">
            <div className="nightdealsTextEx">
              <NightlyRateIcons />
              <p>Guests make payment immediately, no cancellation.</p>
            </div>
          </div>

          <div className="nightDeals-flex">
            <div className="nightdealsTextEx">
              <NightlyRateIcons />
              <p>TheTravelHunters take 7% from the deal.</p>
            </div>
          </div>

          <div className="nightDeals-flex">
            <div className="nightdealsTextEx">
              <NightlyRateIcons />
              <p>Deal goes live 8:00pm daily, on the website.</p>
            </div>
          </div>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
          >
            <FormControl sx={{ width: "80px" }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">% off</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                value={nightDealsDiscount}
                placeholder="15"
                className="nightDeals-discount"
                onChange={handleNightDealsDiscount}
              />
            </FormControl>
            <div className="nightDeals-discount-display">
              {discountedPrice !== null
                ? numberFormat(discountedPrice)
                : "Discount Price"}{" "}
            </div>
          </div>

          <DiscountRateCounter
            roomAvailability={roomAvailability}
            setRoomAvailability={setRoomAvailability}
          />

          <div className="calendarContainer">
            <input
              type="checkbox"
              value="Yes"
              name="Yes"
              checked={automate_late_night_deals}
              onChange={(e) => handleCheckboxChange(e.target.checked)}
            />
            <span className="calendarText" style={{ color: "red" }}>
              Automate late night deals
            </span>
            <Typography
              className="calendarNote"
              style={{ fontSize: "10px", color: "#6E9E76" }}
            >
              *select days in calendar
            </Typography>
            <div className="selectedDateContainer">
              {hasSelectedDates &&
                selectedDates &&
                selectedDates.length > 0 && (
                  <div className="selectedDates">
                    {selectedDates.map((date, index) => (
                      <div className="selectedDate" key={index}>
                        {dayjs(date).format("YYYY-MM-DD")}
                        <FontAwesomeIcon
                          icon={faTimes}
                          size="lg"
                          style={{
                            color: "#fa0000",
                            cursor: "pointer",
                            borderLeft: "1px solid #263238",
                            paddingLeft: "5px",
                          }}
                          onClick={() => handleClearDate(date)}
                        />
                      </div>
                    ))}
                  </div>
                )}
            </div>
            {showDatePicker && (
              <div className="datePickerContainer">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker value={null} onChange={adaptedHandleDateChange} />
                </LocalizationProvider>
              </div>
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NightDeals;
