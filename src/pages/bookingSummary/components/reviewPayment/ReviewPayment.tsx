import { Box, Typography } from "@mui/material";
import Archive from "../../../../svgs/Archive";
import XCancel from "../../../../svgs/XCancel";
import CheckIn from "../../../../svgs/CheckIn";
import CheckOut from "../../../../svgs/CheckOut";

const ReviewPayment = () => {
  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: "10px",
        border: "1px solid rgba(171,170,170,0.58)",
        background: "#fff",
        fontFamily: "Raleway, sans-serif",
        margin: "15px auto",
      }}
    >
      <Typography
        variant="h4"
        fontFamily="Raleway, sans-serif"
        fontWeight="700"
        marginBottom="10px"
      >
        Reviews and Payment
      </Typography>
      <Box
        sx={{
          display: "flex"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "15px",
          }}
        >
          <Archive />
          <XCancel />
          <CheckIn />
          <CheckOut />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="subtitle2">All bookings are final.</Typography>
          <Typography variant="subtitle2">
            No refund and cancellation.
          </Typography>
          <Typography variant="subtitle2">
            Guests can check-in once booking is confirmed.
          </Typography>
          <Typography variant="subtitle2">
            Hotel check-out ime applies t 14:00 GMT
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewPayment;
