import Footer from "../../component/HomePage/footer/Footer";
import Navbar from "../../component/HomePage/header/header";
import DestinationDescriptions from "../../component/destinations/destinationDescriptions/DestinationDescriptions";
import TrendingEvents from "../../component/destinations/destinationEvents/TrendingEvents";
import DestinationsHero from "../../component/destinations/hero/DestinationsHero";
import "./Destination.css";

const Destinations = () => {
  return (
    <div>
      <div className="navbarSpacing">
        <Navbar />
      </div>
      <div className="destinationsContainer">
        <DestinationsHero />
        <DestinationDescriptions />
        <TrendingEvents />
      </div>
      <Footer />
    </div>
  );
};

export default Destinations;
