import { useState, useRef, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Typography } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LocationIcon from "./svgIcons/LocationIcon";
import {
  faCalendarDays,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GuestsIcon from "./svgIcons/GuestsIcon";
import GuestRoomCount from "./GuestRoomCount";
import Popover from "@mui/material/Popover";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../../severs/auth";
import SearchLocation from "./svgIcons/searchlocation";
import SearchHotel from "./svgIcons/searchhotel";
import "./LateNightDeals.css";

const HeroSectionSearch = () => {
  useEffect(() => {
    getHotels();
  }, []);
  const navigate = useNavigate();
  const [hotelName, setHotelName] = useState<string[]>([]);
  const [hotelState, setHoteState] = useState<string[]>([]);
  const [hotelCountry, setHoteCountry] = useState<string[]>([]);
  const [hotelCity, setHoteCity] = useState<string[]>([]);
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [roomCount, setRoomCount] = useState<number>(1);
  const [adultCount, setAdultCount] = useState<number>(1);
  const [childCount, setChildCount] = useState<number>(1);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [, setSearchType] = useState("");
  const [numberOfNight, setNumberOfNight] = useState(1);

  const handleGuestClick = () => {
    setAnchorEl(divRef.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleCheckInChange = (date: Date | null) => {
    setCheckInDate(date);
    calculateNumberOfNights(checkInDate, checkOutDate);
  };

  const handleCheckOutChange = (date: Date | null) => {
    setCheckOutDate(date);
  };

  const calculateNumberOfNights = (
    checkIn: Date | null,
    checkOut: Date | null
  ): number => {
    console.log(checkOut);
    console.log(checkIn);
    if (checkIn && checkOut) {
      const timeDifference = checkOut.getTime() - checkIn.getTime();
      const numberOfNights = Math.ceil(timeDifference / (1000 * 3600 * 24));
      console.log(numberOfNights);
      setNumberOfNight(numberOfNights);
      console.log(numberOfNight);
      return numberOfNights;
    }
    return 1;
  };

  const handleRoomCountChange = (newRoomCount: number) => {
    setRoomCount(newRoomCount);
  };

  const handleAdultCountChange = (newAdultCount: number) => {
    setAdultCount(newAdultCount);
  };

  const handleChildCountChange = (newChildCount: number) => {
    setChildCount(newChildCount);
  };

  const divRef = useRef<HTMLDivElement | null>(null);

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

  const handleSuggestionClick = (suggestion: string, type: string) => {
    setInputValue(suggestion);
    setSuggestions([]);
    setSearchType(type);
    console.log(type);
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

      const hotelCountry = responseData.map(
        (hotel: { location_country: any }) => hotel.location_country
      );

      const hotelState = responseData.map(
        (hotel: { location_state: any }) => hotel.location_state
      );

      const hotelCity = responseData.map(
        (hotel: { location_city: any }) => hotel.location_city
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

  const handleSearch = async (Hotel: string) => {
    if (Hotel != "") {
      try {
        navigate(
          `/hotelList?searchString=${Hotel}&CheckIn=${checkInDate}&CheckOut=${checkOutDate}&numberOfRoom=${roomCount}&adultCount=${adultCount}&childCount=${childCount}&numberOfNight=${numberOfNight}`
        );
      } catch (error) {
        console.log("Error navigating to hotel detail:", error);
      }
    }
  };

  const determineSuggestionType = (suggestion: string) => {
    if (hotelName.includes(suggestion)) {
      return "Name";
    } else if (hotelCountry.includes(suggestion)) {
      return "Country";
    } else if (hotelState.includes(suggestion)) {
      return "State";
    } else if (hotelCity.includes(suggestion)) {
      return "City";
    } else {
      return "other";
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "835px",
          height: "73px",
          borderRadius: "10px",
          background: "rgba(255, 255, 255, 0.67)",
          margin: "40px 10px 0 40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "306px",
            height: "47px",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: "10px",
            background: "white",
            margin: "12px 15px",
          }}
        >
          <LocationIcon />
          <input
            type="text"
            className="herosection-input"
            style={{
              fontFamily: "volkhov, sans-serif",
              fontSize: "16px",
              color: "rgba(38, 50, 56, 0.97)",
              width: "258px",
              height: "20px",
              border: "none",
            }}
            placeholder="Enter destination name or property name"
            value={inputValue}
            onChange={handleInputChange}
          />
          {suggestions.length > 0 && (
            <ul className="herosearchdropdown">
              {suggestions
                .filter(
                  (suggestion, index, self) =>
                    self.indexOf(suggestion) === index
                )
                .map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      handleSuggestionClick(
                        suggestion,
                        determineSuggestionType(suggestion)
                      )
                    }
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
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "47px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            background: "white",
            margin: "12px 7px",
          }}
        >
          <FontAwesomeIcon
            icon={faCalendarDays}
            style={{ marginLeft: "10px" }}
          />
          <DatePicker
            selected={checkInDate}
            dateFormat="MM/dd/yyyy"
            placeholderText="Check-in"
            onChange={(date) => {
              setCheckInDate(date);
              calculateNumberOfNights(date, checkInDate);
              handleCheckInChange;
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "47px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            background: "white",
            margin: "12px 7px",
          }}
        >
          <FontAwesomeIcon
            icon={faCalendarDays}
            style={{ paddingLeft: "5px" }}
          />
          <DatePicker
            selected={checkOutDate}
            dateFormat="MM/dd/yyyy"
            placeholderText="Check-out"
            onChange={(date) => {
              setCheckOutDate(date);
              calculateNumberOfNights(checkInDate, date);
              handleCheckOutChange;
            }}
          />
        </Box>
        <Box>
          <div
            onClick={handleGuestClick}
            role="button"
            style={{ cursor: "pointer" }}
            ref={divRef}
          >
            <Box
              sx={{
                display: "flex",
                width: "162px",
                height: "47px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "10px",
                background: "white",
                margin: "12px 15px",
              }}
            >
              <GuestsIcon />
              <Typography
                style={{
                  fontFamily: "volkhov, sans-serif",
                  fontSize: "13px",
                  color: "rgba(38, 50, 56, 0.97)",
                }}
              >
                {childCount + adultCount} guests - {roomCount} Room
              </Typography>
            </Box>
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={divRef.current || undefined}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            {/* Pass the callback function to GuestRoomCount */}
            <GuestRoomCount
              roomCount={roomCount}
              adultCount={adultCount}
              childCount={childCount}
              onRoomCountChange={handleRoomCountChange}
              onAdultCountChange={handleAdultCountChange}
              onChildCountChange={handleChildCountChange}
            />
          </Popover>
        </Box>
      </Box>
      <Box>
        <Button
          onClick={() => handleSearch(inputValue)}
          sx={{
            width: "157px",
            height: "60px",
            borderRadius: "10px",
            backgroundColor: "rgba(38, 50, 56, 0.90)",
            display: "flex",
            justifyContent: "space-evenly",
            margin: "40px 0 0 0",
            "&:hover": {
              backgroundColor: "rgb(110, 158, 118)",
            },
          }}
        >
          <Typography
            style={{
              color: "white",
              fontSize: "20px",
              fontFamily: "Raleway, sans-serif",
              textTransform: "capitalize",
            }}
          >
            Search
          </Typography>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#ffffff" }}
            size="xl"
          />
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSectionSearch;
