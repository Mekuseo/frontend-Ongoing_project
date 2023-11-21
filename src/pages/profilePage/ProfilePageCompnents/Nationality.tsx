import React from "react";
import { Box, Divider } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
    backgroundColor: "#F5F5F5",
    border: "1px solid #F5F5F5",
    borderRadius: "5px",
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
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

interface NationalityProps {
  handleNationalityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  country: string;
  isNationalityFormValid: boolean;
  countryError: string;
  editMode: boolean;
  province: string;
  provinceError: string;
  city: string;
  cityError: string;
  showEditButton: boolean;
  handleEditClick: () => void;
  hideDiv: boolean;
}

const Nationality = ({
  handleNationalityChange,
  country,
  isNationalityFormValid,
  countryError,
  editMode,
  province,
  provinceError,
  city,
  cityError,
  showEditButton,
  handleEditClick,
  hideDiv,
}: NationalityProps) => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <div>
          <p
            style={{
              fontFamily: "raleway, sans-serif",
              fontSize: "16px",
              fontWeight: "500",
              margin: "33px 0 10px",
            }}
          >
            Nationality
          </p>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div>
              <div className={!hideDiv ? "" : classes.hidden}>
                <TextField
                  name="country"
                  label="Country"
                  variant="outlined"
                  sx={{ backgroundColor: "#F5F5F5" }}
                  onChange={handleNationalityChange}
                  value={country}
                  error={!isNationalityFormValid || !!countryError}
                  helperText={
                    !isNationalityFormValid
                      ? "Please fill in all fields"
                      : countryError
                  }
                  InputProps={{ readOnly: !editMode }}
                />
              </div>
              <div
                style={{
                  display: hideDiv ? "" : "none",
                  fontFamily: "raleway, sans-serif",
                  fontSize: "14px",
                }}
              >
                {country}
              </div>
              <div style={{ color: "red", fontSize: "10px" }}>
                {countryError}
              </div>
            </div>
            <div>
              <div className={!hideDiv ? "" : classes.hidden}>
                <TextField
                  name="province"
                  label="State / Province"
                  variant="outlined"
                  sx={{ backgroundColor: "#F5F5F5" }}
                  value={province}
                  error={!isNationalityFormValid || !!provinceError}
                  helperText={
                    !isNationalityFormValid
                      ? "Please fill in all fields"
                      : provinceError
                  }
                  onChange={handleNationalityChange}
                />
              </div>
              <div style={{ display: hideDiv ? "" : "none" }}>{province}</div>
              <div style={{ color: "red", fontSize: "10px" }}>
                {provinceError}
              </div>
            </div>
            <div>
              <div className={!hideDiv ? "" : classes.hidden}>
                <TextField
                  name="city"
                  label="City / District"
                  variant="outlined"
                  sx={{ backgroundColor: "#F5F5F5" }}
                  value={city}
                  error={!isNationalityFormValid || !!cityError}
                  helperText={
                    !isNationalityFormValid
                      ? "Please fill in all fields"
                      : cityError
                  }
                  onChange={handleNationalityChange}
                />
              </div>
              <div style={{ display: hideDiv ? "" : "none" }}>{city}</div>
              <div style={{ color: "red", fontSize: "10px" }}>{cityError}</div>
            </div>
            <Box
              className={classes.addBox}
              style={{ display: showEditButton ? "block" : "none" }}
              onClick={handleEditClick}
            >
              Edit
            </Box>{" "}
          </Box>
        </div>
      </div>
      <Divider style={{ margin: "10px 0 20px" }} />
    </div>
  );
};

export default Nationality;
