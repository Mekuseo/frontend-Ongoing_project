import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";
import Character from "../../../../assets/pics/character.png";

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



export default function CongratulationsModal() {
  const [modalOpen, setModalOpen] = useState(false);

  // const handleOpen = () => {
  //   if (!open) return; // Don't open the modal if not allowed
  //   handleOpenForPassword
  //   handleSubmit();
  //   setModalOpen(true);
  // };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        // onClick={handleOpen}
        variant="contained"
        style={{
          backgroundColor: "#6E9E76",
          marginTop: "60px",
          marginLeft: "30%",
          padding: "25px, 35px",
          width: "200px",
          textTransform: "capitalize",
          height: "50px",
          borderRadius: "15px",
        }}
      >
        Continue
      </Button>

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 564, pt: 3 }}>
          <h2
            id="child-modal-title"
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            Congratulations
          </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={Character} alt="image" />
          </div>
          <p
            id="child-modal-description"
            style={{
              fontSize: "15px",
              fontFamily: "raleway, sans-serif",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Your password has been reset. Kindly go back to log in.
          </p>
          <Button
            onClick={handleClose}
            variant="contained"
            style={{
              backgroundColor: "#6E9E76",
              marginLeft: "30%",
              padding: "25px, 25px",
              width: "200px",
              textTransform: "capitalize",
              borderRadius: "10px",
              marginBottom: "15px",
            }}
          >
            Continue
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
