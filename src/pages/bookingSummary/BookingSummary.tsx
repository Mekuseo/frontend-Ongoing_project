import { Box, Button } from "@mui/material";
import Navbar from "../../component/HomePage/header/header";
import "./BookingSummary.css";
import GuestInformation from "./components/guestInformation/GuestInformation";
import HotelCheckout from "./components/hotelCheckout/HotelCheckout";
import MakePayment from "./components/makePayment/MakePayment";
import ReviewPayment from "./components/reviewPayment/ReviewPayment";

const BookingSummary = () => {
  return (
    <Box>
      <Navbar />
      <h1 className="bookingSummary-title">Booking Summary</h1>
      <Box
        sx={{
          display: "flex",
          height: "550px",
          justifyContent: "space-between",
          marginBottom: "35px",
        }}
      >
        <Box sx={{ width: "60%" }}>
          <GuestInformation />
        </Box>
        <Box sx={{ width: "35%" }}>
          <HotelCheckout />
        </Box>
      </Box>
      <MakePayment />
      <ReviewPayment />
      <Box sx={{ textAlign: "center", margin: "20px auto" }}>
        <Button
          sx={{
            background: "#263238",
            color: "#fff",
            width: "253px",
            height: "59px",
            borderRadius: "10px",
            fontFamily: "volkhov, sans-serif",
            fontSize: "20px",
            "&:hover": {
              backgroundColor: "#4CAF50",
            },
          }}
          fullWidth
        >
          BOOK NOW | N5,300
        </Button>
      </Box>
    </Box>
  );
};

export default BookingSummary;
