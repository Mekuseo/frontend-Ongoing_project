import FirstNameSection from "./FirstNameSection";
import UserNameSection from "./UserNameSection";
import EmailSection from "./EmailSection";
import PhoneNumberSection from "./PhoneNumberSection";
import SocialMediaSection from "./SocialMediaSection";
import {
  faSquareXTwitter,
  faFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import BirthDaySection from "./BirthDaySection";
import Nationality from "./Nationality";
import GenderSection from "./GenderSection";
import IdentificationSection from "./IdentificationSection";
import { Divider } from "@material-ui/core";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const socialMediaIcons = [
  { icon: faSquareXTwitter, color: "green", primary: "black" },
  { icon: faFacebook, color: "green", primary: "blue" },
  { icon: faSquareInstagram, color: "green", primary: "#f33f19" },
];

interface ProfileName1Props {
  firstName: string;
  handleFirstNameChange: (e: any) => void;
  lastName: string;
  handleLastNameChange: (e: any) => void;
  username: string;
  handleUsernameChange: (e: any) => void;
  email: string;
  handleEmailChange: (e: any) => void;
  countryCodes: { code: string; country: string }[];
  selectedCountry: string;
  handleCountryChange: (
    event: React.ChangeEvent<{ value: unknown }>,
    type: string
  ) => void;
  selectedPhoneNumber: string;
  handlePhoneNumber: (e: any) => void;
  account: string;
  handleSocialChange: (e: any) => void;
  selectedIcon: any;
  handleIconClick: (icon: any) => void;
  selectedDate: any;
  setSelectedDate: any;
  country: string;
  province: string;
  city: string;
  image: string | null;
  firstNameError: string;
  lastNameError: string;
  usernameError: string;
  editMode: boolean;
  showEditButton: boolean;
  handleEditClick: () => void;
  isDivHidden: boolean;
  emailError: string;
  phoneNumberError: string;
  formatPhoneNumber: (phoneNumber: string) => string;
  selectedCountryCode: string;
  setSelectedCountryCode: (countryCode: string) => void;
  countryError: string;
  provinceError: string;
  cityError: any;
  setDateOfBirthError: any;
  dateOfBirthError: any;
  formattedDate: string;
  setFormattedDate: React.Dispatch<React.SetStateAction<string>>;
  handleNationalityChange: (e: any) => void;
  isNationalityFormValid: boolean;
  gender: string;
  handleGenderChange: (e: any) => void;
  handleSaveAndProceed: () => void;
  snackbarOpen: boolean;
  setSnackbarOpen: (open: boolean) => void;
  snackbarSeverity: "success" | "error" | "info" | "warning" | undefined;
  snackbarMessage: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileName1 = (props: ProfileName1Props) => {
  const {
    setImage,
    firstName,
    handleFirstNameChange,
    lastName,
    handleLastNameChange,
    username,
    handleUsernameChange,
    email,
    handleEmailChange,
    countryCodes,
    selectedCountry,
    handleCountryChange,
    selectedPhoneNumber,
    handlePhoneNumber,
    account,
    handleSocialChange,
    selectedIcon,
    handleIconClick,
    selectedDate,
    setSelectedDate,
    country,
    province,
    city,
    image,
    firstNameError,
    lastNameError,
    usernameError,
    editMode,
    showEditButton,
    handleEditClick,
    isDivHidden,
    emailError,
    phoneNumberError,
    formatPhoneNumber,
    selectedCountryCode,
    setSelectedCountryCode,
    countryError,
    provinceError,
    cityError,
    setDateOfBirthError,
    dateOfBirthError,
    formattedDate,
    setFormattedDate,
    handleNationalityChange,
    isNationalityFormValid,
    gender,
    handleGenderChange,
    snackbarOpen,
    setSnackbarOpen,
    snackbarSeverity,
    snackbarMessage,
  } = props;

  return (
    <div>
      <FirstNameSection
        firstName={firstName}
        handleFirstNameChange={handleFirstNameChange}
        firstNameError={firstNameError}
        editMode={editMode}
        showEditButton={showEditButton}
        onEditClick={handleEditClick}
        handleEditClick={handleEditClick}
        handleLastNameChange={handleLastNameChange}
        lastName={lastName}
        lastNameError={lastNameError}
        hideDiv={isDivHidden}
      />
      <Divider style={{ margin: "10px 0 20px" }} />

      <UserNameSection
        editMode={editMode}
        handleUsernameChange={handleUsernameChange}
        username={username}
        usernameError={usernameError}
        showEditButton={showEditButton}
        handleEditClick={handleEditClick}
        hideDiv={isDivHidden}
      />
      <EmailSection
        editMode={editMode}
        handleEmailChange={handleEmailChange}
        email={email}
        emailError={emailError}
        showEditButton={showEditButton}
        handleEditClick={handleEditClick}
        hideDiv={isDivHidden}
      />

      <PhoneNumberSection
        selectedCountry={selectedCountry}
        handleCountryChange={handleCountryChange}
        countryCodes={countryCodes}
        editMode={editMode}
        selectedPhoneNumber={selectedPhoneNumber}
        formatPhoneNumber={formatPhoneNumber}
        phoneNumberError={phoneNumberError}
        showEditButton={showEditButton}
        handleEditClick={handleEditClick}
        handlePhoneNumber={handlePhoneNumber}
        hideDiv={isDivHidden}
        onCountryCodeSelect={setSelectedCountryCode}
        selectedCountryCode={selectedCountryCode}
      />

      <SocialMediaSection
        socialMediaIcons={socialMediaIcons}
        selectedIcon={selectedIcon}
        handleIconClick={handleIconClick}
        handleSocialChange={handleSocialChange}
        account={account}
      />
      <BirthDaySection
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setDateOfBirthError={setDateOfBirthError}
        dateOfBirthError={dateOfBirthError}
        showEditButton={showEditButton}
        handleEditClick={handleEditClick}
        hideDiv={isDivHidden}
        formattedDate={formattedDate}
        setFormattedDate={setFormattedDate}
      />
      <Nationality
        handleNationalityChange={handleNationalityChange}
        country={country}
        isNationalityFormValid={isNationalityFormValid}
        countryError={countryError}
        editMode={editMode}
        province={province}
        provinceError={provinceError}
        city={city}
        cityError={cityError}
        showEditButton={showEditButton}
        handleEditClick={handleEditClick}
        hideDiv={isDivHidden}
      />
      <GenderSection
        gender={gender}
        handleGenderChange={handleGenderChange}
        showEditButton={showEditButton}
        handleEditClick={handleEditClick}
        hideDiv={isDivHidden}
      />
      <IdentificationSection image={image} setImage={setImage} />
      {/* Other sections */}
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={() => setSnackbarOpen(false)}
          >
            <Alert
              onClose={() => setSnackbarOpen(false)}
              severity={snackbarSeverity}
              sx={{ width: "100%" }}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Stack>
      </Stack>
    </div>
  );
};

export default ProfileName1;
