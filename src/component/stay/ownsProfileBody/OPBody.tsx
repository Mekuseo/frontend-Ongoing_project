import "./OPbpdy.css";
import OwnsPd from "./ownsDp/OwnsPd";
import OwnsDetail from "./OwnsDetails/OwnsDetail";
import ContactD from "./contactD/ContactD";
import LocationD from "./LocationsD/LocationD";
import BottomNav from "./bottomNav/BottomNav";
import HostingType from "./HostingType/HostingType";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../../severs/auth";

const OPBody = () => {
  useEffect(() => {
    handleOnLoad();
  }, []);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [fullAddress, setFullAddress] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] =
    useState<string>("Nigerian Naira");
  const [selectedNationality, setSelectedNationality] =
    useState<string>("Nigerian");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberCountry, setPhoneNumberCountry] = useState<string>("+234");

  // const history = useHistory();

  const handleProfileImageUpload = (url: string) => {
    // Update the profileImageUrl state when the image is uploaded
    setProfileImageUrl(url);
    console.log(url);
  };

  // Create a function to build the location string
  const getLocationString = () => {
    let location = "";
    if (selectedCity) {
      location += selectedCity + ", ";
    }
    if (selectedState) {
      location += selectedState + ", ";
    }
    if (selectedCountry) {
      location += selectedCountry;
    }
    return location;
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
      const responseData = response.data;
      setSelectedCountry(responseData.country);
      setSelectedState(responseData.state);
      setSelectedCity(responseData.city);
      setFirstName(responseData.first_name);
      setLastName(responseData.last_name);
      setDateOfBirth(responseData.date_of_birth);
      setPhoneNumber(responseData.phone_number);
      setPhoneNumberCountry(responseData.country_code);
      setProfileImageUrl(responseData.profile_picture);
      setSelectedNationality(responseData.nationality);
      setSelectedCurrency(responseData.currency);
      setAddress(responseData.address);
      setPhoneNumberCountry(responseData.country_code);

      // setIsLoading(false);
      console.log(response);
    } catch (error) {
      // setIsLoading(false);
      console.log("Error fetching user data:", error);
    }
  };

  // Call getLocationString() whenever the selected locations change
  useEffect(() => {
    setFullAddress(getLocationString());
  }, [selectedCountry, selectedState, selectedCity]);

  return (
    <div className="deals_main">
      <div className="deal">
        <div className="BodyOwn">
          <h1 className="headText">Owner's Profile</h1>
          <span className="Headertagb">Submit the right details</span>
          <h2 className="opsub">Please provide all necessary information.</h2>
          <HostingType />
          <OwnsPd
            onProfileImageUpload={handleProfileImageUpload}
            profileImageUrl={profileImageUrl}
            setProfileImageUrl={setProfileImageUrl}
          />
          <OwnsDetail
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            dateOfBirth={dateOfBirth}
            setDateOfBirth={setDateOfBirth}
          />
          <ContactD
            setPhoneNumber={setPhoneNumber}
            phoneNumber={phoneNumber}
            phoneNumberCountry={phoneNumberCountry}
            setPhoneNumberCountry={setPhoneNumberCountry}
          />
          <LocationD
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            address={address}
            setAddress={setAddress}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
            selectedNationality={selectedNationality}
            setSelectedNationality={setSelectedNationality}
          />
          <BottomNav
            selectedPhoneNumber={phoneNumber}
            phoneNumberCountry={phoneNumberCountry}
            selectedFiestName={firstName}
            selectedLastNAme={lastName}
            selectedDOB={dateOfBirth}
            selectedDP={profileImageUrl}
            selectedCountry={selectedCountry}
            selectedState={selectedState}
            selectedCity={selectedCity}
            fullAddress={fullAddress}
            address={address}
            selectedCurrency={selectedCurrency}
            selectedNationality={selectedNationality}
          />
        </div>
      </div>
    </div>
  );
};

export default OPBody;
