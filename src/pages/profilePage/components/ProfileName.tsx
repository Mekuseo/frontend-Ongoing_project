// import { useState, useEffect } from "react";
// import {
//   Box,
//   Divider,
//   FormControl,
//   Grid,
//   MenuItem,
//   Select,
//   Typography,
// } from "@material-ui/core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSquareXTwitter,
//   faFacebook,
//   faSquareInstagram,
//   faGithub,
// } from "@fortawesome/free-brands-svg-icons";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import axios from "axios";
// import * as React from "react";
// import ProfileIdentification from "./ProfileIdentification";
// import { IconDefinition } from "@fortawesome/fontawesome-common-types";
// // import { useState, useEffect } from "react";
// // import {
// //   Box,
// //   Divider,
// //   FormControl,
// //   Grid,
// //   MenuItem,
// //   Select,
// //   Typography,
// // } from "@material-ui/core";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   faSquareXTwitter,
// //   faFacebook,
// //   faSquareInstagram,
// //   faGithub,
// // } from "@fortawesome/free-brands-svg-icons";
// // import { makeStyles } from "@material-ui/core/styles";
// // import TextField from "@mui/material/TextField";
// // import Button from "@mui/material/Button";
// // import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// // import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// // import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// // import axios from "axios";
// // // import { SelectChangeEvent } from "@mui/material/Select";
// // import * as React from "react";
// // import ProfileIdentification from "./ProfileIdentification";
// // import { IconDefinition } from "@fortawesome/fontawesome-common-types";

// // const useStyles = makeStyles({
// //   container: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //   },
// //   addBox: {
// //     color: "red",
// //     fontWeight: 600,
// //     textDecoration: "underline",
// //     "&:hover": {
// //       cursor: "pointer",
// //     },
// //   },
// //   input: {
// //     backgroundColor: "#F5F5F5", // Default background color
// //     border: "1px solid #F5F5F5", // Default border
// //   },
// //   nonEditable: {
// //     backgroundColor: "transparent",
// //     border: "none",
// //     pointerEvents: "none",
// //   },
// // });

// // const useStyles2 = makeStyles({
// //   container: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //   },
// //   heading: {
// //     fontFamily: "raleway, sans-serif",
// //     fontSize: "16px",
// //     fontWeight: 500,
// //     margin: "33px 0 0",
// //   },
// //   socialMediaBox: {
// //     border: "1px solid #cfcfcf",
// //     padding: "10px 60px",
// //     borderRadius: "5px",
// //     textAlign: "center",
// //     marginTop: "5px",
// //   },
// //   socialMediaLabel: {
// //     fontFamily: "raleway, sans-serif",
// //     fontSize: "16px",
// //     fontWeight: 500,
// //   },
// //   socialMediaNote: {
// //     fontFamily: "raleway, sans-serif",
// //     fontSize: "13px",
// //     fontWeight: 500,
// //     marginTop: "-20px",
// //   },
// //   icon: {
// //     padding: "5px",
// //     borderRadius: "50%",
// //   },
// // });

// // const socialMediaIcons = [
// //   { icon: faSquareXTwitter, color: "green" },
// //   { icon: faFacebook, color: "green" },
// //   { icon: faSquareInstagram, color: "green" },
// //   { icon: faGithub, color: "green" },
// // ];

// // const ProfileName = () => {
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [username, setUsername] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [countryCodes, setCountryCodes] = useState<
// //     { code: string; country: string }[]
// //   >([]);
// //   const [selectedCountry, setSelectedCountry] = useState<string>("");
// //   const [selectedPhoneNumber, setSelectedPhoneNumber] = useState<string>("");
// //   const [account, setAccount] = useState("");
// //   const [selectedIcon, setSelectedIcon] = useState<IconDefinition | null>(null);
// //   const [selectedDate, setSelectedDate] = useState(null);
// //   // const [dateOfBirth, setDateOfBirth] = useState(null);
// //   const [country, setCountry] = useState("");
// //   const [province, setProvince] = useState("");
// //   const [city, setCity] = useState("");
// //   const [gender, setGender] = useState("");
// //   const [address, setAddress] = useState("");

// //   const [showEditButton, setShowEditButton] = useState(false);
// //   const [editMode, setEditMode] = useState(true);

// //   const [isFormValid, setIsFormValid] = useState(true);
// //   const [firstNameError, setFirstNameError] = useState("");
// //   const [lastNameError, setLastNameError] = useState("");
// //   const [usernameError, setUsernameError] = useState("");
// //   const [emailError, setEmailError] = useState("");
// //   const [dateOfBirthError, setDateOfBirthError] = useState("");
// //   const [isNationalityFormValid, setIsNationalityFormValid] = useState(true);
// //   const [countryError, setCountryError] = useState("");
// //   const [provinceError, setProvinceError] = useState("");
// //   const [cityError, setCityError] = useState("");
// //   const [phoneNumberError, setPhoneNumberError] = useState("");

// //   useEffect(() => {
// //     // Fetch country data from REST Countries API
// //     axios
// //       .get("https://restcountries.com/v2/all")
// //       .then((response) => {
// //         // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //         const codes = response.data.map((country: any) => ({
// //           code: `+${country.callingCodes[0]}`,
// //           country: country.name,
// //         }));
// //         setCountryCodes(codes);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching country data:", error);
// //       });
// //   }, []);

// //   const handleIconClick = (icon: IconDefinition | null) => {
// //     setSelectedIcon((prevIcon) => (prevIcon === icon ? null : icon));
// //   };

// //   const handleSocialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     setAccount(event.target.value);
// //   };

// //   const handleCountryChange = (event: any, field: string) => {
// //     const selectedValue = event.target.value as string;
// //     if (field === "phoneNumber") {
// //       setSelectedCountry(selectedValue);
// //     }
// //   };

// //   const formatPhoneNumber = (value: string) => {
// //     if (!value) return value;

// //     // Remove all non-digit characters
// //     const cleanValue = value.replace(/\D/g, "");

// //     // Apply formatting
// //     const formattedValue =
// //       cleanValue.length > 6
// //         ? `${cleanValue.slice(0, 3)}-${cleanValue.slice(
// //             3,
// //             7
// //           )}-${cleanValue.slice(7, 10)}${cleanValue.slice(10)}`
// //         : cleanValue;

// //     return formattedValue;
// //   };

// //   const handleSaveAndProceed = () => {
// //     if (
// //       !firstName ||
// //       !lastName ||
// //       !username ||
// //       !email ||
// //       !countryCodes ||
// //       !selectedPhoneNumber ||
// //       !selectedCountry
// //     ) {
// //       alert("Please fill in all required fields.");
// //       return;
// //     }

// //     // Check if the nationality form is valid
// //     const isNationalityValid = validateNationalityForm();
// //     setIsNationalityFormValid(isNationalityValid);
// //     if (!isNationalityValid) {
// //       alert("Please fill in all required fields in the Nationality section.");
// //       return;
// //     }
// //     setIsFormValid(true);
// //     setShowEditButton(true);
// //     setEditMode(false);
// //   };

// //   const validateNationalityForm = () => {
// //     const countryValid = country.trim() !== "";
// //     const provinceValid = province.trim() !== "";
// //     const cityValid = city.trim() !== "";

// //     setCountryError(countryValid ? "" : "Country is required");
// //     setProvinceError(provinceValid ? "" : "State / Province is required");
// //     setCityError(cityValid ? "" : "City / District is required");

// //     return countryValid && provinceValid && cityValid;
// //   };

// //   const handleEditClick = () => {
// //     setEditMode(true);
// //   };

// //   const handlePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     const newPhoneNumber = event.target.value;
// //     setPhoneNumberError(newPhoneNumber ? "" : "Phone number is required");
// //     setSelectedPhoneNumber(newPhoneNumber);
// //   };

// //   const handleFirstNameChange = (
// //     event: React.ChangeEvent<HTMLInputElement>
// //   ) => {
// //     const newFirstName = event.target.value;
// //     setFirstNameError(newFirstName ? "" : "First Name is required");
// //     setFirstName(newFirstName);
// //   };

// //   const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     const newLastName = event.target.value;
// //     setLastName(newLastName);
// //     setLastNameError(newLastName ? "" : "Last Name is required");
// //   };

// //   const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     const newUsername = event.target.value;
// //     setUsername(newUsername);
// //     setUsernameError(newUsername ? "" : "Username is required");
// //   };

// //   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     const newEmail = event.target.value;
// //     setEmail(newEmail);
// //     setEmailError(newEmail ? "" : "Email is required");
// //   };

// //   const handleNationalityChange = (
// //     event: React.ChangeEvent<HTMLInputElement>
// //   ) => {
// //     const { name, value } = event.target;
// //     if (name === "country") setCountry(value);
// //     else if (name === "province") setProvince(value);
// //     else if (name === "city") setCity(value);
// //   };

// //   const handleGenderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
// //     const value = event.target.value as string;
// //     setGender(value);
// //   };

// //   const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     setAddress(event.target.value);
// //   };

// //   // const handleDateOfBirthChange = (date) => {
// //   //   if (!date) {
// //   //     setDateOfBirthError("Date of Birth is required");
// //   //   } else {
// //   //     setDateOfBirthError("");
// //   //   }
// //   //   setDateOfBirth(date);
// //   // };

// //   const classes = useStyles();
// //   const classes2 = useStyles2();

// //   return (
// //     <div>
// //       {/* FirstName / LastName Section */}
// //       <div className={classes.container}>
// //         {/* First Name input */}
// //         <Box component="form">
// //           <label>First Name *</label>
// //           <TextField
// //             id="firstname"
// //             variant="outlined"
// //             className={`${classes.input} ${editMode ? '' : classes.nonEditable}`}
// //             onChange={handleFirstNameChange}
// //             value={firstName}
// //             error={!!firstNameError}
// //             InputProps={{ readOnly: !editMode }}
// //           />
// //           <div style={{ color: "red", fontSize: "10px" }}>{firstNameError}</div>
// //         </Box>

// //         {/* Last Name input */}
// //         <Box component="form">
// //           <label>Last Name *</label>
// //           <TextField
// //             id="lastname"
// //             variant="outlined"
// //             className={`${classes.input} ${editMode ? '' : classes.nonEditable}`}
// //             onChange={handleLastNameChange}
// //             value={lastName}
// //             error={!!lastNameError}
// //             InputProps={{ readOnly: !editMode }}
// //           />
// //           <div style={{ color: "red", fontSize: "10px" }}>{lastNameError}</div>
// //         </Box>

// //         {/* Edit button */}
// //         <Box
// //           className={classes.addBox}
// //           style={{ display: showEditButton ? "block" : "none" }}
// //           onClick={handleEditClick}
// //         >
// //           Edit
// //         </Box>
// //       </div>
// //       <Divider style={{ margin: "10px 0 20px" }} />

// //       {/* Username Section */}
// //       <div>
// //         <div className={classes.container}>
// //           <Box component="form">
// //             <label>Username</label>
// //             <TextField
// //               id="username"
// //               variant="outlined"
// //               className={`${classes.input} ${
// //                 editMode ? "" : classes.nonEditable
// //               }`}
// //               onChange={handleUsernameChange}
// //               value={username}
// //               error={!!usernameError}
// //               InputProps={{ readOnly: !editMode }}
// //             />
// //             <div style={{ color: "red", fontSize: "10px" }}>
// //               {usernameError}
// //             </div>
// //           </Box>

// //           <Box
// //             className={classes.addBox}
// //             style={{ display: showEditButton ? "block" : "none" }}
// //             onClick={handleEditClick}
// //           >
// //             Edit
// //           </Box>
// //         </div>
// //         <Divider style={{ margin: "10px 0 20px" }} />
// //       </div>

// //       {/* Email Section */}
// //       <div>
// //         <div className={classes.container}>
// //           <Box component="form">
// //             <label>Email</label>
// //             <TextField
// //               id="email"
// //               variant="outlined"
// //               className={`${classes.input} ${
// //                 editMode ? "" : classes.nonEditable
// //               }`}
// //               onChange={handleEmailChange}
// //               value={email}
// //               error={!!emailError}
// //               InputProps={{ readOnly: !editMode }}
// //             />
// //           </Box>
// //           <div style={{ color: "red", fontSize: "10px" }}>{emailError}</div>
// //           <Box
// //             className={classes.addBox}
// //             style={{ display: showEditButton ? "block" : "none" }}
// //             onClick={handleEditClick}
// //           >
// //             Edit
// //           </Box>{" "}
// //         </div>
// //         <Divider style={{ margin: "10px 0 20px" }} />
// //       </div>

// //       {/* Phone Number Section */}
// //       <div>
// //         <div className={classes.container}>
// //           <Grid item xs={4}>
// //             <Typography>Country Code</Typography>
// //             <FormControl fullWidth variant="outlined">
// //               {/* <InputLabel id="countryCode">Country Code</InputLabel> */}
// //               <Select
// //                 id="countryCode"
// //                 value={selectedCountry}
// //                 onChange={(event) => handleCountryChange(event, "phoneNumber")}
// //                 label="Country Code"
// //                 style={{ height: "52px", marginTop: "5px" }}
// //               >
// //                 {countryCodes.map((country) => (
// //                   <MenuItem key={country.code} value={country.code}>
// //                     {`${country.country} (${country.code})`}
// //                   </MenuItem>
// //                 ))}
// //               </Select>
// //             </FormControl>
// //           </Grid>
// //           <Grid item xs={6}>
// //             <Typography>Telephone number</Typography>
// //             <TextField
// //               id="telephone"
// //               variant="outlined"
// //               fullWidth
// //               placeholder="081-8484-009"
// //               inputProps={{
// //                 readOnly: !editMode,
// //                 maxLength: 14,
// //                 pattern: "[0-9]*",
// //                 value: formatPhoneNumber(selectedPhoneNumber),
// //                 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// //                 // @ts-ignore
// //                 onChange: handlePhoneNumber,
// //               }}
// //             />
// //             <div style={{ color: "red", fontSize: "10px" }}>
// //               {phoneNumberError}
// //             </div>
// //           </Grid>
// //           <Box
// //             className={classes.addBox}
// //             style={{ display: showEditButton ? "block" : "none" }}
// //             onClick={handleEditClick}
// //           >
// //             Edit
// //           </Box>{" "}
// //         </div>
// //         <Divider style={{ margin: "10px 0 20px" }} />
// //       </div>

// //       {/* Social Media Section */}
// //       <div>
// //         <div className={classes2.container}>
// //           <div>
// //             <p className={classes2.heading}>Social media handle</p>
// //             <div className={classes2.socialMediaBox}>
// //               <p className={classes2.socialMediaLabel}>Social Media</p>
// //               <p className={classes2.socialMediaNote}>
// //                 Please select a social media handle
// //               </p>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   gap: "10px",
// //                   justifyContent: "center",
// //                   alignItems: "center",
// //                   marginBottom: "8px",
// //                 }}
// //               >
// //                 {socialMediaIcons.map((item, index) => (
// //                   <FontAwesomeIcon
// //                     key={index}
// //                     icon={item.icon}
// //                     size="2x"
// //                     className={classes2.icon}
// //                     style={{
// //                       color: selectedIcon === item.icon ? item.color : "black",
// //                     }}
// //                     onClick={() => handleIconClick(item.icon)}
// //                   />
// //                 ))}
// //               </div>
// //               <Box component="form">
// //                 <label style={{ textAlign: "left" }}>
// //                   {selectedIcon ? (
// //                     <FontAwesomeIcon
// //                       icon={selectedIcon}
// //                       size="1x"
// //                       color="green"
// //                       style={{ marginRight: "5px" }}
// //                     />
// //                   ) : null}
// //                   Username
// //                 </label>
// //                 <TextField
// //                   id="account"
// //                   variant="outlined"
// //                   placeholder="@grifindorr"
// //                   sx={{ backgroundColor: "#F5F5F5" }}
// //                   onChange={handleSocialChange}
// //                   value={account}
// //                 />
// //               </Box>
// //             </div>
// //           </div>
// //           {/* <Box
// //             className={classes.addBox}
// //             style={{ display: showEditButton ? "block" : "none" }}
// //             onClick={handleEditClick}
// //           >
// //             Edit
// //           </Box>{" "} */}
// //         </div>
// //         <Divider style={{ margin: "10px 0 0" }} />
// //       </div>

// //       {/* Date of Birth Section */}
// //       <div>
// //         <div
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //           }}
// //         >
// //           <div>
// //             <p
// //               style={{
// //                 fontFamily: "raleway, sans-serif",
// //                 fontSize: "16px",
// //                 fontWeight: "500",
// //                 margin: "33px 0 0",
// //               }}
// //             >
// //               Date of birth
// //             </p>
// //             <LocalizationProvider dateAdapter={AdapterDayjs}>
// //               <DatePicker
// //                 value={selectedDate}
// //                 onChange={setSelectedDate}
// //                 onError={(error) => {
// //                   setDateOfBirthError(error ? "Date of Birth is required" : "");
// //                 }}
// //               />
// //             </LocalizationProvider>
// //             <div style={{ color: "red", fontSize: "10px" }}>
// //               {dateOfBirthError}
// //             </div>
// //           </div>
// //           <Box
// //             className={classes.addBox}
// //             style={{ display: showEditButton ? "block" : "none" }}
// //             onClick={handleEditClick}
// //           >
// //             Edit
// //           </Box>{" "}
// //         </div>
// //         <Divider style={{ margin: "10px 0" }} />
// //       </div>

// //       {/* Nationality Seciton */}
// //       <div>
// //         <div
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //           }}
// //         >
// //           <div>
// //             <p
// //               style={{
// //                 fontFamily: "raleway, sans-serif",
// //                 fontSize: "16px",
// //                 fontWeight: "500",
// //                 margin: "33px 0 10px",
// //               }}
// //             >
// //               Nationality
// //             </p>
// //             <Box style={{ display: "flex", gap: "10px", alignItems: "center" }}>
// //               <TextField
// //                 name="country"
// //                 label="Country"
// //                 variant="outlined"
// //                 sx={{ backgroundColor: "#F5F5F5" }}
// //                 onChange={handleNationalityChange}
// //                 value={country}
// //                 error={!isNationalityFormValid || !!countryError}
// //                 helperText={
// //                   !isNationalityFormValid
// //                     ? "Please fill in all fields"
// //                     : countryError
// //                 }
// //                 InputProps={{ readOnly: !editMode }}
// //               />
// //               <div style={{ color: "red", fontSize: "10px" }}>
// //                 {countryError}
// //               </div>
// //               <TextField
// //                 name="province"
// //                 label="State / Province"
// //                 variant="outlined"
// //                 sx={{ backgroundColor: "#F5F5F5" }}
// //                 onChange={handleNationalityChange}
// //                 value={province}
// //                 error={!isNationalityFormValid || !!provinceError}
// //                 helperText={
// //                   !isNationalityFormValid
// //                     ? "Please fill in all fields"
// //                     : provinceError
// //                 }
// //                 InputProps={{ readOnly: !editMode }}
// //               />
// //               <div style={{ color: "red", fontSize: "10px" }}>
// //                 {provinceError}
// //               </div>
// //               <TextField
// //                 name="city"
// //                 label="City / District"
// //                 variant="outlined"
// //                 sx={{ backgroundColor: "#F5F5F5" }}
// //                 onChange={handleNationalityChange}
// //                 value={city}
// //                 error={!isNationalityFormValid || !!cityError}
// //                 helperText={
// //                   !isNationalityFormValid
// //                     ? "Please fill in all fields"
// //                     : cityError
// //                 }
// //                 InputProps={{ readOnly: !editMode }}
// //               />
// //               <div style={{ color: "red", fontSize: "10px" }}>{cityError}</div>
// //               <Box
// //                 className={classes.addBox}
// //                 style={{ display: showEditButton ? "block" : "none" }}
// //                 onClick={handleEditClick}
// //               >
// //                 Edit
// //               </Box>{" "}
// //             </Box>
// //           </div>
// //         </div>
// //         <Divider style={{ margin: "10px 0 20px" }} />
// //       </div>

// //       {/* Gender Section */}
// //       <div>
// //         <div
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //           }}
// //         >
// //           <div>
// //             <p
// //               style={{
// //                 fontFamily: "raleway, sans-serif",
// //                 fontSize: "16px",
// //                 fontWeight: "500",
// //                 margin: "33px 0 0",
// //               }}
// //             >
// //               Gender
// //             </p>
// //             <Box sx={{ minWidth: 120 }}>
// //               <FormControl fullWidth>
// //                 <Select
// //                   labelId="gender-label"
// //                   id="gender"
// //                   value={gender}
// //                   // label="Gender"
// //                   onChange={handleGenderChange}
// //                 >
// //                   <MenuItem value={1}>Male</MenuItem>
// //                   <MenuItem value={2}>Female</MenuItem>
// //                   <MenuItem value={3}>Other</MenuItem>
// //                 </Select>
// //               </FormControl>
// //             </Box>
// //           </div>
// //           <Box
// //             className={classes.addBox}
// //             style={{ display: showEditButton ? "block" : "none" }}
// //             onClick={handleEditClick}
// //           >
// //             Edit
// //           </Box>{" "}
// //         </div>
// //         <Divider style={{ margin: "10px 0 20px" }} />
// //       </div>

// //       {/* Address Section */}
// //       <div>
// //         <div
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //           }}
// //         >
// //           <div>
// //             <p
// //               style={{
// //                 fontFamily: "raleway, sans-serif",
// //                 fontSize: "16px",
// //                 fontWeight: "500",
// //                 margin: "33px 0 0",
// //               }}
// //             >
// //               Home Address
// //             </p>
// //             <Box component="form">
// //               <TextField
// //                 id="firstname"
// //                 variant="outlined"
// //                 sx={{ backgroundColor: "#F5F5F5", width: "150%" }}
// //                 onChange={handleAddressChange}
// //                 value={address}
// //               />
// //             </Box>
// //           </div>
// //           <Box
// //             className={classes.addBox}
// //             style={{ display: showEditButton ? "block" : "none" }}
// //             onClick={handleEditClick}
// //           >
// //             Edit
// //           </Box>{" "}
// //         </div>
// //         <Divider style={{ margin: "10px 0 20px" }} />
// //       </div>

// //       {/* Identification Section */}
// //       <ProfileIdentification />

// //       {/* Save and Proceed button */}
// //       <Button
// //         variant="outlined"
// //         onClick={handleSaveAndProceed}
// //         sx={{
// //           padding: "10px 20px",
// //           color: "black",
// //           border: "1px solid black",
// //           fontFamily: "volkhov, sans-serif",
// //           fontSize: "20px",
// //           fontWeight: "700",
// //           display: "flex",
// //           justifyContent: "center",
// //           alignItems: "center",
// //           gap: "10px",
// //           margin: "50px auto 0",
// //           borderRadius: "10px",
// //         }}
// //       >
// //         SAVE AND PROCEED {archiveIcon}
// //       </Button>
// //     </div>
// //   );
// // };

// // export default ProfileName;

// // const archiveIcon = (
// //   <svg
// //     xmlns="http://www.w3.org/2000/svg"
// //     width="25"
// //     height="25"
// //     viewBox="0 0 25 25"
// //     fill="none"
// //   >
// //     <path
// //       d="M17.3203 2.5H7.68031C5.55031 2.5 3.82031 4.24 3.82031 6.36V20.45C3.82031 22.25 5.11031 23.01 6.69031 22.14L11.5703 19.43C12.0903 19.14 12.9303 19.14 13.4403 19.43L18.3203 22.14C19.9003 23.02 21.1903 22.26 21.1903 20.45V6.36C21.1803 4.24 19.4503 2.5 17.3203 2.5Z"
// //       stroke="#263238"
// //       stroke-width="1.5"
// //       stroke-linecap="round"
// //       stroke-linejoin="round"
// //     />
// //     <path
// //       d="M10.0898 11.5L11.5898 13L15.5898 9"
// //       stroke="#263238"
// //       stroke-width="1.5"
// //       stroke-linecap="round"
// //       stroke-linejoin="round"
// //     />
// //   </svg>
// // );
