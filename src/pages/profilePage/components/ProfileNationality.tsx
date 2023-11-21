import { Divider } from "antd";
import { Box } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import * as React from "react";

const ProfileNationality = () => {
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const handleProvinceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProvince(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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
          <Box style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Box component="form">
              <TextField
                id="firstname"
                variant="outlined"
                label="Country"
                sx={{ backgroundColor: "#F5F5F5" }}
                onChange={handleCountryChange}
                value={country}
              />
            </Box>

            <Box component="form">
              <TextField
                id="lastname"
                variant="outlined"
                label="State / Province"
                sx={{ backgroundColor: "#F5F5F5" }}
                onChange={handleProvinceChange}
                value={province}
              />
            </Box>

            <Box component="form">
              <TextField
                id="lastname"
                label="City / District"
                variant="outlined"
                sx={{ backgroundColor: "#F5F5F5" }}
                onChange={handleCityChange}
                value={city}
              />
            </Box>
            <div
              style={{
                color: "red",
                fontWeight: "600",
                textDecoration: "underline",
              }}
            >
              Edit
            </div>
          </Box>
        </div>
      </div>
      <Divider style={{ margin: "10px 0 20px" }} />
    </div>
  );
};

export default ProfileNationality;
