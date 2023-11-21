import { useEffect, useState } from "react";
import {
  Box,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import axios from "axios";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontFamily: "raleway, sans-serif",
    fontSize: "16px",
    fontWeight: 500,
    margin: "33px 0 0",
  },
  input: {
    fontFamily: "raleway, sans-serif",
    fontSize: "14px",
  },
  addBox: {
    color: "red",
    fontWeight: 600,
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const ProfileNumber = () => {
  const [countryCodes, setCountryCodes] = useState<
    { code: string; country: string }[]
  >([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState<string>("");
  const classes = useStyles();

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

  return (
    <div>
      <div className={classes.container}>
        <Grid item xs={4}>
          <Typography>Country Code</Typography>
          <FormControl fullWidth variant="outlined">
            {/* <InputLabel id="countryCode">Country Code</InputLabel> */}
            <Select
              id="countryCode"
              value={selectedCountry}
              onChange={(event) => handleCountryChange(event, "phoneNumber")}
              label="Country Code"
              style={{height:"52px", marginTop:"5px"}}
            >
              {countryCodes.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {`${country.country} (${country.code})`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
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
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              onChange: (event) => setSelectedPhoneNumber(event.target.value),
            }}
          />
        </Grid>

        <Box className={classes.addBox}>Edit</Box>
      </div>
      <Divider style={{ margin: "10px 0 20px" }} />
    </div>
  );
};

export default ProfileNumber;
