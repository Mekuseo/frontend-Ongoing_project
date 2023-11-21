import { UserContextProvider } from "../../../utils/UserData";
import OPBody from "../../../component/stay/ownsProfileBody/OPBody";
import Navbar from "../../../component/HomePage/header/header";
import Footer from "../../../component/HomePage/footer/Footer";

const HotelOwnersProfile = () => {
  return (
    <div>
      <UserContextProvider>
        <Navbar />
        <OPBody />
        <Footer />
      </UserContextProvider>
    </div>
  );
};

export default HotelOwnersProfile;
