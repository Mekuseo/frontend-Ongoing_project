import Navbar from "../../../component/HomePage/header/header";
import Footer from "../../../component/HomePage/footer/Footer";
import UploadPhotos from "../../../component/stay/addtohotel/uploadPhotos";
import "../../../component/stay/addtohotel/Photos.css";
import "../../../component/stay/addtohotel/photosMobile.css";
import UploadFiles from "../../../component/stay/addtohotel/uploadFile";
// import UploadFileTwo from "../../../component/stay/addtohotel/uploadFileTwo";
import ScrollHeader from "./reusables/ScrollHeader";
import { useEffect, useState } from "react";
import { UserContextProvider } from "../../../utils/UserData";
import ButtonNavBar from "./reusables/ButtonNavBar";
import { baseURL } from "../../../severs/auth";
import axios from "axios";
import { CircularProgress } from "@mui/material";

interface ImageObject {
  caption: string;
  imgPath: string;
  progress: number;
}

export default function Photos() {
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
  const [images, setImages] = useState<{ [key: number]: File[] }>({});
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

  // Photos type const values
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [exteriorImages, setExteriorImages] = useState<ImageObject[]>([]);
  const [interiorsImages, setInteriorsImages] = useState<ImageObject[]>([]);

  // Terms and Condition const values
  const [accept_terms_and_conditions, setAccept_Terms_and_Conditions] =
    useState(false);
  const [go_live, setGo_Live] = useState(false);

  //navigation
  const nextPage = "/contract";
  const previousPage = "/commision";

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
      setExteriorImages(responseData.exterior_photo);
      setInteriorsImages(responseData.interiors_photo);

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
    <>
      <UserContextProvider>
        <Navbar />
        <div className="content">
          <ScrollHeader />
          <p className="headerText">Photos</p>
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
              <p className="photoText">
                Help travellers interact with your property by providing high
                quality and captivating pictures that send your desired
                messages. You must upload at least 7 pictures.
              </p>
              <div className="photoSubHead">
                <p>Upload main photo</p>
                <div>
                  You can upload 3 images. We will select the most preferable.
                </div>
              </div>
              <div className="photoContainer">
                <UploadPhotos
                  uploadedImages={uploadedImages}
                  setUploadedImages={setUploadedImages}
                />
              </div>
              <p className="photoSubheading">More photos</p>
              <p className="photoSubheadingTwo">
                Add more images of your property, Minimum of 3 images and
                maximum of 10 images.
              </p>
              <UploadFiles
                exteriorImages={exteriorImages}
                setExteriorImages={setExteriorImages}
              />
              {/* <p className="photoSubheading">Interiors</p>
              <p className="photoSubheadingTwo">
                Minimum of 3 images and maximum of 15 images.
              </p>
              <UploadFileTwo
                interiorsImages={interiorsImages}
                setInteriorsImages={setInteriorsImages}
              /> */}
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
                exterior_photo={exteriorImages}
                interiors_photo={interiorsImages}
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

        <Footer />
      </UserContextProvider>
    </>
  );
}
