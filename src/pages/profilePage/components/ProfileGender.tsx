import { Divider } from "antd";
import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ProfileGender = () => {
  const [gender, setGender] = React.useState("");

  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
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
              margin: "33px 0 0",
            }}
          >
            Gender
          </p>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <Select
                labelId="gender-label"
                id="gender"
                value={gender}
                // label="Gender"
                onChange={handleGenderChange}
              >
                <MenuItem value={1}>Male</MenuItem>
                <MenuItem value={2}>Female</MenuItem>
                <MenuItem value={3}>Other</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div
          style={{
            color: "red",
            fontWeight: "600",
            textDecoration: "underline",
          }}
        >
          Add
        </div>
      </div>
      <Divider style={{ margin: "10px 0 20px" }} />
    </div>
  );
};

export default ProfileGender;
