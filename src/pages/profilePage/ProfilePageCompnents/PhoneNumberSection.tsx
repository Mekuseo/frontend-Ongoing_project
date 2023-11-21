import {
  Box,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginBottom: "15px",
    fontfamily: "raleway, sans-serif",
    fontSize: "18px",
    fontWeight: 500,
  },
  addBox: {
    color: "red",
    fontWeight: 500,
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer",
    },
  },
  input: {
    backgroundColor: "#F5F5F5", // Default background color
    border: "1px solid #F5F5F5", // Default border
    borderRadius: "5px",
    "& .MuiInput-underline:before": {
      borderBottom: "none", // Remove the underline
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none", // Remove the underline after interaction
    },
    "& .MuiInput-input": {
      padding: "5px",
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: "raleway, sans-serif",
    },
  },
  nonEditable: {
    backgroundColor: "transparent",
    border: "none",
    pointerEvents: "none",
  },
  hidden: {
    display: "none",
  },
});

interface PhoneNumberSectionProps {
  selectedCountry: string;
  handleCountryChange: (
    event: React.ChangeEvent<{ value: unknown }>,
    type: string
  ) => void;
  countryCodes: { code: string; country: string }[];
  editMode: boolean;
  selectedPhoneNumber: string;
  formatPhoneNumber: (phoneNumber: string) => string;
  phoneNumberError: string;
  showEditButton: boolean;
  handleEditClick: () => void;
  handlePhoneNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hideDiv: boolean;
  onCountryCodeSelect: (code: string) => void;
  selectedCountryCode: string;
}

const PhoneNumberSection = ({
  selectedCountry,
  handleCountryChange,
  countryCodes,
  editMode,
  selectedPhoneNumber,
  formatPhoneNumber,
  phoneNumberError,
  showEditButton,
  handleEditClick,
  handlePhoneNumber,
  hideDiv,
  onCountryCodeSelect,
}: PhoneNumberSectionProps) => {
  
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <Grid item xs={3} className={!hideDiv ? "" : classes.hidden}>
          <Typography style={{ fontWeight: "500" }}>Country Code</Typography>
          <FormControl fullWidth variant="outlined">
            {/* <InputLabel id="countryCode">Country Code</InputLabel> */}
            <Select
              variant="outlined"
              id="countryCode"
              value={selectedCountry}
              onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                handleCountryChange(event, "phoneNumber");
                onCountryCodeSelect(event.target.value as string);
              }}
              label="Country Code"
              style={{ height: "52px", marginTop: "5px" }}
            >
              {countryCodes.map((country, index) => (
                <MenuItem key={`${country.code}-${index}`} value={country.code}>
                  {`${country.country} (${country.code})`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} style={{ position: "relative" }}>
          <Typography style={{ fontWeight: "500" }}>
            Telephone number
          </Typography>
          <div className={!hideDiv ? "" : classes.hidden}>
            <TextField
              id="telephone"
              variant="outlined"
              fullWidth
              placeholder="81-8484-009"
              inputProps={{
                readOnly: !editMode,
                maxLength: 14,
                pattern: "[0-9]*",
                value: formatPhoneNumber(selectedPhoneNumber),
                onChange: handlePhoneNumber,
              }}
            />
          </div>
          <div
            style={{
              display: hideDiv ? "" : "none",
              fontFamily: "raleway, sans-serif",
              fontSize: "14px",
            }}
          >
            {selectedCountry && (
              <span style={{ marginRight: "5px" }}>{selectedCountry} -</span>
            )}
            {formatPhoneNumber(selectedPhoneNumber)}
          </div>

          <div
            style={{
              color: "red",
              fontSize: "10px",
              position: "absolute",
              top: "60px",
            }}
          >
            {phoneNumberError}
          </div>
        </Grid>
        <Box
          className={classes.addBox}
          style={{ display: showEditButton ? "block" : "none" }}
          onClick={handleEditClick}
        >
          Edit
        </Box>{" "}
      </div>
      <Divider style={{ margin: "10px 0 20px" }} />
    </div>
  );
};

export default PhoneNumberSection;
