import {Divider} from 'antd';
import {Box} from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import * as React from 'react';

const ProfileAddress = () => {
  const [address, setAddress ] = useState("");

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
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
           Home Address
          </p>
          <Box component="form">
              <TextField
                id="firstname"
                variant="outlined"
                sx={{ backgroundColor: "#F5F5F5" }}
                onChange={handleAddressChange}
                value={address}
              />
            </Box>
        </div>

        <div
          style={{
            color: "red",
            fontWeight: "600",
            textDecoration: "underline",
          }}
        >
          Edit
        </div>
      </div>
      <Divider style={{ margin: "10px 0 20px" }} />
    </div>
  )
}

export default ProfileAddress