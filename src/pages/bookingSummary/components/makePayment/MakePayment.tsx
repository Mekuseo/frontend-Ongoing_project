import { FormControlLabel, Radio } from "@mui/material";
import "./MakePayment.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const MakePayment = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleChange = (_event: React.SyntheticEvent<Element, Event>, checked: boolean) => {
    setSelectedValue(checked ? "option1" : "option2");
  };

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: "10px",
        border: "1px solid rgba(171,170,170,0.58)",
        background: "#fff",
        fontFamily: "Raleway, sans-serif",
        margin: "0 auto",
      }}
    >
      <Typography variant="h5" marginBottom="6px" fontWeight="600">
        Make Payment
      </Typography>
      <Typography marginBottom="10px">
        Reservations are only confirmed when you pay now.
      </Typography>
      <div
        className={`makepayment-paynow ${
          selectedValue === "option1" ? "selected" : ""
        }`}
      >
        <FormControlLabel
          value="option1"
          control={<Radio color="success" />}
          label="Pay now"
          style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "20px",
            paddingLeft: "15px",
            borderRadius: "5px",
          }}
          onChange={handleChange}
        />
        <Typography
          style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "15px",
            marginLeft: "30px",
          }}
        >
          Make a payment of N5,300.00
        </Typography>
      </div>
    </Box>
  );
};

export default MakePayment;
