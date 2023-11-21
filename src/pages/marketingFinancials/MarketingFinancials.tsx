import Navbar from "../../component/HomePage/header/header";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

const MarketingFinancial = () => {
  return (
    <div>
      <Navbar />
      <h1
        style={{
          color: "#263238",
          fontFamily: "raleway, sans-serif",
          fontSize: "40px",
          fontWeight: "700",
          marginTop: "50px",
          textAlign: "center",
        }}
      >
        MARKETING AND FINANCIALS{" "}
      </h1>
      <div
        style={{
          width: "1010px",
          borderRadius: "5px",
          border: " 2px solid #C5C4C4",
          boxShadow:
            "10px 10px 20px 0px rgba(191, 191, 191, 0.30), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h2>Marketing</h2>
        <p>Boost your event and get audiences to see your event</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <FormControlLabel
              label="Place an advert"
              control={<Checkbox color="success" />}
            />
            <FormControlLabel
              label="Appear on homepage by location being searched from"
              control={<Checkbox color="success" />}
            />
            <FormControlLabel
              label="Feature in top trending events in the city"
              control={<Checkbox color="success" />}
            />
          </div>
          <div>
            <p>N6,000.00/day</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="text" placeholder="Input city" />
              <p>N6,000.00/day</p>
            </div>
            <p>N6,000.00/day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingFinancial;
