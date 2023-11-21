import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import CongratulationsModal from "./CongratulationsModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 564,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  fontFamily: "raleway, sans-serif",
  borderRadius: "15px",
  boxShadow: 24,
  pt: 12,
  px: 8,
  pb: 3,
};

const VerificationPage = () => {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);
  // const [, setPassword] = useState("");
  // const [, setConfirmPassword] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowVerifyPassword = () =>
    setShowVerifyPassword((show) => !show);

  // const handlePasswordChange = (event: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   setPassword(event.target.value);
  // };

  // const handleConfirmPasswordChange = (event: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   // setConfirmPassword(event.target.value);
  // };

  // const handleVerifyPassword = () => {
  //   // Your validation logic here
  //   if (password.length < 8) {
  //     alert("Password should be at least 8 characters.");
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     alert("Passwords do not match.");
  //     return;
  //   }

  //   // Password is valid and matches confirmation
  //   handleClose();
  // };

  return (
    <React.Fragment>
      <Button
        onClick={handleOpen}
        variant="contained"
        style={{
          backgroundColor: "#6E9E76",
          marginLeft: "30%",
          padding: "25px 25px",
          width: "200px",
          textTransform: "capitalize",
          borderRadius: "10px",
          marginBottom: "15px",
          height: "50px",
        }}
      >
        Verify
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, px: 8, py: 6 }}>
          <h2
            id="child-modal-title"
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            One final step!
          </h2>
          <p
            id="child-modal-description"
            style={{ fontSize: "15px", fontFamily: "raleway, sans-serif" }}
          >
            Your password has almost been reset. Please input a new password.
          </p>
          <p style={{ textAlign: "center" }}>Enter new password</p>
          <TextField
            placeholder="New Password"
            type={showPassword ? "text" : "password"}
            // onChange={handlePasswordChange}
            InputProps={{
              startAdornment: <IconButton edge="start">{emailIcon}</IconButton>,
              endAdornment: (
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
            fullWidth
            variant="outlined"
            style={{ margin: "10px 0" }}
            label="Password"
          />
          <TextField
            placeholder="Confirm Password"
            type={showVerifyPassword ? "text" : "password"}
            // onChange={handleConfirmPasswordChange}
            InputProps={{
              startAdornment: <IconButton edge="start">{emailIcon}</IconButton>,
              endAdornment: (
                <IconButton onClick={handleClickShowVerifyPassword} edge="end">
                  {showVerifyPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
            fullWidth
            variant="outlined"
            style={{ margin: "10px 0" }}
            label="Confirm Password"
          />
          {/* <CongratulationsModal /> */}
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default VerificationPage;

const emailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M22.667 27.3333H9.33366C5.33366 27.3333 2.66699 25.3333 2.66699 20.6666V11.3333C2.66699 6.66663 5.33366 4.66663 9.33366 4.66663H22.667C26.667 4.66663 29.3337 6.66663 29.3337 11.3333V20.6666C29.3337 25.3333 26.667 27.3333 22.667 27.3333Z"
      stroke="#5F5E5E"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.6663 12L18.493 15.3333C17.1197 16.4267 14.8663 16.4267 13.493 15.3333L9.33301 12"
      stroke="#5F5E5E"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
