import "./landingHeader.css";
import logo from "../../../assets/pics/logo.png";
import hotel from "../../../assets/pics/Building With Rooftop Terrace.png";
import house from "../../../assets/pics/Residence.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../utils/UserData";

const LandingHeader = () => {
  const { user } = useContext(UserContext);

  const nav = () => {
    if (user?.phone_number) {
      navigate("/aboutProperty");
    } else {
      navigate("/profilePage");
    }
  };
  const navigate = useNavigate();
  return (
    <div className="background">
      <div className="body">
        <div className="bodyLeft">
          <section className="set1">
            A New And Effective Way of Bringing Comfort To Our Customers All
            Around The World
          </section>
          <section className="set2">
            We want to help people travel, feel safe and comfortble with their
            guides, and our partners.
          </section>
          <div className="LBTN" onClick={nav}>
            <section>List your property</section>
          </div>
        </div>

        <div className="bodyRight">
          <div className="imgLogo">
            <img src={logo} alt="" />
          </div>

          <div className="bodyRightDown">
            <div className="bodyRightDownIn">
              <div className="bRDtext">
                <section className="headerj">
                  What would you like to list?
                </section>
                <section className="praj">
                  Property listing enables us to provide a medium which connects
                  millions of people to the right properties for them.
                </section>
              </div>
              <div className="bContainer">
                <div className="bContainerIn">
                  <img src={hotel} alt="" />
                  <section className="H12">Hotel</section>
                  <section className="H13">
                    A hotel, motel or bed and breakfast
                  </section>
                </div>

                <div className="bContainerIn">
                  <img src={house} alt="" />
                  <section className="H12">Home & Apartments</section>
                  <section className="H13">
                    A private home, apartments, or <br />
                    holiday home
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
