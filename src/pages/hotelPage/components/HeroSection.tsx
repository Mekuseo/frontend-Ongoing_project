import { Box } from "@mui/material";
import heroImg from "../../../assets/pics/homepage-hero.png";
import HeroLowerSection from "./svgIcons/HeroLowerSection";
import HeroSectionSearch from "./HeroSectionSearch";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        marginTop: "35px",
      }}
    >
      <HeroSectionSearch />
      <img src={heroImg} alt="hotel-homepage" />
      <div style={{ position: "absolute", top: "255px" }}>
        <HeroLowerSection />
      </div>
    </Box>
  );
};

export default HeroSection;
