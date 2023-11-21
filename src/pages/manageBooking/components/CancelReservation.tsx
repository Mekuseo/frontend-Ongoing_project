import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import GoBackArrow from "../../../svgs/GoBackArrow";
import CancelReasonDrop from "./CancelReasonDrop";
import hotelImage from "../../../assets/pics/managelisting.jpeg";
import LocationIcon from "../../../svgs/LocationIcon";
import CalenderIcon from "../../../svgs/CalenderIcon";
import { useState } from "react";
import ConfirmCancelReservation from "./ConfirmCancelReservation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "958px",
  transform: "translate(-50%, -50%)",
  bgcolor: "#FAFAFA",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
  display: "flex",
  justifyContent: "space-between",
};

interface CancelReservationProps {
  setOpen: (open: boolean) => void;
  open: boolean;
  handleOpen: () => void;
}

const CancelReservation = ({ setOpen, open }: CancelReservationProps) => {
  const [openCCR, setOpenCCR] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpenCCR = () => setOpenCCR(true);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="cancelReservation-left">
            <div>
              <div className="cancelReservation-title">
                <div className="CR-backArrow" onClick={handleClose}>
                  <GoBackArrow />
                </div>
                <p>Cancel Reservation</p>
              </div>
              <div>
                <CancelReasonDrop />
              </div>
            </div>
            <div className="cancelBooking-btn">
              <button onClick={handleOpenCCR}>Cancel booking</button>
              <button onClick={handleClose}>Keep this booking</button>
            </div>
          </div>

          <div className="cancelReservation-right">
            <img src={hotelImage} alt="hotel Image" />
            <div
              style={{
                padding: "5px 15px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <h1>Transcorp Hilton</h1>
              <div>
                <div className="cancelReservation-location">
                  <LocationIcon />
                  <div className="CR-location">Wuse,Abuja. Nigeria</div>
                </div>
                <div className="cancelReservation-location">
                  <CalenderIcon />
                  <div className="CR-date">10th September - 15th September</div>
                </div>
              </div>
              <div className="cancelReservation-fee">
                <div>
                  <div className="CR-feeStyle">Your booking</div>
                  <div className="CR-feeStyle">Cancellation fee</div>
                  <div className="CR-feeTotal">You will be charged</div>
                </div>
                <div>
                  <div className="CR-feeStyle">N15,000.00</div>
                  <div className="CR-feeStyle">200</div>
                  <div className="CR-feeTotal">200.00</div>
                </div>
              </div>
              <div className="CR-about">
                <div>About</div>
                <div>
                  You can cancel for free until 8 hrs before the <br />
                  day of arrival. Cancellation stops 6pm n the day <br /> of
                  arrival. If you don’t show up, the no-show fee <br /> will be
                  the same as the cancellation fee
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      {openCCR ? (
        <ConfirmCancelReservation
          setOpenCCR={setOpenCCR}
          openCCR={openCCR}
          handleClose={handleClose}
        />
      ) : null}
    </div>
  );
};

export default CancelReservation;
