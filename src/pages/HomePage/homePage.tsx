import Footer from "../../component/HomePage/footer/Footer";
import Navbar from "../../component/HomePage/header/header";
import HomeSearch from "../../component/HomePage/HomeDisplay/HomeDisplay";
import LastDeals from "../../component/HomePage/LastMdeals/LastDeals";
// import MailList from "../../component/HomePage/newsLetter/NewsLetter";
import Soffers from "../../component/HomePage/specialOffers/Soffers";
import ToDoAbuja from "../../component/HomePage/toDoAbuja/ToDoAbuja";
import TopFeatured from "../../component/HomePage/topDes/TopDes";
import TravelNews from "../../component/HomePage/travelNews/TravelNews";
import WaysTo from "../../component/HomePage/waysTo/Ways";
import { UserContextProvider } from "../../utils/UserData";

const HomePage = () => {
  return (
    <>
    <UserContextProvider>
      <Navbar />
      <div>
        <HomeSearch />
        <TravelNews />

        <div className="homePage container">
          <LastDeals/>
          <WaysTo/>
        </div>

        <ToDoAbuja />
        <div className="homePage container">
          <Soffers/>
          <TopFeatured/>
        </div>
      </div>
      <Footer />
    </UserContextProvider>
    </>
  );
};

export default HomePage;
