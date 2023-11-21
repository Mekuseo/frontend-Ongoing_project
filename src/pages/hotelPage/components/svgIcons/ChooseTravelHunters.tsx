import { Box } from "@mui/material";
import { Typography } from "antd";

const ChooseTravelHunters = () => {
  const itemStyle = {
    fontFamily:"volkhov",
    borderRadius: "50%",
    border: "1px solid #CF0007",
    padding: "5px",
    width: "24px",
    height: "24px",
    color: "red",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const headingStyle = {
    color: "#6E9E76",
    fontFamily: "Raleway, sans-serif",
    fontSize: "30px",
    fontWeight: "700",
    margin: "0 auto",
  };

  const textStyle = {
    fontSize: "18px",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "600",
  };

  const renderFeature = (number: number) => (
    <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
      <div style={itemStyle}>{number}</div>
      <Typography style={textStyle}>Save up to 50% on offers</Typography>
    </Box>
  );

  return (
    <Box sx={{ background: "#263238", paddingBottom: "3px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          width: "1000px",
          height: "223px",
          padding: "28px 47px 21px 58px",
          justifyItems: "flex-end",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "#FFF",
          boxShadow:
            "-4px -4px 4px 0px rgba(171, 170, 170, 0.25), 0px 4px 4px 0px rgba(171, 170, 170, 0.58)",
          margin: "0 45px 53px 40px",
        }}
      >
        <Typography style={headingStyle}>
          Why choose theTravel Hunters
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "80px",
          }}
        >
          {Array.from({ length: 3 }, (_, index) => renderFeature(index + 1))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "80px",
          }}
        >
          {Array.from({ length: 3 }, (_, index) =>
            renderFeature(index + 4)
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ChooseTravelHunters;
