import "./HotelCheckout.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import roomImage from "../../../../assets/pics/unsplash17.jpg";

const HotelCheckout = () => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
        background: "#fff",
      }}
    >
      <img
        src={roomImage}
        alt="Transcorp Hilton"
        style={{
          width: "100%",
          height: "159px",
          objectFit: "cover",
          borderRadius: "10px 10px 0 0",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "15px 26px",
          gap: "5px",
        }}
      >
        <Typography variant="h4" fontFamily={"Volkhov"} fontWeight="700">
          Transcorp Hilton
        </Typography>
        <Typography variant="subtitle2" fontFamily={"Raleway"}>
          2, Aminu Kano Crescent, Wuse II, Abuja.
        </Typography>
        <Typography fontFamily={"Raleway"}>Room name: Ahmed room</Typography>
        <Typography fontFamily={"Raleway"}>Room type: Classic room</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography fontFamily={"Raleway"}>Room: 1</Typography>
          <Typography fontFamily={"Raleway"}>Accommodates: 2 people</Typography>
        </Box>

        <Divider sx={{ width: "100%", marginTop: "10px", background: "#263238" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <div>
            <Typography variant="subtitle1" fontFamily={"Raleway"}>Check-In</Typography>
            <Typography fontFamily={"Raleway"} fontWeight="700">Tue, April 10</Typography>
            <Typography fontFamily={"Raleway"}>14:00/2:00 PM</Typography>
          </div>
          <div>
            <Typography variant="subtitle1" fontFamily={"Raleway"}>Check-Out</Typography>
            <Typography fontFamily={"Raleway"} fontWeight="700">Tue, April 15</Typography>
            <Typography fontFamily={"Raleway"}>11:59/11:29 AM</Typography>
          </div>
        </Box>
        <Divider sx={{ width: "100%", marginTop: "10px", background: "#263238" }} />
        <Button
          sx={{
            background: "#263238",
            color: "#fff",
            margin: "10px auto",
            width: '324px',
            height: '64px',
            borderRadius: '5px',
            "&:hover": {
              backgroundColor: "#4CAF50",
            }
          }}
          fullWidth
        >
          Total price (Incl. of tax) N5,200.00
        </Button>
      </Box>
    </Box>
  );
};

export default HotelCheckout;
