import { useEffect, useState } from "react";
import TopSearchBar from "./components/topSearchBar/TopSearchBar";
import { UserContextProvider } from "../../utils/UserData";
import Navbar from "../../component/HomePage/header/header";
import NavMenu from "./components/navMenu/NavMenu";
import Overview from "./components/overview/Overview";
import Rooms from "./components/rooms/Rooms";
import Location from "./components/location/Location";
import AmenitiesFacilities from "./components/AmenitiesFacilities/AmenitiesFacilities";
import Footer from "../../component/HomePage/footer/Footer";
import Policies from "./components/policies/Policies";
import GuestReview from "./components/guestReview/GuestReview";
import Recommendations from "./components/similarRecommendations/Recommendations";
import "./HotelDetail.css";
import axios from "axios";
import { baseURL } from "../../severs/auth";
import { useLocation } from "react-router-dom";

interface ImageObject {
  caption: string;
  imgPath: string;
  progress: number;
}

const HotelDetail = () => {
  const locationLink = useLocation();
  const queryParams = new URLSearchParams(locationLink.search);
  const [hotel, setHotel] = useState([]);

  const [hotelName, setHotelName] = useState("");
  const [propertyDescription, setPropertyDescription] = useState<string>("");
  const [propertyLocation, setPropertyLocation] = useState<string>("");

  // Amenities const values
  const [checkedAmenities, setCheckedAmenities] = useState<any[]>([]);

  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [numberBedrooms, setNumberBedrooms] = useState<number>(1);
  const [number_of_room_type, setNumber_Of_Room_Type] = useState<number>(1);
  const initialRoomTypeNames = Array.from(
    { length: number_of_room_type },
    () => ""
  );
  const [roomTypeName, setRoomTypeName] = useState(initialRoomTypeNames);
  const [numOfBedrooms, setOfNumBedrooms] = useState([]);
  const [images, setImages] = useState([]);
  const [pricePerNight, setPricePerNight] = useState([]);
  const [selectedRoomTypeAmenities, setSelectedRoomTypeAmenities] = useState<{
    [key: number]: {
      amenity: string;
      subItem: string;
    }[];
  }>({});
  const [selectedCategoryRoom, setSelectedCategoryRoom] = useState<string[]>(
    []
  );
  const [selectedCategory, onSelectCategory] = useState<string[]>([]);
  const [proximity_to_major_attractions, setProximity_to_major_attractions] =
    useState<string[]>([]);
  // Photos type const values
  const [mainPictures, setMainPictures] = useState<string[]>([]);
  const [exteriorImages, setExteriorImages] = useState<ImageObject[]>([]);
  const [interiorsImages, setInteriorsImages] = useState<ImageObject[]>([]);
  const [roomDiscount, setRoomDiscount] = useState([]);

  // Property policy type const values
  const [checkInTime, setCheckInTime] = useState("00:00 am");
  const [checkOutTime, setCheckOutTime] = useState("00:00 am");
  const [count, setCount] = useState(1);

  // Payment and Commission type const values
  const [selectedCancellation, setSelectedCancellation] = useState("");
  const [refundPercentage, setRefundPercentage] = useState("");
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState<
    string[]
  >([]);

  const [hotelSearchString, setHotelSearchString] = useState(
    queryParams.get("searchString") || ""
  );
  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const checkInParam = queryParams.get("CheckIn");
  const parsedCheckinDate = checkInParam ? new Date(checkInParam) : null;
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
  const checkOutParam = queryParams.get("CheckOut");
  const parsedCheckOutDate = checkOutParam ? new Date(checkOutParam) : null;
  const numberOfRoomsParam = queryParams.get("numberOfRoom");
  const [roomCount, setRoomCount] = useState(
    numberOfRoomsParam ? parseInt(numberOfRoomsParam) : 1
  );
  const adultCountParam = queryParams.get("adultCount");
  const [adultCount, setAdultCount] = useState(
    adultCountParam ? parseInt(adultCountParam) : 1
  );
  const childCountParam = queryParams.get("childCount");
  const [childCount, setChildCount] = useState(
    childCountParam ? parseInt(childCountParam) : 1
  );
  const hotelIdParam = queryParams.get("hotelId");
  const [hotelId] = useState(hotelIdParam ? parseInt(hotelIdParam) : 1);
  const numberOfNightParam = queryParams.get("numberOfNight");
  const [numberOfNight, setNumberOfNight] = useState(
    numberOfNightParam ? parseInt(numberOfNightParam) : 1
  );

  useEffect(() => {
    handleOnLoad();
    if (!isNaN(parsedCheckinDate!.getTime())) {
      setCheckinDate(parsedCheckinDate);
    }
    if (!isNaN(parsedCheckOutDate!.getTime())) {
      setCheckoutDate(parsedCheckOutDate);
    }
    // Add smooth scroll behavior to NavMenu links
    const navMenuLinks = document.querySelectorAll(".navMenu-list a");
    navMenuLinks.forEach((link) => {
      link.addEventListener("click", handleNavMenuClick);
    });

    return () => {
      navMenuLinks.forEach((link) => {
        link.removeEventListener("click", handleNavMenuClick);
      });
    };
  }, []);

  const handleOnLoad = async () => {
    console.log(pricePerNight, "yhsd");
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
      setProximity_to_major_attractions(
        responseData.proximity_to_major_attractions
      );
      setPropertyDescription(responseData.describe_property);
      setPropertyLocation(responseData.location_building_address);
      setMainPictures(responseData.main_photo);
      setExteriorImages(responseData.exterior_photo);
      setInteriorsImages(responseData.interiors_photo);
      setNumber_Of_Room_Type(responseData.number_rooms_type);
      setNumberBedrooms(responseData.number_of_rooms);
      setRoomTypeName(responseData.room_types_name);
      setImages(responseData.room_types_images);
      setPricePerNight(responseData.room_night_rates_of_room_type);
      setLocation(responseData.map_location);
      setSelectedRoomTypeAmenities(responseData.room_amenities_in_room_type);
      setSelectedCategoryRoom(responseData.room_class_of_room_type);
      onSelectCategory(responseData.type_of_room);
      setOfNumBedrooms(responseData.room_type_capacity);
      setRoomDiscount(responseData.room_guests_deal_off_of_room_type);
      // Amenities responseData values
      setCheckedAmenities(responseData.amenities);

      // Property policy type responseData values
      setCount(responseData.age_restriction);
      setCheckInTime(responseData.check_in_time);
      setCheckOutTime(responseData.check_out_time);

      setSelectedCancellation(responseData.cancellation_policy_time);
      setRefundPercentage(responseData.cancellation_policy_percentage);
      setSelectedPaymentMethods(responseData.full_payment_info);

      // Assuming you have the hotel ID, you can pass it as a URL parameter

      // Navigate to the "/HotelDetail" route with the hotel ID
      // navigate("/HotelDetail");
    } catch (error) {
      console.log("Error navigating to hotel detail:", error);
    }
  };

  const handleNavMenuClick: EventListener = (event) => {
    event.preventDefault();
    const targetSectionId = (event.target as HTMLAnchorElement).getAttribute(
      "href"
    );
    const targetSection = document.querySelector(targetSectionId || "");
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <UserContextProvider>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="main-content">
        <div>
          <TopSearchBar
            hotelSearch={hotelSearchString}
            setHotelSearchString={setHotelSearchString}
            setCheckinDate={setCheckinDate}
            checkinDate={checkinDate}
            setCheckoutDate={setCheckoutDate}
            checkoutDate={checkoutDate}
            setRoomCount={setRoomCount}
            roomCount={roomCount}
            setAdultCount={setAdultCount}
            setChildCount={setChildCount}
            adultCount={adultCount}
            childCount={childCount}
            numberOfNight={numberOfNight}
            setNumberOfNight={setNumberOfNight}
          />
        </div>
        <div className="sticky-navmenu">
          <NavMenu pricePerNight={pricePerNight} />
        </div>
        <div id="overview-section">
          <Overview
            hotel={hotel}
            hotelName={hotelName}
            mainPictures={mainPictures}
            exteriorImages={exteriorImages}
            interiorsImages={interiorsImages}
            propertyDescription={propertyDescription}
            propertyLocation={propertyLocation}
            number_of_room_type={number_of_room_type}
            setCheckinDate={setCheckinDate}
            checkinDate={checkinDate}
            setCheckoutDate={setCheckoutDate}
            checkoutDate={checkoutDate}
            setRoomCount={setRoomCount}
            roomCount={roomCount}
            setAdultCount={setAdultCount}
            setChildCount={setChildCount}
            adultCount={adultCount}
            childCount={childCount}
            checkedAmenities={checkedAmenities}
            numberOfNight={numberOfNight}
            setNumberOfNight={setNumberOfNight}
          />
        </div>
        <div id="rooms-section">
          <Rooms
            number_of_room_type={number_of_room_type}
            numberBedrooms={numberBedrooms}
            roomTypeName={roomTypeName}
            images={images}
            pricePerNight={pricePerNight}
            selectedRoomTypeAmenities={selectedRoomTypeAmenities}
            type_of_room={selectedCategory}
            room_class_of_room_type={selectedCategoryRoom}
            room_type_capacity={numOfBedrooms}
            selectedPaymentMethods={selectedPaymentMethods}
            roomDiscount={roomDiscount}
            hotelId={hotelId}
            checkinDate={checkinDate}
            checkoutDate={checkoutDate}
            roomCount={roomCount}
            numberOfNight={numberOfNight}
          />
        </div>
        <div id="location-section">
          <Location
            location={location}
            proximity_to_major_attractions={proximity_to_major_attractions}
          />
        </div>
        <div id="amenities-section">
          <AmenitiesFacilities checkedAmenities={checkedAmenities} />
        </div>
        <div id="policies-section">
          <Policies
            checkInTime={checkInTime}
            checkOutTime={checkOutTime}
            count={count}
            selectedCancellation={selectedCancellation}
            refundPercentage={refundPercentage}
            selectedPaymentMethods={selectedPaymentMethods}
            checkedAmenities={checkedAmenities}
          />
        </div>
        <div id="reviews-section">
          <GuestReview />
        </div>
        <div id="recommendations">
          <Recommendations />
        </div>
        <Footer />
      </div>
    </UserContextProvider>
  );
};

export default HotelDetail;
