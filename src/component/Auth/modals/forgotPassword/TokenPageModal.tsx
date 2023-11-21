import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import VerificationModal from "./VerificationModal";
import { MuiOtpInput } from "mui-one-time-password-input";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 964,
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

export default function TokenPageModal() {
  const [open, setOpen] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [otp, setOtp] = useState(""); // State to hold the OTP value

  const handleChange = (newValue: React.SetStateAction<string>) => {
    setOtp(newValue); // Update the OTP value
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else {
      setCountdown(60);
    }

    return () => clearInterval(interval);
  }, [countdown]);

  // const handleVerify = () => {
  //   // Here you can send the 'otp' value to your backend for verification
  //   console.log("Verifying OTP:", otp);
  //   // Add your backend API call here
  // };

  return (
    <React.Fragment>
      <Button
        onClick={handleOpen}
        variant="contained"
        style={{
          backgroundColor: "#6E9E76",
          marginLeft: "25%",
          padding: "35px, 25px",
          width: "200px",
          height: "50px",
          textTransform: "capitalize",
          borderRadius: "10px",
          marginTop: "55px",
        }}
      >
        Send Link
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 564 }}>
          <h2
            id="child-modal-title"
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            You’re almost there!
          </h2>
          <p
            id="child-modal-description"
            style={{ fontSize: "15px", fontFamily: "raleway, sans-serif" }}
          >
            Please check your inbox for the verification code sent to you.{" "}
          </p>
          <p style={{ textAlign: "center" }}>Enter Code</p>
          <MuiOtpInput length={6} value={otp} onChange={handleChange} />
          <p
            style={{ textAlign: "right", fontSize: "10px", marginTop: "10px" }}
          >
            Resend code in: {countdown} secs
          </p>
          {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
          {/* <VerificationPage /> */}
          <p style={{ textAlign: "center" }}>
            Can’t find it? Check your spam folder
          </p>
          <VerificationModal />
        </Box>
      </Modal>
    </React.Fragment>
  );
}
