import { UserContextProvider } from "../../utils/UserData";
import HotelBooking from "./HotelBooking";
import Navbar from "../../component/HomePage/header/header";
import Footer from "../../component/HomePage/footer/Footer";

const HotelMain = () => {
  return (
    <UserContextProvider>
      <Navbar />
      <HotelBooking />

      <Footer />
    </UserContextProvider>
  );
};

export default HotelMain;
