import "../../../pages/superAdmin/hotelPartner/HotelPartner.css";
import OutlinedStarIcons from "./HotelPartnerIcons";
import Map from "../../../assets/pics/Map of Birmingham (County).png";

const HotelPartnerDesc = () => {
  return (
    <div className="hotelPartnerDesc-container">
      <div>
        <div className="hotelPartnerDesc-desc">
          <span>Name of property :</span>
          <span>Transcorp Hilton Hotel</span>
        </div>
        <div className="hotelPartnerDesc-desc">
          <span>Address of Hotel :</span>
          <span>Plot 5, Sule Maitama street, Wuse district Abuja 9001 </span>
        </div>
        <div className="hotelPartnerDesc-desc">
          <span>E-mail address :</span>
          <span>Gbengadaniels@gmail.com</span>
        </div>
        <div className="hotelPartnerDesc-desc">
          <span>Date created :</span>
          <span>25th October, 2023</span>
        </div>

        <div className="hotelPartnerDesc-property">
          <div>
            <div className="hotelPartnerDesc-desc">
              <span>Property phone number 1 :</span>
              <span>+23489065321</span>
            </div>
            <div className="hotelPartnerDesc-desc">
              <span>Address :</span>
              <span>2, Lagos street, Abuja</span>
            </div>
            <div className="hotelPartnerDesc-desc">
              <span>State :</span>
              <span>Lagos State</span>
            </div>
          </div>

          <div>
            <div className="hotelPartnerDesc-desc">
              <span>Property phone number 2 :</span>
              <span>+23489065321</span>
            </div>
            <div className="hotelPartnerDesc-desc">
              <span>Nationality :</span>
              <span>Nigerian</span>
            </div>
            <div className="hotelPartnerDesc-desc">
              <span>Country :</span>
              <span>Nigeria</span>
            </div>
          </div>
        </div>

        <div className="hotelPartnerDesc-divider"></div>

        <div className="hotelPartnerDesc-property">
          <div className="hotelPartnerDesc-desc">
            <div className="hotelPartnerDesc-desc">
              <span>Name of property host :</span>
              <span>Gideon Bassey</span>
            </div>
            <div className="hotelPartnerDesc-desc">
              <span>Phone number :</span>
              <span>+234790786554</span>
            </div>
          </div>
          <div>
            <div className="hotelPartnerDesc-desc">
              <span>Hosting type :</span>
              <span>Owner</span>
            </div>
            <div className="hotelPartnerDesc-desc">
              <span>E-mail address :</span>
              <span>Gbengadaniels@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hotelPartner-mapSection">
        <div className="hotelPartner-rating">
          <span>Hotel star rating</span>
          <span>
            {Array.from({ length: 5 }, (_, index) => (
              <OutlinedStarIcons key={index} />
            ))}
          </span>
        </div>
        <img src={Map} alt="map" />
      </div>
    </div>
  );
};

export default HotelPartnerDesc;
