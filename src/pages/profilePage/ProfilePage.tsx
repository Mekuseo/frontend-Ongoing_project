import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import Navbar from "../../component/HomePage/header/header";
import ProfilePhoto from "./components/ProfilePhoto";
import ProfileName1 from "./ProfilePageCompnents/ProfileName1";
import { useState, useEffect } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import * as React from "react";
import axios from "axios";
import { UserContextProvider } from "../../utils/UserData";
import SaveAndProceedButton from "./ProfilePageCompnents/SaveAndProceedButton";
import { baseURL } from "../../severs/auth";
import { useNavigate } from "react-router-dom";
import Footer from "../../component/HomePage/footer/Footer";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#EAECF0",
  },
  heading: {
    fontFamily: "raleway, sans-serif",
    fontWeight: 700,
    fontSize: "40px",
    paddingTop: "60px",
    textAlign: "center",
  },
  profileContainer: {
    border: "1px solid var(--blue-gray-200, #E2E8F0)",
    boxShadow:
      "0px 0px 10px 0px rgba(0, 0, 0, 0.07), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
    borderRadius: "10px",
    width: "1027px",
    backgroundColor: "white",
    margin: "0 auto",
    padding: "38px 0 0 63px",
  },
  infoText: {
    fontFamily: "raleway, sans-serif",
    fontSize: "20px",
    fontWeight: 600,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "60%",
    margin: "0 0 30px",
  },
  button: {
    marginTop: "5px",
    color: "black",
    border: "1px solid black",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    margin: "0 auto",
    borderRadius: "10px",
    textTransform: "capitalize",
  },
});

const ProfilePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  // const { user } = useContext(UserContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [countryCodes, setCountryCodes] = useState<
    { code: string; country: string }[]
  >([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState<string>("");
  const [account, setAccount] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<IconDefinition | null>(null);
  const [selectedDate, setSelectedDate] = useState(null);
  // const [dateOfBirth, setDateOfBirth] = useState(null);
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [isDivHidden, setIsDivHidden] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [formattedDate, setFormattedDate] = useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = React.useState<
    "success" | "error"
  >("success");
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [images1, setImages1] = useState("");

  const [showEditButton, setShowEditButton] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const [, setIsFormValid] = useState(true);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateOfBirthError, setDateOfBirthError] = useState("");
  const [isNationalityFormValid, setIsNationalityFormValid] = useState(true);
  const [countryError, setCountryError] = useState("");
  const [provinceError, setProvinceError] = useState("");
  const [cityError, setCityError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    handleOnLoad();

    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const codes = response.data.map((country: any) => ({
          code: `+${country.callingCodes[0]}`,
          country: country.name,
        }));
        setCountryCodes(codes);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  const handleIconClick = (icon: IconDefinition | null) => {
    setSelectedIcon((prevIcon) => (prevIcon === icon ? null : icon));
  };

  const handleSocialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccount(event.target.value);
  };

  const handleCountryChange = (event: any, field: string) => {
    const selectedValue = event.target.value as string;
    if (field === "phoneNumber") {
      setSelectedCountry(selectedValue);
    }
  };

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;

    // Remove all non-digit characters
    const cleanValue = value.replace(/\D/g, "");

    // Apply formatting
    const formattedValue =
      cleanValue.length > 6
        ? `${cleanValue.slice(0, 3)}-${cleanValue.slice(
            3,
            7
          )}-${cleanValue.slice(7, 10)}${cleanValue.slice(10)}`
        : cleanValue;

    return formattedValue;
  };

  console.log(selectedCountryCode);

  const handleSaveAndProceed = () => {
    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !countryCodes ||
      !selectedPhoneNumber ||
      !selectedCountry
    ) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Please fill in all required fields.");
      setSnackbarOpen(true);
      return;
    }

    // Check if the nationality form is valid
    const isNationalityValid = validateNationalityForm();
    setIsNationalityFormValid(isNationalityValid);
    if (!isNationalityValid) {
      setSnackbarSeverity("error");
      setSnackbarMessage(
        "Please fill in all required fields in the Nationality section."
      );
      setSnackbarOpen(true);
      return;
    }

    setIsDivHidden(true);
    setIsFormValid(true);
    setShowEditButton(true);
    setEditMode(false);

    setSnackbarSeverity("success");
    setSnackbarMessage("Save successful!");
    setSnackbarOpen(true);
  };

  const validateNationalityForm = () => {
    const countryValid = country.trim() !== "";
    const provinceValid = province.trim() !== "";
    const cityValid = city.trim() !== "";

    setCountryError(countryValid ? "" : "Country is required");
    setProvinceError(provinceValid ? "" : "State / Province is required");
    setCityError(cityValid ? "" : "City / District is required");

    return countryValid && provinceValid && cityValid;
  };

  const handleEditClick = () => {
    setIsDivHidden(false);
    setEditMode(true);
  };

  const handlePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = event.target.value;
    setPhoneNumberError(newPhoneNumber ? "" : "Phone number is required");
    setSelectedPhoneNumber(newPhoneNumber);
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFirstName = event.target.value;
    setFirstNameError(newFirstName ? "" : "First Name is required");
    setFirstName(newFirstName);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLastName = event.target.value;
    setLastName(newLastName);
    setLastNameError(newLastName ? "" : "Last Name is required");
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    setUsernameError(newUsername ? "" : "Username is required");
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setEmailError(newEmail ? "" : "Email is required");
  };

  const handleNationalityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    if (name === "country") setCountry(value);
    else if (name === "province") setProvince(value);
    else if (name === "city") setCity(value);
  };

  const handleGenderChange = (value: string) => {
    console.log(value); // Check the value you're trying to set
    setGender(value);
  };

  const handleListItemClick = () => {
    navigate("/aboutProperty");
  };

  const handleImageUpload1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedImage1 = event.target.files?.[0];

    if (uploadedImage1) {
      try {
        const imageUrl = URL.createObjectURL(uploadedImage1);

        // Update state with the image URL
        setImages1(imageUrl);
      } catch (error) {
        // Handle errors related to creating object URL
        console.error("Error creating object URL:", error);
      }
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
      const responseData = response.data;
      setFirstName(responseData.first_name);
      setLastName(responseData.last_name);
      setUsername(responseData.username);
      setEmail(responseData.email);
      setSelectedPhoneNumber(responseData.phone_number);
      setSelectedCountry(responseData.country);
      setImages1(responseData.profile_picture);
      setImage(responseData.means_of_id);
      setCity(responseData.city);
      setSelectedCountryCode(responseData.country_code);
      setCountry(responseData.country);
      setProvince(responseData.state);

      // setIsLoading(false);
      console.log(response);
    } catch (error) {
      // setIsLoading(false);
      console.log("Error fetching user data:", error);
    }
  };

  return (
    <div className={classes.container}>
      <UserContextProvider>
        <Navbar />
        <h1 className={classes.heading}>Profile</h1>
        <div className={classes.profileContainer}>
          <p className={classes.infoText}>
            Update your information and you can do a whole lot more!
          </p>

          <div style={{ display: "flex", gap: "30px" }}>
            <div
              style={{
                width: "60%",
                borderRight: "1px solid #D9D9D9",
                paddingRight: "25px",
              }}
            >
              <ProfileName1
                firstName={firstName}
                lastName={lastName}
                username={username}
                email={email}
                countryCodes={countryCodes}
                selectedCountry={selectedCountry}
                selectedPhoneNumber={selectedPhoneNumber}
                selectedCountryCode={selectedCountryCode}
                setSelectedCountryCode={setSelectedCountryCode}
                account={account}
                selectedIcon={selectedIcon}
                selectedDate={selectedDate}
                handleIconClick={handleIconClick}
                handleSocialChange={handleSocialChange}
                handleCountryChange={handleCountryChange}
                handlePhoneNumber={handlePhoneNumber}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
                handleUsernameChange={handleUsernameChange}
                handleEmailChange={handleEmailChange}
                handleNationalityChange={handleNationalityChange}
                handleGenderChange={handleGenderChange}
                gender={gender}
                handleSaveAndProceed={handleSaveAndProceed}
                handleEditClick={handleEditClick}
                isDivHidden={isDivHidden}
                editMode={editMode}
                formatPhoneNumber={formatPhoneNumber}
                firstNameError={firstNameError}
                lastNameError={lastNameError}
                usernameError={usernameError}
                emailError={emailError}
                dateOfBirthError={dateOfBirthError}
                isNationalityFormValid={isNationalityFormValid}
                countryError={countryError}
                provinceError={provinceError}
                cityError={cityError}
                phoneNumberError={phoneNumberError}
                image={image}
                setSelectedDate={setSelectedDate}
                formattedDate={formattedDate}
                setFormattedDate={setFormattedDate}
                snackbarOpen={snackbarOpen}
                snackbarSeverity={snackbarSeverity}
                snackbarMessage={snackbarMessage}
                showEditButton={showEditButton}
                setDateOfBirthError={setDateOfBirthError}
                country={country}
                province={province}
                city={city}
                setSnackbarOpen={setSnackbarOpen}
                setImage={setImage}
              />
              <div style={{ margin: "49px" }}>
                {" "}
                <SaveAndProceedButton
                  onClick={handleSaveAndProceed}
                  firstName={firstName}
                  lastName={lastName}
                  username={username}
                  email={email}
                  images1={images1}
                  image={image}
                  selectedPhoneNumber={selectedPhoneNumber}
                  selectedCountryCode={selectedCountryCode}
                  selectedCountry={country}
                  province={province}
                  city={city}
                />
              </div>
            </div>
            <div>
              <ProfilePhoto
                images1={images1}
                setImages1={setImages1}
                handleImageUpload1={handleImageUpload1}
              />
            </div>
          </div>

          <div className={classes.buttonContainer}>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={handleListItemClick}
            >
              List your property
            </Button>
            <Button variant="outlined" className={classes.button}>
              List your Event
            </Button>
            <Button variant="outlined" className={classes.button}>
              List your Place
            </Button>
          </div>
        </div>
        <Footer />
      </UserContextProvider>
    </div>
  );
};

export default ProfilePage;
