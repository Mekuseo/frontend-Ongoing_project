import Navbar from "../../../../component/HomePage/header/header";
import "../../../../component/HotelListing/ownsProfileBody/propertyAxis.css";
import Footer from "../../../../component/HomePage/footer/Footer";
import ScrollHeader from "../reusables/ScrollHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../../../severs/auth";
import { UserContextProvider } from "../../../../utils/UserData";
import { CircularProgress } from "@mui/material";
import ButtonNavBar from "../reusables/ButtonNavBar";
import ReviewIP from "../reviewIP";
// import "./review.css";
import "../review.css";
import "./contract.css";
import "./contractMobile.css";
import { useNavigate } from "react-router-dom";

interface ImageObject {
  caption: string;
  imgPath: string;
  progress: number;
}

// const SVG = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" fill="none">
//     <path
//       d="M21.2956 0.332031H8.71935C3.25662 0.332031 0 3.58865 0 9.05138V21.6126C0 27.0904 3.25662 30.347 8.71935 30.347H21.2806C26.7433 30.347 29.9999 27.0904 29.9999 21.6276V9.05138C30.015 3.58865 26.7583 0.332031 21.2956 0.332031ZM19.1946 16.1349L13.8969 21.4325C13.6718 21.6577 13.3867 21.7627 13.1015 21.7627C12.8164 21.7627 12.5312 21.6577 12.3061 21.4325C11.8709 20.9973 11.8709 20.277 12.3061 19.8418L16.8084 15.3395L12.3061 10.8373C11.8709 10.402 11.8709 9.68169 12.3061 9.24647C12.7413 8.81126 13.4617 8.81126 13.8969 9.24647L19.1946 14.5441C19.6448 14.9793 19.6448 15.6997 19.1946 16.1349Z"
//       fill="#6E9E76"
//       fill-opacity="0.8"
//     />
//   </svg>
// );
function Contract() {
  // onload
  useEffect(() => {
    handleOnLoad();
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  // About property const values
  const [propertyName, setPropertyName] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [phoneNumberOneCode, setPhoneNumberOneCode] = useState<string>("");
  const [phoneNumberOne, setPhoneNumberOne] = useState<string>("");
  const [phoneNumberTwoCode, setPhoneNumberTwoCode] = useState<string>("");
  const [phoneNumberTwo, setPhoneNumberTwo] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
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
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
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
  const [reviewOpen, setIsReviewOpen] = useState(false);

  // Photos type const values
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [exterior_photo, setExterior_Photo] = useState<ImageObject[]>([]);
  const [interiors_photo, setInteriors_Photo] = useState<ImageObject[]>([]);

  // Terms and Condition const values
  const [accept_terms_and_conditions, setAccept_Terms_and_Conditions] =
    useState(false);
  const [go_live, setGo_Live] = useState(false);

  //navigation
  const nextPage = "";
  const previousPage = "/photos";

  const navigate = useNavigate();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccept_Terms_and_Conditions(e.target.checked);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (accept_terms_and_conditions) {
      const requestData = {
        // About property prob values
        hotel_name: propertyName,
        property_type: propertyType,
        hotel_phone_code_1: phoneNumberOneCode,
        hotel_phone_number_1: phoneNumberOne,
        hotel_phone_code_2: phoneNumberTwoCode,
        hotel_phone_number_2: phoneNumberTwo,
        hotel_email: emailAddress,
        have_channel_manager: propertyChannelManager,
        is_part_of_hotel_chain: propertyChain,
        describe_property: propertyDescription,
        proximity_to_major_attractions: propertyProxy,
        property_policy: propertyPolicy,
        rating: propertyRating,
        location_building_address: propertyStreetAddress,
        location_building_number: propertyBuildingNumber,
        location_timezone: locationTimeZone,
        location_country: selectedCountry,
        location_state: selectedState,
        location_city: selectedCity,
        property_channel_manager: propertyChannelManager1,
        property_chain_manager: propertyChain1,
        map_location: location,
        location_plot: plotNumber,

        // Amenities prob values
        amenities: checkedAmenities,

        // Select property type prob values
        number_of_rooms: numberBedrooms,
        number_rooms_type: number_of_room_type,
        room_types_name: roomTypeName,
        room_type_capacity: numOfBedrooms,
        type_of_room: selectedCategory,
        room_types_images: images,
        room_amenities_in_room_type: selectedRoomTypeAmenities,
        room_class_of_room_type: selectedCategoryRoom,
        room_night_rates_of_room_type: nightlyRate,
        room_weekly_rates_off_of_room_type: weeklyDiscount,
        room_monthly_rates_off_of_room_type: monthlyDiscount,
        room_guests_deal_off_of_room_type: roomDiscount,
        late_night_deal_off_of_room_type: late_Night_Deal_Off,
        automate_late_night_deals: automate_late_night_deals,
        late_night_deals_time: selectedDates,
        has_late_night_deals_time: hasSelectedDates,

        // Property policy type prob values
        age_restriction: count,
        check_in_time: checkInTime,
        check_out_time: checkOutTime,

        // Payment and Commission type prob values
        full_payment: option1Checked,
        pay_half: option2Checked,
        pay_at_hotel: option3Checked,
        cancellation_policy_time: selectedCancellation,
        cancellation_policy_percentage: refundPercentage,
        vat: selectedTaxOption,
        vat_percentage: vatPercentage,
        agree_is_best_price: agreeItBestPrice,
        full_payment_info: selectedPaymentMethods,

        // Photos type prob values
        exterior_photo: exterior_photo,
        interiors_photo: interiors_photo,
        main_photo: uploadedImages,

        // Terms and Condition prob values
        accept_terms_and_conditions: accept_terms_and_conditions,
        go_live: go_live,
      };

      try {
        const userToken = localStorage.getItem("token") || "";
        const hotelId = localStorage.getItem("hotelId");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${userToken}`,
          },
        };
        let response;
        if (hotelId) {
          response = await axios.put(
            `${baseURL}hotels/hotels/${hotelId}/update/`,
            requestData,
            config
          );
          setIsLoading(false);
        } else {
          response = await axios.post(
            `${baseURL}hotels/add_hotel/`,
            requestData,
            config
          );
          const newHotelId = response.data.id;
          localStorage.setItem("hotelId", newHotelId);
          setIsLoading(false);
        }
        console.log(response);
        setIsReviewOpen(true);
        setTimeout(() => {
          closeReview();
        }, 5000);
      } catch (error) {
        console.log("Error updating/creating property data:", error);
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      alert("Please accept the Terms and Conditions.");
    }
    setIsReviewOpen(true);
  };

  const closeReview = () => {
    setIsReviewOpen(false);
    localStorage.removeItem("hotelId");
    navigate("/", { replace: true });
  };

  const handleReviewOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeReview();
    }
  };

  // const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
  //   if (event.target === event.currentTarget) {
  //     closeReview();
  //   }
  // };

  const handleOnLoad = async () => {
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
    } catch (error) {
      setIsLoading(false);
      console.log("Error fetching user data:", error);
    }
  };

  return (
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
              <p className="contracthead">
                Sign your contract and let’s get your property listed
              </p>
              <p className="contractsub">
                Beware of your local regulations, laws, and tax obligations
                before you take bookings. It is your responsibility to work
                within your own country’s legal framework, which may include
                obtaining the relevant license, permit or registration before
                taking bookings, and paying any applicable taxes on any income
                you generate from such bookings.
              </p>

              <div className="contractListingText">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 31"
                  fill="none"
                  width="4%"
                >
                  <path
                    d="M21.2956 0.332031H8.71935C3.25662 0.332031 0 3.58865 0 9.05138V21.6126C0 27.0904 3.25662 30.347 8.71935 30.347H21.2806C26.7433 30.347 29.9999 27.0904 29.9999 21.6276V9.05138C30.015 3.58865 26.7583 0.332031 21.2956 0.332031ZM19.1946 16.1349L13.8969 21.4325C13.6718 21.6577 13.3867 21.7627 13.1015 21.7627C12.8164 21.7627 12.5312 21.6577 12.3061 21.4325C11.8709 20.9973 11.8709 20.277 12.3061 19.8418L16.8084 15.3395L12.3061 10.8373C11.8709 10.402 11.8709 9.68169 12.3061 9.24647C12.7413 8.81126 13.4617 8.81126 13.8969 9.24647L19.1946 14.5441C19.6448 14.9793 19.6448 15.6997 19.1946 16.1349Z"
                    fill="#6E9E76"
                    fill-opacity="0.8"
                  />
                </svg>
                <p>
                  In case of overbooking, we swap clients between our partner
                  hotels or alternative rooms at the same rate.
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4%"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    d="M21.2956 0.332031H8.71935C3.25662 0.332031 0 3.58865 0 9.05138V21.6126C0 27.0904 3.25662 30.347 8.71935 30.347H21.2806C26.7433 30.347 29.9999 27.0904 29.9999 21.6276V9.05138C30.015 3.58865 26.7583 0.332031 21.2956 0.332031ZM19.1946 16.1349L13.8969 21.4325C13.6718 21.6577 13.3867 21.7627 13.1015 21.7627C12.8164 21.7627 12.5312 21.6577 12.3061 21.4325C11.8709 20.9973 11.8709 20.277 12.3061 19.8418L16.8084 15.3395L12.3061 10.8373C11.8709 10.402 11.8709 9.68169 12.3061 9.24647C12.7413 8.81126 13.4617 8.81126 13.8969 9.24647L19.1946 14.5441C19.6448 14.9793 19.6448 15.6997 19.1946 16.1349Z"
                    fill="#6E9E76"
                    fill-opacity="0.8"
                  />
                </svg>
                <p>
                  We charge &nbsp;
                  <span className="highlightedContractText">
                    5% on late night deals,
                  </span>
                  &nbsp; or every confirmed booking or reservation. Payable in
                  14-28 days from when invoice is recieved.
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4%"
                  height="10%"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    d="M21.2956 0.332031H8.71935C3.25662 0.332031 0 3.58865 0 9.05138V21.6126C0 27.0904 3.25662 30.347 8.71935 30.347H21.2806C26.7433 30.347 29.9999 27.0904 29.9999 21.6276V9.05138C30.015 3.58865 26.7583 0.332031 21.2956 0.332031ZM19.1946 16.1349L13.8969 21.4325C13.6718 21.6577 13.3867 21.7627 13.1015 21.7627C12.8164 21.7627 12.5312 21.6577 12.3061 21.4325C11.8709 20.9973 11.8709 20.277 12.3061 19.8418L16.8084 15.3395L12.3061 10.8373C11.8709 10.402 11.8709 9.68169 12.3061 9.24647C12.7413 8.81126 13.4617 8.81126 13.8969 9.24647L19.1946 14.5441C19.6448 14.9793 19.6448 15.6997 19.1946 16.1349Z"
                    fill="#6E9E76"
                    fill-opacity="0.8"
                  />
                </svg>
                <p>
                  We charge &nbsp;
                  <span className="highlightedContractText">10%</span>
                  &nbsp; on every confirmed booking reservation. Payable in
                  14-28 days from when invoice is recieved.
                </p>
              </div>

              <p className="contractTermsConditions">
                The{" "}
                <span style={{ color: "#6E9E76" }}>
                  General Terms and Conditions
                </span>{" "}
                apply to all your properties listed through
                <span style={{ color: "#FF3C42" }}>TheTravelHunters</span>
              </p>

              <div className="endcheck">
                <label className="endingcheck">
                  Accept the Terms and Conditions.
                  <input
                    type="checkbox"
                    checked={accept_terms_and_conditions}
                    onChange={handleCheckboxChange}
                  />
                  <span className="termstick"></span>
                </label>
              </div>

              <div>
                <button className="contractGoLive" onClick={handleSubmit}>
                  GO LIVE!
                </button>
              </div>

              {reviewOpen && (
                // <div className="reviewModal" onClick={handleOutsideClick}></div>
                <div className="reviewModal" onClick={handleReviewOverlayClick}>
                  <div className="reviewModalContent">
                    <span onClick={closeReview}></span>
                    <ReviewIP />
                  </div>
                </div>
              )}
            </>
          )}
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
        </div>
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default Contract;
