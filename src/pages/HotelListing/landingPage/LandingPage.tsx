import Footer from "../../../component/HomePage/footer/Footer";
import Navbar from "../../../component/HomePage/header/header";
import LandingBottom from "../../../component/HotelListing/landingBottom/LandingBottom";
import LandingHeader from "../../../component/HotelListing/landingHeader/LandingHeader";
import IGC from "../../../component/HotelListing/landingIc/IGC";
import { UserContextProvider } from "../../../utils/UserData";

const LandingPage = () => {
  return (
    <div>
      <UserContextProvider>
        <Navbar />
        <LandingHeader />
        <IGC />
        <LandingBottom />
        <Footer />
      </UserContextProvider>
    </div>
  );
};

export default LandingPage;
