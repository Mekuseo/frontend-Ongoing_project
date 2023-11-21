import { FaCalendarAlt, FaSearch, FaDoorOpen } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./HotelSearchBar.css";

interface HotelSearchBarProps {
  setCheckinDate: React.Dispatch<React.SetStateAction<Date | null>>;
  checkinDate: Date | null;
  setCheckoutDate: React.Dispatch<React.SetStateAction<Date | null>>;
  checkoutDate: Date | null;
  setRoomCount: Dispatch<SetStateAction<number>>;
  roomCount: number;
  setAdultCount: Dispatch<SetStateAction<number>>;
  setChildCount: Dispatch<SetStateAction<number>>;
  adultCount: number;
  childCount: number;
  setNumberOfNight: Dispatch<SetStateAction<number>>;
  numberOfNight: number;
}

const HotelSearchBar: React.FC<HotelSearchBarProps> = ({
  setCheckinDate,
  checkinDate,
  setCheckoutDate,
  checkoutDate,
  setRoomCount,
  roomCount,
  setAdultCount,
  setChildCount,
  adultCount,
  childCount,
  setNumberOfNight,
  numberOfNight,
}) => {
  const [showRoomPicker, setShowRoomPicker] = useState(false);
  const [showCheckinCalendar, setShowCheckinCalendar] = useState(false);
  const [showCheckoutCalendar, setShowCheckoutCalendar] = useState(false);

  const handleRoomPickerToggle = () => {
    setShowRoomPicker((prevValue) => !prevValue);
  };

  const handleRoomIncrement = () => {
    setRoomCount((prevValue) => prevValue + 1);
  };

  const handleRoomDecrement = () => {
    setRoomCount((prevValue) => Math.max(prevValue - 1, 1));
  };

  const handleAdultIncrement = () => {
    setAdultCount((prevValue) => prevValue + 1);
  };

  const handleAdultDecrement = () => {
    setAdultCount((prevValue) => Math.max(prevValue - 1, 1));
  };

  const handleChildIncrement = () => {
    setChildCount((prevValue) => prevValue + 1);
  };

  const handleChildDecrement = () => {
    setChildCount((prevValue) => Math.max(prevValue - 1, 0));
  };

  const handleCheckinClick = () => {
    setShowRoomPicker(false);
    setShowCheckinCalendar(!showCheckinCalendar);
    setShowCheckoutCalendar(false);
  };

  const handleCheckoutClick = () => {
    setShowRoomPicker(false);
    setShowCheckoutCalendar(!showCheckoutCalendar);
    setShowCheckinCalendar(false);
  };

  const calculateNumberOfNights = (
    checkIn: Date | null,
    checkOut: Date | null
  ): number => {
    console.log(checkIn);
    console.log(checkOut);
    if (checkIn && checkOut) {
      const timeDifference = checkOut.getTime() - checkIn.getTime();
      const numberOfNights = Math.ceil(timeDifference / (1000 * 3600 * 24));
      setNumberOfNight(numberOfNights);
      console.log(numberOfNights);
      console.log(numberOfNight);
      return numberOfNights;
    }
    return 1;
  };

  return (
    <div>
      <div className="overviewDetails-card hotelSearch-container">
        <div className="hotelDetail-topSearchInfo hotelSearchBar-container">
          <p>
            <FaDoorOpen /> Select your room
          </p>
          <button onClick={handleCheckinClick}>
            <FaCalendarAlt />{" "}
            {checkinDate ? checkinDate.toLocaleDateString() : "Check-in"}
          </button>
          <button onClick={handleCheckoutClick}>
            <FaCalendarAlt />{" "}
            {checkoutDate ? checkoutDate.toLocaleDateString() : "Check-out"}
          </button>
          <button onClick={handleRoomPickerToggle}>
            <HiUsers /> {adultCount + childCount} guests - {roomCount} Room
            {showRoomPicker && (
              <div className="navBar-roomPicker">
                <div className="roomPicker-single">
                  <p>Room</p>
                  <div className="roomPicker-btn">
                    <div onClick={handleRoomDecrement}>-</div>
                    <p>{roomCount}</p>
                    <div onClick={handleRoomIncrement}>+</div>
                  </div>
                </div>
                <div className="roomPicker-single">
                  <p>Adults</p>
                  <div className="roomPicker-btn">
                    <div onClick={handleAdultDecrement}>-</div>
                    <p>{adultCount}</p>
                    <div onClick={handleAdultIncrement}>+</div>
                  </div>
                </div>
                <div className="roomPicker-single">
                  <p>Children</p>
                  <div className="roomPicker-btn">
                    <div onClick={handleChildDecrement}>-</div>
                    <p>{childCount}</p>
                    <div onClick={handleChildIncrement}>+</div>
                  </div>
                </div>
              </div>
            )}
          </button>
          <button className="topSearch-btn">
            Search <FaSearch />
          </button>
        </div>

        <div className="calendar-container">
          {showCheckinCalendar && (
            <DatePicker
              selected={checkinDate}
              onChange={(date) => {
                setCheckinDate(date);
                setShowCheckinCalendar(false);
                calculateNumberOfNights(date, checkoutDate);
              }}
              inline
              // showMonthDropdown
              minDate={new Date()}
              // useShortMonthInDropdown
              monthsShown={2}
            />
          )}
          {showCheckoutCalendar && (
            <DatePicker
              selected={checkoutDate}
              onChange={(date) => {
                setCheckoutDate(date);
                setShowCheckoutCalendar(false);
                calculateNumberOfNights(checkinDate, date);
              }}
              inline
              // showMonthDropdown
              minDate={addDays(new Date(), 1)}
              // useShortMonthInDropdown
              monthsShown={2}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelSearchBar;
