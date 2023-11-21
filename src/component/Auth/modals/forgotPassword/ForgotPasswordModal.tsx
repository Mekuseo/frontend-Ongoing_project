import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import TokenPageModal from "./TokenPageModal";

interface ForgotPasswordProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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

export default function ForgotPasswordModal({ setOpen }: ForgotPasswordProps) {
  const [email, setEmail] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState<boolean | null>(null);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    // Email validation regex
    const emailRegex = /^\S+@\S+\.\S+$/;

    setIsEmailValid(emailRegex.test(inputEmail));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 564 }}>
          <h2
            id="parent-modal-title"
            style={{
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            Forgot your password?
          </h2>
          <p
            id="parent-modal-description"
            style={{ fontSize: "15px", fontFamily: "raleway, sans-serif" }}
          >
            No problem, please enter your email address and we will send you a
            code.
          </p>
          <h2
            id="parent-modal-title"
            style={{
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            Email address
          </h2>
          <TextField
            id="input-with-icon-textfield"
            // label="TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{emailIcon}</InputAdornment>
              ),
            }}
            variant="outlined"
            placeholder="Email"
            style={{
              width: "100%",
              backgroundColor: "rgba(209, 209, 209, 0.35)",
            }}
            value={email}
            onChange={handleEmailChange}
            error={email !== "" && !isEmailValid}
            helperText={
              email !== "" && !isEmailValid
                ? "Please enter a valid email address"
                : ""
            }
          />
          {isEmailValid && <TokenPageModal />}
        </Box>
      </Modal>
    </div>
  );
}

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
