import Navbar from "../../../component/HomePage/header/header";
import Footer from "../../../component/HomePage/footer/Footer";
import "../../../component/HotelListing/ownsProfileBody/propertyAxis.css";
import "../../../component/HotelListing/ownsProfileBody/propertyAxisMobile.css";
// import aboutimage from "../../../assets/pics/bro.png";
import PropertyName from "./aboutProprty/propatryName";
import PropType from "./aboutProprty/proptype";
import ChanelManager from "./aboutProprty/chanalemanager";
import PropertyDescription from "./aboutProprty/PropertyDescrption";
import Proximity from "./aboutProprty/Proximty";
import Policy from "./aboutProprty/Policy";
import Rating from "./aboutProprty/Rating";
import PhoneCode from "./aboutProprty/phoneCode";
import PhoneCodes from "./aboutProprty/phoneCode.json";
import Email from "./aboutProprty/email";
import MapLocation from "./aboutProprty/MapLocation";
import { SetStateAction, useEffect, useState } from "react";
import ScrollHeader from "./reusables/ScrollHeader";
import ButtonNavBar from "./reusables/ButtonNavBar";
import axios from "axios";
import { baseURL } from "../../../severs/auth";
import CircularProgress from "@mui/material/CircularProgress";
import { UserContextProvider } from "../../../utils/UserData";
import HostingType from "../AddToHotelList/aboutProprty/hostingType";

interface ImageObject {
  caption: string;
  imgPath: string;
  progress: number;
}

const AboutProperty = () => {
  const google_key = import.meta.env.VITE_google_map_api_key;

  // onload
  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        const position: GeolocationPosition = await new Promise(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          }
        );

        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        handleOnLoad();
      } catch (error) {
        console.error("Error getting geolocation:", error);
      }
    };

    fetchGeolocation();
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  // About property const values
  const [propertyName, setPropertyName] = useState<string>("");
  const [phoneNumberOneCode, setPhoneNumberOneCode] = useState<string>("");
  const [phoneNumberOne, setPhoneNumberOne] = useState<string>("");
  const [phoneNumberTwoCode, setPhoneNumberTwoCode] = useState<string>("");
  const [phoneNumberTwo, setPhoneNumberTwo] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [propertyDescription, setPropertyDescription] = useState<string>("");
  const [propertyProxy, setPropertyProxy] = useState<string[]>([]);
  const [propertyPolicy, setPropertyPolicy] = useState<string>("");
  const [propertyRating, setPropertyRating] = useState<string>("");
  const [propertyChannelManager, setPropertyChannelManager] =
    useState<string>("");
  const [propertyChain, setPropertyChain] = useState<string>("");
  const [propertyBuildingNumber, setPropertyBuildingNumber] =
    useState<string>("");
  const [propertyStreetAddress, setPropertyStreetAddress] =
    useState<string>("");
  const [locationTimeZone, setLocationTimeZone] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [propertyChannelManager1, setPropertyChannelManager1] =
    useState<string>("");
  const [propertyChain1, setPropertyChain1] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [plotNumber, setPlotNumber] = useState<string>("");
  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // Amenities const values
  const [checkedAmenities, setCheckedAmenities] = useState<any[]>([]);

  // Select property type const values
  const [numberBedrooms, setNumberBedrooms] = useState<number>(1);
  const [number_of_room_type, setNumber_Of_Room_Type] = useState<number>(1);
  const initialRoomTypeNames = Array.from(
    { length: number_of_room_type },
    () => ""
  );
  const [roomTypeName, setRoomTypeName] = useState(initialRoomTypeNames);
  const initialNumOfBedrooms = Array.from({ length: 2 }, () => 1);
  const [numOfBedrooms, setOfNumBedrooms] = useState(initialNumOfBedrooms);
  const [selectedCategory, onSelectCategory] = useState<string[]>([]);
  const [images, setImages] = useState<{ [key: number]: string[] }>({});
  const [selectedRoomTypeAmenities, setSelectedRoomTypeAmenities] = useState<{
    [key: number]: {
      amenity: string;
      subItem: string;
    }[];
  }>({});
  const [selectedCategoryRoom, setSelectedCategoryRoom] = useState<string[]>(
    []
  );
  const [nightlyRate, setNightlyRate] = useState<number[]>([]);
  const [weeklyDiscount, setWeeklyDiscount] = useState<number[]>([]);
  const [monthlyDiscount, setMonthlyDiscount] = useState<number[]>([]);
  const [roomDiscount, setRoomDiscount] = useState<number[]>([]);
  const [late_Night_Deal_Off, setLate_Night_Deal_Off] = useState<number[]>([]);
  const [automate_late_night_deals, setAutomate_Late_Night_Deals] = useState<
    boolean[]
  >([]);
  const [selectedDates, setSelectedDates] = useState<{ [key: number]: Date[] }>(
    {}
  );
  const [hasSelectedDates, setHasSelectedDates] = useState<boolean[]>([]);

  // Property policy type const values
  const [checkInTime, setCheckInTime] = useState("00:00 am");
  const [checkOutTime, setCheckOutTime] = useState("00:00 am");
  const [count, setCount] = useState(1);

  // Payment and Commission type const values
  const [option1Checked, setOption1Checked] = useState(false);
  const [option2Checked, setOption2Checked] = useState(false);
  const [option3Checked, setOption3Checked] = useState(false);
  const [selectedCancellation, setSelectedCancellation] = useState("");
  const [refundPercentage, setRefundPercentage] = useState("");
  const [selectedTaxOption, setSelectedTaxOption] = useState("");
  const [vatPercentage, setVatPercentage] = useState("");
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState<
    string[]
  >([]);
  const [agreeItBestPrice, setAgreeItBestPrice] = useState(false);

  // Photos type const values
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [exterior_photo, setExterior_Photo] = useState<ImageObject[]>([]);
  const [interiors_photo, setInteriors_Photo] = useState<ImageObject[]>([]);

  // Terms and Condition const values
  const [accept_terms_and_conditions, setAccept_Terms_and_Conditions] =
    useState(false);
  const [go_live, setGo_Live] = useState(false);
  // process.env.google_map_api_key;

  const [selectedRadio, setSelectedRadio] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  //navigation
  const nextPage = "/amenities";
  const previousPage = "";

  const handleOnLoad = async () => {
    console.log(google_key);
    try {
      setIsLoading(true);
      const userToken = localStorage.getItem("token") || "";
      const hotelId = localStorage.getItem("hotelId");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${userToken}`,
        },
      };

      const response = await axios.get(
        `${baseURL}hotels/hotels/${hotelId}/`,
        config
      );
      const responseData = response.data;
      // About property responseData values
      setPropertyName(responseData.hotel_name);
      setPropertyType(responseData.property_type);
      setEmailAddress(responseData.hotel_email);
      setPhoneNumberOneCode(responseData.hotel_phone_code_1);
      setPhoneNumberOne(responseData.hotel_phone_number_1);
      setPhoneNumberTwoCode(responseData.hotel_phone_code_2);
      setPhoneNumberTwo(responseData.hotel_phone_number_2);
      setPropertyDescription(responseData.describe_property);
      setPropertyProxy(responseData.proximity_to_major_attractions);
      setPropertyPolicy(responseData.property_policy);
      setPropertyChannelManager(responseData.have_channel_manager);
      setPropertyChain(responseData.is_part_of_hotel_chain);
      setPropertyChannelManager1(responseData.property_channel_manager);
      setPropertyChain1(responseData.property_chain_manager);
      setPropertyRating(responseData.rating);
      setPropertyBuildingNumber(responseData.location_building_number);
      setPropertyStreetAddress(responseData.location_building_address);
      setLocationTimeZone(responseData.location_timezone);
      setSelectedCountry(responseData.location_country);
      setSelectedState(responseData.location_state);
      setSelectedCity(responseData.location_city);
      setLocation(responseData.map_location);
      setPostalCode(responseData.postal_code);
      setPlotNumber(responseData.location_plot);

      // Amenities responseData values
      setCheckedAmenities(responseData.amenities);

      // Select property type responseData values
      setRoomTypeName(responseData.room_types_name);
      setOfNumBedrooms(responseData.room_type_capacity);
      onSelectCategory(responseData.type_of_room);
      setImages(responseData.room_types_images);
      setSelectedRoomTypeAmenities(responseData.room_amenities_in_room_type);
      setSelectedCategoryRoom(responseData.room_class_of_room_type);
      setOption1Checked(responseData.full_payment);
      setOption2Checked(responseData.pay_half);
      setOption3Checked(responseData.pay_at_hotel);
      setSelectedCancellation(responseData.cancellation_policy_time);
      setRefundPercentage(responseData.cancellation_policy_percentage);
      setSelectedTaxOption(responseData.vat);
      setVatPercentage(responseData.vat_percentage);
      setSelectedPaymentMethods(responseData.full_payment_info);
      setAgreeItBestPrice(responseData.agree_is_best_price);
      setNightlyRate(responseData.room_night_rates_of_room_type);
      setWeeklyDiscount(responseData.room_weekly_rates_off_of_room_type);
      setMonthlyDiscount(responseData.room_monthly_rates_off_of_room_type);
      setRoomDiscount(responseData.room_guests_deal_off_of_room_type);
      setLate_Night_Deal_Off(responseData.late_night_deal_off_of_room_type);
      setAutomate_Late_Night_Deals(responseData.automate_late_night_deals);
      setSelectedDates(responseData.late_night_deals_time);
      setHasSelectedDates(responseData.has_late_night_deals_time);

      // Property policy type responseData values
      setCount(responseData.age_restriction);
      setCheckInTime(responseData.check_in_time);
      setCheckOutTime(responseData.check_out_time);

      // Payment and Commission type responseData values
      setNumber_Of_Room_Type(responseData.number_rooms_type);
      setNumberBedrooms(responseData.number_of_rooms);

      // Photos type responseData values
      setUploadedImages(responseData.main_photo);
      setExterior_Photo(responseData.exterior_photo);
      setInteriors_Photo(responseData.interiors_photo);

      // Terms and Condition responseData values
      setAccept_Terms_and_Conditions(responseData.accept_terms_and_conditions);
      setGo_Live(responseData.go_live);

      setIsLoading(false);
      console.log(response);
    } catch (error) {
      setIsLoading(false);
      console.log("Error fetching user data:", error);
    }
  };

  const handlePropertyChannelManager = (value: string) => {
    setPropertyChannelManager(value);
  };

  const handlePropertyChain = (value: string) => {
    setPropertyChain(value);
  };

  const handleRadioChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedRadio(e.target.value);
  };

  const handleFileInputChange = (e: {
    target: { files: SetStateAction<null>[] };
  }) => {
    setUploadedFile(e.target.files[0]);
  };
  

  const handleCountryCodeSelect = (dial_code: string) => {
    console.log("Selected country code:", dial_code);
  };

  const handlePhoneNumberChange = (_phoneNumber: string) => {};

  return (
    <>
      <div>
        <UserContextProvider>
          <Navbar />

          <div className="content">
            <ScrollHeader />

            {isLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <CircularProgress />{" "}
              </div>
            ) : (
              <>
                <p className="header">About property</p>
                <div>
                  <PropertyName
                    propertyName={propertyName}
                    setPropertyName={setPropertyName}
                  />
                </div>

                <div className="aboutPropSpacingTop">
                  <PhoneCode
                    options={PhoneCodes.countries}
                    onSelect={handleCountryCodeSelect}
                    onPhoneNumberChange={handlePhoneNumberChange}
                    setPhoneNumberOneCode={setPhoneNumberOneCode}
                    phoneNumberOneCode={phoneNumberOneCode}
                    phoneNumberOne={phoneNumberOne}
                    setPhoneNumberOne={setPhoneNumberOne}
                    phoneNumberTwoCode={phoneNumberTwoCode}
                    setPhoneNumberTwoCode={setPhoneNumberTwoCode}
                    phoneNumberTwo={phoneNumberTwo}
                    setPhoneNumberTwo={setPhoneNumberTwo}
                  />
                </div>

                <div className="aboutPropSpacingTop">
                  <Email
                    emailAddress={emailAddress}
                    setEmailAddress={setEmailAddress}
                  />
                </div>

                <div className="aboutPropSpacingTop">
                  <PropType
                    propertyType={propertyType}
                    setPropertyType={setPropertyType}
                  />
                </div>

                <HostingType
                  onRadioChange={handleRadioChange}
                  selectedRadio={selectedRadio}
                  onFileInputChange={handleFileInputChange}
                  uploadedFile={uploadedFile}
                />

                <div className="aboutPropSpacingTop">
                  <ChanelManager
                    propertyChannelManager={propertyChannelManager}
                    handlePropertyChannelManager={handlePropertyChannelManager}
                    propertyChain={propertyChain}
                    handlePropertyChain={handlePropertyChain}
                    propertyChannelManager1={propertyChannelManager1}
                    setPropertyChannelManager1={setPropertyChannelManager1}
                    propertyChain1={propertyChain1}
                    setPropertyChain1={setPropertyChain1}
                  />
                </div>

                <div>
                  <PropertyDescription
                    propertyDescription={propertyDescription}
                    setPropertyDescription={setPropertyDescription}
                  />
                </div>

                <div className="aboutPropSpacingTop">
                  <Proximity
                    propertyProxy={propertyProxy}
                    setPropertyProxy={setPropertyProxy}
                  />
                </div>

                <div className="aboutPropSpacingTop">
                  <Policy
                    propertyPolicy={propertyPolicy}
                    setPropertyPolicy={setPropertyPolicy}
                  />
                </div>

                <div>
                  <Rating
                    propertyRating={propertyRating}
                    setPropertyRating={setPropertyRating}
                  />
                </div>

                <div className="aboutPropSpacingTopmap">
                  <MapLocation
                    propertyBuildingNumber={propertyBuildingNumber}
                    setPropertyBuildingNumber={setPropertyBuildingNumber}
                    propertyStreetAddress={propertyStreetAddress}
                    setPropertyStreetAddress={setPropertyStreetAddress}
                    location={location}
                    setLocation={setLocation}
                    locationTimeZone={locationTimeZone}
                    setLocationTimeZone={setLocationTimeZone}
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                    selectedState={selectedState}
                    setSelectedState={setSelectedState}
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                    postalCode={postalCode}
                    setPostalCode={setPostalCode}
                    plotNumber={plotNumber}
                    setPlotNumber={setPlotNumber}
                  />
                </div>

                <ButtonNavBar
                  // About property prob values
                  propertyName={propertyName}
                  propertyType={propertyType}
                  emailAddress={emailAddress}
                  phoneNumberOneCode={phoneNumberOneCode}
                  phoneNumberOne={phoneNumberOne}
                  phoneNumberTwoCode={phoneNumberTwoCode}
                  phoneNumberTwo={phoneNumberTwo}
                  propertyChannelManager={propertyChannelManager}
                  propertyChain={propertyChain}
                  propertyDescription={propertyDescription}
                  propertyProxy={propertyProxy}
                  propertyPolicy={propertyPolicy}
                  propertyRating={propertyRating}
                  propertyBuildingNumber={propertyBuildingNumber}
                  propertyStreetAddress={propertyStreetAddress}
                  locationTimeZone={locationTimeZone}
                  selectedCountry={selectedCountry}
                  selectedState={selectedState}
                  selectedCity={selectedCity}
                  propertyChannelManager1={propertyChannelManager1}
                  propertyChain1={propertyChain1}
                  location={location}
                  postalCode={postalCode}
                  plotNumber={plotNumber}
                  // Amenities prob values
                  selectedPopularAmenities={checkedAmenities}
                  // Select property type prob values
                  numberBedrooms={numberBedrooms}
                  roomType={number_of_room_type}
                  room_type_capacity={numOfBedrooms}
                  type_of_room={selectedCategory}
                  roomTypeImages={images}
                  room_amenities_in_room_type={selectedRoomTypeAmenities}
                  room_class_of_room_type={selectedCategoryRoom}
                  roomTypeName={roomTypeName}
                  nightlyRate={nightlyRate}
                  weeklyDiscount={weeklyDiscount}
                  monthlyDiscount={monthlyDiscount}
                  roomDiscount={roomDiscount}
                  late_Night_Deal_Off={late_Night_Deal_Off}
                  automate_late_night_deals={automate_late_night_deals}
                  selectedDates={selectedDates}
                  hasSelectedDates={hasSelectedDates}
                  // Property policy type prob values
                  age_restriction={count}
                  check_in_time={checkInTime}
                  check_out_time={checkOutTime}
                  // Payment and Commission type prob values
                  option1Checked={option1Checked}
                  option2Checked={option2Checked}
                  option3Checked={option3Checked}
                  selectedCancellation={selectedCancellation}
                  selectedPaymentMethods={selectedPaymentMethods}
                  refundPercentage={refundPercentage}
                  selectedTaxOption={selectedTaxOption}
                  vatPercentage={vatPercentage}
                  agreeItBestPrice={agreeItBestPrice}
                  // Photos type prob values
                  exterior_photo={exterior_photo}
                  interiors_photo={interiors_photo}
                  uploadedImages={uploadedImages}
                  // Terms and Condition prob values
                  accept_terms_and_conditions={accept_terms_and_conditions}
                  go_live={go_live}
                  // navigation
                  nextPage={nextPage}
                  previousPage={previousPage}
                />
              </>
            )}
          </div>
        </UserContextProvider>
      </div>
      <Footer />
    </>
  );
};

export default AboutProperty;
