import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import hotelImage from "../../../assets/pics/managelisting.jpeg";
import LocationIcon from "../../../svgs/LocationIcon";
import CalenderIcon from "../../../svgs/CalenderIcon";
import DoubleArrowRight from "../../../svgs/DoubleArrowRight";
import TelephoneIcon from "../../../svgs/TelephoneIcon";

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

interface SuccessfulCancellationProps {
  openSC: boolean;
  setOpenSC: (boolean: false) => void;
  handleClose: () => void;
}

const phoneNumber = '+234 703 060 1281';

const handlePhoneNumberClick = () => {
  window.location.href = `tel:${phoneNumber.replace(/ /g, '')}`;
};

const SuccessfulCancellation = ({
  openSC,
  setOpenSC,
  handleClose,
}: SuccessfulCancellationProps) => {

  const handleCloseSC = () => {
    setOpenSC(false);
    handleClose();
  }

  return (
    <div>
      <Modal
        open={openSC}
        onClose={handleCloseSC}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="cancelReservation-left">
            <div>
              <div>
                <div
                  style={{
                    fontFamily: "raleway, sans-serif",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#CF0007",
                  }}
                >
                  Fee
                </div>
                <div
                  style={{
                    fontFamily: "raleway, sans-serif",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  Your booking was cancelled for N200.00
                </div>
              </div>
            </div>
            <div className="SC-left-details">
              <div className="SC-left-details-flex">
                <DoubleArrowRight />
                <div>
                  We will send you an email confirming your cancellation{" "}
                  <span style={{ color: "blue" }}>XXX@gmail.com.</span>
                </div>
              </div>
              <div className="SC-left-details-flex">
                <div>
                  <DoubleArrowRight />
                </div>
                <div>
                  Your booking was successfully cancelled -{" "}
                  <span>
                    you will get a refund of N5000,00.00 sent to your credit
                    card/account.
                  </span>
                </div>
              </div>
              <div className="SC-left-details-flex">
                <div>
                  <DoubleArrowRight />
                </div>
                <div>
                  You might have been charged for all or part of your stay by
                  the property. Refunds take 5-7 business day.
                </div>
              </div>
            </div>
            <div className="SC-tel">
              <TelephoneIcon />
              <div onClick={handlePhoneNumberClick}>Need to talk with us?</div>
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
              className="SC-cancel"
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
            </div>
            <div className="SC-successful">Cancellation Successful</div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SuccessfulCancellation;
