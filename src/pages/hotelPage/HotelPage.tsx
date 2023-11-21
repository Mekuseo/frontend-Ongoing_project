import { Box } from "@mui/material";
import Navbar from "../../component/HomePage/header/header";
import HeroSection from "./components/HeroSection";
import ChooseTravelHunters from "./components/svgIcons/ChooseTravelHunters";
import LateNightDeals from "./components/LateNightDeals";
import TopHotelDeals from "./components/TopHotelDeals";
import FindOffers from "./components/FindOffers";
import HotelsInCountry from "./components/HotelsInCountry";
import CountryList from "./components/CountryList";
import { UserContextProvider } from "../../utils/UserData";
import Footer from "../../component/HomePage/footer/Footer";

const HotelPage = () => {
  return (
    <Box
      sx={{
        width: "1080px",
        margin: "0 auto",
      }}
    >
      <UserContextProvider>
        <Navbar />
        <HeroSection />
        <ChooseTravelHunters />
        <Box sx={{ background: "#F4F4F4", width: "1080px" }}>
          <LateNightDeals />
          <TopHotelDeals />
          <FindOffers />
          <HotelsInCountry />
          <CountryList />
        </Box>
        <Footer />
      </UserContextProvider>
    </Box>
  );
};

export default HotelPage;
