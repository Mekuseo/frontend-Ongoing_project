import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./ButtonNavBar.css";
import axios from "axios";
import { baseURL } from "../../../../severs/auth";

interface ImageObject {
  caption: string;
  imgPath: string;
  progress: number; // Make sure 'progress' is present
}

interface PropertyProps {
  // About property prob values
  propertyName: string;
  propertyType: string;
  phoneNumberOneCode: string;
  phoneNumberOne: string;
  phoneNumberTwoCode: string;
  phoneNumberTwo: string;
  emailAddress: string;
  propertyChannelManager: string;
  propertyDescription: string;
  propertyProxy: string[];
  propertyPolicy: string;
  propertyRating: string;
  propertyBuildingNumber: string;
  propertyStreetAddress: string;
  propertyChain: string;
  selectedCountry: string;
  selectedState: string;
  selectedCity: string;
  location: {
    lat: number;
    lng: number;
  } | null;
  locationTimeZone: string;
  propertyChannelManager1: string;
  propertyChain1: string;
  postalCode: string;
  plotNumber: string;

  // Amenities prob values
  selectedPopularAmenities: Array<{
    amenity: string;
    "amenity-subtitle"?: string;
    subItems: string[];
  }>;

  // Select property type prob values
  numberBedrooms: number;
  roomType: number;
  roomTypeName: string[];
  room_type_capacity: number[];
  type_of_room: string[];
  roomTypeImages: { [key: number]: File[] };
  room_amenities_in_room_type: { [key: number]: any[] };
  room_class_of_room_type: string[];
  nightlyRate: number[];
  weeklyDiscount: (number | null)[];
  monthlyDiscount: (number | null)[];
  roomDiscount: (number | null)[];
  late_Night_Deal_Off: (number | null)[];
  automate_late_night_deals: boolean[];
  selectedDates: { [key: number]: Date[] };
  hasSelectedDates: boolean[];

  // Property policy type prob values
  age_restriction: number;
  check_in_time: string;
  check_out_time: string;

  // Payment and Commission type prob values
  option1Checked: boolean;
  option2Checked: boolean;
  option3Checked: boolean;
  selectedCancellation: string;
  refundPercentage: string;
  selectedTaxOption: string;
  vatPercentage: string;
  agreeItBestPrice: boolean;
  selectedPaymentMethods: string[];

  // Photos type prob values
  exterior_photo: ImageObject[];
  interiors_photo: ImageObject[];
  uploadedImages: string[];

  // Terms and Condition prob values
  accept_terms_and_conditions: boolean;
  go_live: boolean;

  // navigation
  nextPage: string;
  previousPage: string;
}

const ButtonNavBar: React.FC<PropertyProps> = ({
  // About property prob values
  propertyName,
  propertyType,
  phoneNumberOneCode,
  phoneNumberOne,
  phoneNumberTwoCode,
  phoneNumberTwo,
  emailAddress,
  propertyChannelManager,
  propertyDescription,
  propertyProxy,
  propertyRating,
  propertyPolicy,
  propertyBuildingNumber,
  propertyStreetAddress,
  locationTimeZone,
  selectedCountry,
  selectedState,
  selectedCity,
  propertyChain,
  propertyChannelManager1,
  propertyChain1,
  location,
  postalCode,
  plotNumber,

  // Amenities prob values
  selectedPopularAmenities,

  // Select property type prob values
  numberBedrooms,
  roomType,
  roomTypeName,
  room_type_capacity,
  type_of_room,
  room_amenities_in_room_type,
  roomTypeImages,
  room_class_of_room_type,
  nightlyRate,
  weeklyDiscount,
  monthlyDiscount,
  roomDiscount,
  late_Night_Deal_Off,
  automate_late_night_deals,
  selectedDates,
  hasSelectedDates,

  // Property policy type prob values
  age_restriction,
  check_in_time,
  check_out_time,

  // Payment and Commission type prob values
  option1Checked,
  option2Checked,
  option3Checked,
  selectedCancellation,
  refundPercentage,
  selectedTaxOption,
  vatPercentage,
  agreeItBestPrice,
  selectedPaymentMethods,

  // Photos type prob values
  exterior_photo,
  interiors_photo,
  uploadedImages,

  // Terms and Condition prob values
  accept_terms_and_conditions,
  go_live,

  // navigation
  nextPage,
  previousPage,
}) => {
  const navigate = useNavigate();

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
    postal_code: postalCode,
    location_plot: plotNumber,

    // Amenities prob values
    amenities: selectedPopularAmenities,

    // Select property type prob values
    number_of_rooms: numberBedrooms,
    number_rooms_type: roomType,
    room_types_name: roomTypeName,
    room_type_capacity: room_type_capacity,
    type_of_room: type_of_room,
    room_types_images: roomTypeImages,
    room_amenities_in_room_type: room_amenities_in_room_type,
    room_class_of_room_type: room_class_of_room_type,
    room_night_rates_of_room_type: nightlyRate,
    room_weekly_rates_off_of_room_type: weeklyDiscount,
    room_monthly_rates_off_of_room_type: monthlyDiscount,
    room_guests_deal_off_of_room_type: roomDiscount,
    late_night_deal_off_of_room_type: late_Night_Deal_Off,
    automate_late_night_deals: automate_late_night_deals,
    late_night_deals_time: selectedDates,
    has_late_night_deals_time: hasSelectedDates,

    // Property policy type prob values
    age_restriction: age_restriction,
    check_in_time: check_in_time,
    check_out_time: check_out_time,

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

  const handleSaveAndExitClick = async () => {
    console.log(room_amenities_in_room_type);
    try {
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
      if (hotelId) {
        response = await axios.put(
          `${baseURL}hotels/hotels/${hotelId}/update/`,
          requestData,
          config
        );
      } else {
        response = await axios.post(
          `${baseURL}hotels/add_hotel/`,
          requestData,
          config
        );
        const newHotelId = response.data.id;
        localStorage.setItem("hotelId", newHotelId);
      }
      console.log(response);
    } catch (error) {
      console.log("Error updating/creating property data:", error);
    }
    navigate("/", { replace: true });
  };
  const handlePrevious = async () => {
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
      } else {
        response = await axios.post(
          `${baseURL}hotels/add_hotel/`,
          requestData,
          config
        );
        const newHotelId = response.data.id;
        localStorage.setItem("hotelId", newHotelId);
      }
      console.log(response);
    } catch (error) {
      console.log("Error updating/creating property data:", error);
    }
    navigate({ pathname: previousPage }, { replace: true });
  };
  const handleNext = async () => {
    console.log(propertyProxy, uploadedImages);
    try {
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
      if (hotelId) {
        // Update an existing hotel using PUT request
        response = await axios.put(
          `${baseURL}hotels/hotels/${hotelId}/update/`,
          requestData,
          config
        );
      } else {
        // Add a new hotel using POST request
        response = await axios.post(
          `${baseURL}hotels/add_hotel/`,
          requestData,
          config
        );
        // Extract the new hotelId from the response and store it in local storage
        const newHotelId = response.data.id;
        localStorage.setItem("hotelId", newHotelId);
      }
      navigate({ pathname: nextPage }, { replace: true });
      console.log(response);
    } catch (error) {
      console.error("Error updating/creating property data:", error);

      // console.log("Response data:", error);
      // console.log("Response status:", error.response.status);
      // console.log("Response headers:", error.response.headers);
      // if (error.response && error.response.status === 400) {
      //   console.error("Validation Error Details:", error.response.data);
      // }
    }
  };
  return (
    <div className="buttonNav-container">
      <button className="buttonNav-saveExit" onClick={handleSaveAndExitClick}>
        SAVE AND EXIT{" "}
        <FontAwesomeIcon icon={faDoorOpen} style={{ paddingLeft: "5px" }} />
      </button>
      <div className="buttonNav-right">
        <button className="buttonNav-previous" onClick={handlePrevious}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ paddingRight: "5px" }} />{" "}
          PREVIOUS
        </button>

        <button className="buttonNav-previous" onClick={handleNext}>
          NEXT{" "}
          <FontAwesomeIcon icon={faArrowRight} style={{ paddingLeft: "8px" }} />
        </button>
      </div>
    </div>
  );
};

export default ButtonNavBar;
