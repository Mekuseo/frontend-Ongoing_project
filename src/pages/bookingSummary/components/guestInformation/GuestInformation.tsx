import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Select,
  FormControl,
  // SelectChangeEvent,
  // InputLabel,
} from "@mui/material";
import axios from "axios";

const GuestInformation = () => {
  const [countryCodes, setCountryCodes] = useState<
    { code: string; country: string }[]
  >([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState<string>("");
  const [selectedWhatsAppCode, setSelectedWhatsAppCode] = useState<string>("");
  const [selectedWhatsApp, setSelectedWhatsApp] = useState<string>("");

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCountryChange = (event: any, field: string) => {
    const selectedValue = event.target.value as string;
    if (field === "phoneNumber") {
      setSelectedCountry(selectedValue);
      setSelectedPhoneNumber(selectedValue); // Set selectedPhoneNumber based on selected country code
    } else if (field === "whatsApp") {
      setSelectedWhatsAppCode(selectedValue);
      setSelectedWhatsApp(selectedValue); // Set selectedWhatsApp based on selected WhatsApp country code
    }
  };

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
  
    // Remove all non-digit characters
    const cleanValue = value.replace(/\D/g, "");
  
    // Apply formatting
    const formattedValue =
      cleanValue.length > 6
        ? `${cleanValue.slice(0, 3)}-${cleanValue.slice(3, 6)}-${cleanValue.slice(6, 10)}-${cleanValue.slice(10)}`
        : cleanValue;
  
    return formattedValue;
  };
  

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: "10px",
        border: "1px solid rgba(171,170,170,0.58)",
        background: "#fff",
        fontFamily: "Raleway, sans-serif",
      }}
    >
      <div style={{display: "flex", gap: "10px", marginBottom: "17px", fontWeight: '700', fontSize:"20px"}}>
        <input type="radio" />
        <label>I’m booking for someone else </label>
      </div>
      <Typography
        variant="h4"
        marginBottom="8px"
        fontWeight="600"
        fontFamily="Raleway"
      >
        Guests Information
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Typography>First Name</Typography>
          <TextField
            id="firstName"
            // label="First Name"
            variant="outlined"
            fullWidth
            placeholder="Enter first name"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Last Name/Surname</Typography>
          <TextField
            id="lastName"
            // label="Last Name"
            variant="outlined"
            fullWidth
            placeholder="Enter last name"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Email Address</Typography>
          <TextField
            id="email"
            // label="Email Address"
            variant="outlined"
            fullWidth
            placeholder="Enter email"
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Country Code</Typography>
          <FormControl fullWidth variant="outlined">
            {/* <InputLabel id="countryCode">Country Code</InputLabel> */}
            <Select
              id="countryCode"
              value={selectedCountry}
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
            placeholder="Enter telephone number"
            inputProps={{
              maxLength: 14,
              pattern: "[0-9]*",
              value: formatPhoneNumber(selectedPhoneNumber),
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              onChange: (event) => setSelectedPhoneNumber(event.target.value),
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Country Code</Typography>
          <FormControl fullWidth variant="outlined">
            {/* <InputLabel id="countryCode">Country Code</InputLabel> */}
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
            placeholder="Enter WhatsApp Number"
            inputProps={{
              maxLength: 14,
              pattern: "[0-9]*",
              value: formatPhoneNumber(selectedWhatsApp),
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              onChange: (event) => setSelectedWhatsApp(event.target.value),
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GuestInformation;
