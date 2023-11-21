import Footer from "../../component/HomePage/footer/Footer";
import Navbar from "../../component/HomePage/header/header";
import AboutProfile from "../../component/aboutUs/AboutProfile";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutUs-navbar">
        <Navbar />
      </div>
      <div className="aboutUs-ScreenSize">
        <AboutProfile />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
