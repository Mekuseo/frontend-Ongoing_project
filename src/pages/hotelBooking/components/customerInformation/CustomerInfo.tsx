import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Select,
  FormControl,
  FormControlLabel,
  Checkbox,
  // SelectChangeEvent,
  // InputLabel,
} from "@mui/material";
import axios from "axios";

interface CustomerInfoProps {
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  userEmail: string;
  setUserEmail: (userEmail: string) => void;
  selectedPhoneNumber: string;
  setSelectedPhoneNumber: (selectedPhoneNumber: string) => void;
  selectedCountryCode: string;
  setSelectedCountryCode: (selectedCountryCode: string) => void;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  userEmail,
  setUserEmail,
  selectedPhoneNumber,
  setSelectedPhoneNumber,
  selectedCountryCode,
  setSelectedCountryCode,
}) => {
  const [countryCodes, setCountryCodes] = useState<
    { code: string; country: string }[]
  >([]);
  const [selectedWhatsAppCode, setSelectedWhatsAppCode] = useState("");
  const [selectedWhatsApp, setSelectedWhatsApp] = useState("");
  const [checked, setChecked] = useState(false);

  const handleRadioChange = () => {
    setFirstName("");
    setLastName("");
    setUserEmail("");
    setSelectedCountryCode("");
    setSelectedPhoneNumber("");
    setSelectedWhatsAppCode("");
    setSelectedWhatsApp("");
  };

  // const handleFirstNameChange = (event: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   const newValue =
  //     typeof event.target.value === "function"
  //       ? event.target.value(firstName) // Use the function to calculate the new state
  //       : event.target.value; // Use the direct new state value
  //   setFirstName(newValue);
  // };

  // const handleEmailChange = (event: {
  //   target: { value: SetStateAction<string> };
  // }) => {
  //   // setUserEmail(event.target.value);
  // };

  useEffect(() => {
    // Fetch country data from REST Countries API
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

  const handleCountryChange = (event: any, field: string) => {
    const selectedValue = event.target.value as string;
    if (field === "phoneNumber") {
      setSelectedCountryCode(selectedValue);
      // setSelectedPhoneNumber(selectedValue);
    } else if (field === "whatsApp") {
      setSelectedWhatsAppCode(selectedValue);
      // setSelectedWhatsApp(selectedValue);
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

  const handleChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setChecked(event.target.checked);
  };

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: "10px",
        border: "1px solid rgba(171,170,170,0.58)",
        background: "#fff",
        fontFamily: "Raleway, sans-serif",
        marginTop: "20px",
      }}
    >
      <Typography
        style={{
          fontFamily: "Raleway, sans-serif",
          fontSize: "30px",
          fontWeight: "700",
          marginBottom: "22px",
        }}
      >
        Customer information{" "}
        <span style={{ fontWeight: "400" }}>
          (fill in customer details correctly).
        </span>
      </Typography>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "17px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        <input type="radio" onChange={handleRadioChange} />
        <label>I’m booking for someone else</label>
      </div>
      <Grid container spacing={4} xs={8}>
        <Grid item xs={6}>
          <Typography>First Name</Typography>
          <TextField
            id="firstName"
            variant="outlined"
            fullWidth
            placeholder="Enter first name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Last Name/Surname</Typography>
          <TextField
            id="lastName"
            variant="outlined"
            fullWidth
            placeholder="Enter last name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Email Address</Typography>
          <TextField
            id="email"
            variant="outlined"
            fullWidth
            placeholder="Enter email"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Country Code</Typography>
          <FormControl fullWidth variant="outlined">
            {/* <InputLabel id="countryCode">Country Code</InputLabel> */}
            <Select
              id="countryCode"
              value={selectedCountryCode}
              onChange={(event) => handleCountryChange(event, "phoneNumber")}
              label="Country Code"
            >
              {countryCodes.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {`${country.country} (${country.code})`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <Typography>Telephone number</Typography>
          <TextField
            id="telephone"
            variant="outlined"
            fullWidth
            placeholder="081-8484-009"
            inputProps={{
              maxLength: 14,
              pattern: "[0-9]*",
              value: formatPhoneNumber(selectedPhoneNumber),
            }}
            onChange={(event) => setSelectedPhoneNumber(event.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Country Code</Typography>
          <FormControl fullWidth variant="outlined">
            <Select
              id="selectedWhatsAppCode"
              value={selectedWhatsAppCode}
              onChange={(event) => handleCountryChange(event, "whatsApp")}
              label="whatsApp Country Code"
            >
              {countryCodes.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {`${country.country} (${country.code})`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <Typography>WhatsApp number</Typography>
          <TextField
            id="WhatsApp"
            variant="outlined"
            fullWidth
            placeholder="081-8484-009"
            inputProps={{
              maxLength: 14,
              pattern: "[0-9]*",
              value: formatPhoneNumber(selectedWhatsApp),
            }}
            onChange={(event) => setSelectedWhatsApp(event.target.value)}
          />
        </Grid>
      </Grid>
      <FormControlLabel
        sx={{
          margin: "20px 0 0 0",
        }}
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            style={{
              color: "#6E9E76",
              borderRadius: "10px",
              width: "20px",
              height: "20px",
              padding: "0 20px 0 10px",
            }}
          />
        }
        label="Check this box if you like to receive special deals, promotional offers in your email from Thetravelhunters. "
      />
    </Box>
  );
};

export default CustomerInfo;
