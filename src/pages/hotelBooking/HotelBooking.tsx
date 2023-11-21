import { UserContext } from "../../utils/UserData";
import "./HotelBooking.css";
import BookingSteps from "./components/bookingSteps/BookingSteps";
import CancellationPolicy from "./components/cancellationPolicy/CancellationPolicy";
import CustomerInfo from "./components/customerInformation/CustomerInfo";
import ImportantDetails from "./components/importantDetails/ImportantDetails";
import Reservation from "./components/reservations/Reservation";
import RoomDetails from "./components/roomDetails.tsx/RoomDetails";
import CompleteBookingPop from "../hotelBooking/components/completeBookingPop/CompleteBookingPop";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../severs/auth";

const HotelBooking = () => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    handleOnLoad();
    if (!isNaN(parsedCheckinDate!.getTime())) {
      setCheckinDate(parsedCheckinDate);
    }
    if (!isNaN(parsedCheckOutDate!.getTime())) {
      setCheckoutDate(parsedCheckOutDate);
    }
    console.log(user);
    {
      user ? console.log(user.username) : console.error("no body");
    }
    // // Add smooth scroll behavior to NavMenu links
    // const navMenuLinks = document.querySelectorAll(".navMenu-list a");
    // navMenuLinks.forEach((link) => {
    //   link.addEventListener("click", handleNavMenuClick);
    // });

    // return () => {
    //   navMenuLinks.forEach((link) => {
    //     link.removeEventListener("click", handleNavMenuClick);
    //   });
    // };
  }, []);
  const [, setUsername] = useState("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState<string>("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const locationLink = useLocation();
  const queryParams = new URLSearchParams(locationLink.search);
  const hotelIdParam = queryParams.get("hotelId");
  const [hotelId] = useState(hotelIdParam ? parseInt(hotelIdParam) : 1);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [, setHotel] = useState([]);
  const [hotelName, setHotelName] = useState("");
  const [propertyDescription, setPropertyDescription] = useState<string>("");
  const [mainPictures, setMainPictures] = useState<string[]>([]);
  const [checkedAmenities, setCheckedAmenities] = useState<any[]>([]);
  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const checkInParam = queryParams.get("CheckIn");
  const parsedCheckinDate = checkInParam ? new Date(checkInParam) : null;
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
  const checkOutParam = queryParams.get("CheckOut");
  const parsedCheckOutDate = checkOutParam ? new Date(checkOutParam) : null;
  // Property policy type const values
  const [checkInTime, setCheckInTime] = useState("00:00 am");
  const [checkOutTime, setCheckOutTime] = useState("00:00 am");
  const numberOfRoomsParam = queryParams.get("RoomCount");
  const [roomCount] = useState(
    numberOfRoomsParam ? parseInt(numberOfRoomsParam) : 1
  );

  const numberOfNightParam = queryParams.get("numberOfNight");
  const [numberOfNight] = useState(
    numberOfNightParam ? parseInt(numberOfNightParam) : 1
  );
  const roomRoomTypeParam = queryParams.get("roomTypeName");
  const [roomRoomType] = useState(roomRoomTypeParam ? roomRoomTypeParam : "");
  const totalRoomPriceParam = queryParams.get("totalRoomPrice");
  const [totalRoomPrice] = useState(
    totalRoomPriceParam ? totalRoomPriceParam : 1
  );
  const [vat, setVat] = useState(1);

  const requestData = {
    hotel_name: hotelName,
    booking_status: "processing...",
    property_type: "Hotel",
    check_in_time: checkInTime,
    check_out_time: checkOutTime,
    length_of_stay: numberOfNight,
    number_of_rooms: roomCount,
    room_type: roomRoomType,
    bed_type: "bed",
    room_class: "room class",
    total_price: totalRoomPrice,
    vat: vat,
    booking_for_someone: true,
    first_name: firstName,
    last_name: lastName,
    email: userEmail,
    country_code_phone: selectedCountryCode,
    phone_number: selectedPhoneNumber,
    country_code_whats_app: selectedCountryCode,
    whats_app_number: selectedPhoneNumber,
    form_of_payment: "non",
    agree_to_terms_and_conditions: true,
  };

  const handleCompleteBookingClick = async () => {
    const userToken = localStorage.getItem("token") || "";
    const hotelId = localStorage.getItem("hotelId");
    console.log(hotelId);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${userToken}`,
      },
    };
    let response;
    response = await axios.post(
      `${baseURL}hotels/hotel-booking/`,
      requestData,
      config
    );
    if (response.status == 201) {
      console.log(response);
      setPopupVisible(true);
    }
  };

  const handleOnLoad = async () => {
    try {
      // setIsLoading(true);
      const userToken = localStorage.getItem("token") || "";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${userToken}`,
        },
      };

      const response = await axios.get(`${baseURL}auth/userdetail/`, config);
      console.log(response.status);
      const responseData = response.data;
      if (response.status == 200) {
        console.log(response.status);
        console.log(responseData);
        setUsername(responseData.username);
        setFirstName(responseData.first_name);
        setLastName(responseData.last_name);
        setUserEmail(responseData.email);
        setSelectedPhoneNumber(responseData.phone_number);
        setSelectedCountryCode(responseData.country_code);
      }
    } catch (error) {}
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.get(
        `${baseURL}hotels/hotels/${hotelId}/`,
        config
      );
      const responseData = response.data;
      console.log(responseData);
      setHotel(response.data);
      setHotelName(responseData.hotel_name);
      setPropertyDescription(responseData.describe_property);
      setMainPictures(responseData.main_photo);
      setCheckedAmenities(responseData.amenities);
      setCheckInTime(responseData.check_in_time);
      setCheckOutTime(responseData.check_out_time);
      setVat(responseData.vat);

      // Assuming you have the hotel ID, you can pass it as a URL parameter

      // Navigate to the "/HotelDetail" route with the hotel ID
      // navigate("/HotelDetail");
    } catch (error) {
      console.log("Error navigating to hotel detail:", error);
    }
  };

  return (
    <div className="hotelBookingBody">
      <BookingSteps />
      <ImportantDetails
        hotelName={hotelName}
        propertyDescription={propertyDescription}
        mainPictures={mainPictures}
        checkedAmenities={checkedAmenities}
        checkinDate={checkinDate}
        checkoutDate={checkoutDate}
        checkInTime={checkInTime}
        checkOutTime={checkOutTime}
        roomCount={roomCount}
        numberOfNight={numberOfNight}
        roomRoomType={roomRoomType}
        totalRoomPrice={totalRoomPrice.toString()}
      />

      <CustomerInfo
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        selectedPhoneNumber={selectedPhoneNumber}
        setSelectedPhoneNumber={setSelectedPhoneNumber}
        selectedCountryCode={selectedCountryCode}
        setSelectedCountryCode={setSelectedCountryCode}
      />
      <RoomDetails />
      <Reservation />
      <CancellationPolicy />
      <button
        className="cancellationPolicy-btn"
        style={{
          margin: "0 auto 20px",
          fontFamily: "volkhov, sans-serif",
          display: "flex",
        }}
        onClick={handleCompleteBookingClick}
      >
        COMPLETE BOOKING
      </button>
      {isPopupVisible && (
        <CompleteBookingPop
          userEmail={userEmail}
          totalRoomPrice={totalRoomPrice.toString()}
        />
      )}
    </div>
  );
};

export default HotelBooking;
