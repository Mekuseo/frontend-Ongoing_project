import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, isSameDay, isAfter, isBefore } from "date-fns"; // Import date-fns functions
// import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
// import { isSameDay } from "date-fns";
import "./TopSearchBar.css";
// import GuestsIcon from "../../../hotelPage/components/svgIcons/GuestsIcon";
// import LocationIcon from "../../../../svgs/LocationIcon";
import axios from "axios";
import { baseURL } from "../../../../severs/auth";
import { useNavigate } from "react-router-dom";
import SearchLocation from "../../../../pages/hotelPage/components/svgIcons/searchlocation";
import SearchHotel from "../../../../pages/hotelPage/components/svgIcons/searchhotel";

interface TopSearchBar {
  hotelSearch: string;
  setHotelSearchString: Dispatch<SetStateAction<string>>;
  setCheckinDate: React.Dispatch<React.SetStateAction<Date | null>>;
  checkinDate: Date | null;
  setCheckoutDate: React.Dispatch<React.SetStateAction<Date | null>>;
  checkoutDate: Date | null;
  setRoomCount: Dispatch<SetStateAction<number>>;
  roomCount: number;
  setAdultCount: Dispatch<SetStateAction<number>>;
  setChildCount: Dispatch<SetStateAction<number>>;
  setNumberOfNight: Dispatch<SetStateAction<number>>;
  adultCount: number;
  childCount: number;
  numberOfNight: number;
}

const TopSearchBar: React.FC<TopSearchBar> = ({
  hotelSearch,
  setHotelSearchString,
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
  const navigate = useNavigate();
  useEffect(() => {
    setInputValue(hotelSearch);
    getHotels();
  }, [hotelSearch]);
  const [showRoomPicker, setShowRoomPicker] = useState(false);

  const [showCheckinCalendar, setShowCheckinCalendar] = useState(false);
  const [showCheckoutCalendar, setShowCheckoutCalendar] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [hotelName, setHotelName] = useState<string[]>([]);
  const [hotelState, setHoteState] = useState<string[]>([]);
  const [hotelCity, setHoteCity] = useState<string[]>([]);
  const [hotelCountry, setHoteCountry] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  // const [dateRange, setDateRange] = useState([null, null]);

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
    // calculateNumberOfNights(checkinDate, checkoutDate);
    // console.log(numberOfNight);
    // console.log("handleCheckinClick");
  };

  const handleCheckoutClick = async () => {
    setShowRoomPicker(false);
    setShowCheckoutCalendar(!showCheckoutCalendar);
    setShowCheckinCalendar(false);
    // calculateNumberOfNights(checkinDate, checkoutDate);
    // console.log(numberOfNight);
    // console.log("handleCheckinClick");
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

  const highlightDates = (date: Date): string | null => {
    if (
      (checkinDate && isSameDay(date, checkinDate)) ||
      (checkoutDate && isSameDay(date, checkoutDate))
    ) {
      return "highlighted";
    } else if (
      checkinDate &&
      checkoutDate &&
      isAfter(date, checkinDate) &&
      isBefore(date, checkoutDate)
    ) {
      return "range";
    }
    return null;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Combine hotelName and hotelState arrays
    const allHotelData = [
      ...hotelCountry,
      ...hotelName,
      ...hotelState,
      ...hotelCity,
    ];

    // Filter suggestions based on user input
    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      const matchingSuggestions = allHotelData.filter((item) =>
        item && typeof item === "string"
          ? item.toLowerCase().includes(value.toLowerCase())
          : false
      );

      setSuggestions(matchingSuggestions);
    }
  };

  const getHotels = async () => {
    try {
      // setIsLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.get(`${baseURL}hotels/hotels/`, config);
      const responseData = response.data;

      // Extract hotel names from the response data
      const hotelNames = responseData.map(
        (hotel: { hotel_name: any }) => hotel.hotel_name
      );

      const hotelState = responseData.map(
        (hotel: { location_state: any }) => hotel.location_state
      );

      // Extract hotel city from the response data
      const hotelCity = responseData.map(
        (hotel: { location_city: any }) => hotel.location_city
      );

      const hotelCountry = responseData.map(
        (hotel: { location_country: any }) => hotel.location_country
      );

      // Set the hotel names in the state variable setHotelName
      setHotelName(hotelNames);
      setHoteState(hotelState);
      setHoteCity(hotelCity);
      setHoteCountry(hotelCountry);
      console.log(hotelState);
    } catch (error) {
      // setIsLoading(false);
      console.error("Error fetching hotels data:", error);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setHotelSearchString(suggestion);
    setInputValue(suggestion);
    setSuggestions([]);
  };

  const handleSearch = () => {
    try {
      navigate(
        `/hotelList?searchString=${hotelSearch}&CheckIn=${checkinDate}&CheckOut=${checkoutDate}&numberOfRoom=${roomCount}&adultCount=${adultCount}&childCount=${childCount}&numberOfNight=${numberOfNight}`
      );
    } catch (error) {
      console.log("Error navigating to hotel detail:", error);
    }
  };

  return (
    <div>
      <div className="topSearch-container">
        <div className="topSearch-container-left">
          <div className="hotelDetail-topSearchInfo">
            <button>
              <FaMapMarkerAlt />
              <input
                type="text"
                className="herosection-input"
                style={{
                  fontFamily: "volkhov, sans-serif",
                  fontSize: "16px",
                  color: "rgba(38, 50, 56, 0.97)",
                  width: "265px",
                  height: "20px",
                  border: "none",
                  background: "#FF000000",
                }}
                placeholder="Choose destination name or property name"
                value={inputValue}
                onChange={handleInputChange}
              />
            </button>
            {suggestions.length > 0 && (
              <ul
                style={{ position: "absolute", marginTop: "28px" }}
                className="hotellistingsearch"
              >
                {suggestions
                  .filter(
                    (suggestion, index, self) =>
                      self.indexOf(suggestion) === index
                  )
                  .map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {hotelName.includes(suggestion) ? (
                        <>
                          <SearchHotel />
                          <span>{suggestion}</span>
                        </>
                      ) : hotelState.includes(suggestion) ? (
                        <>
                          <SearchLocation />
                          <span>{suggestion}</span>
                        </>
                      ) : hotelCity.includes(suggestion) ? (
                        <>
                          <SearchLocation />
                          <span>{suggestion}</span>
                        </>
                      ) : hotelCountry.includes(suggestion) ? (
                        <>
                          <SearchLocation />
                          <span>{suggestion}</span>
                        </>
                      ) : (
                        suggestion
                      )}
                    </li>
                  ))}
              </ul>
            )}
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
          </div>
        </div>
        <button className="topSearch-btn" onClick={handleSearch}>
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
              setCheckinDate(date);
              calculateNumberOfNights(date, checkoutDate);
            }}
            inline
            dayClassName={(date) => highlightDates(date)}
            minDate={new Date()}
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
            dayClassName={(date) => highlightDates(date)}
            minDate={addDays(new Date(), 1)}
            monthsShown={2}
          />
        )}
      </div>
      <p className="hotelDetail-breadCrumps">
        Hotels &gt; West Africa &gt; Nigeria Hotels &gt; Abuja Hotels &gt;
        <span>Transcorp</span>
      </p>
    </div>
  );
};

export default TopSearchBar;
