import "./footer.css";
import "./footerMobile.css";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../../../utils/UserData";
import FooterTwo from "./footerTwo";
import Links from "./links";
import FormSub from "./form";

const Footer = () => {
  // const navigate = useNavigate();
  // const { user } = useContext(UserContext);

  // const handleListItemClick = () => {
  //   if (user) {
  //     navigate("/stay");
  //   } else {
  //     navigate("/login");
  //   }
  // };

  return (
    <>
      <div className="footer">
        <div className="footerContent">
          <div className="footerow">
            <div className="footercontainers subscribeMailing">
              <FormSub />
            </div>

            <div className="footercontainers footerlinks">
              <div className="footerlinkcont">
                <Links />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="secondFooter">
        <FooterTwo />
      </div>
    </>
  );
};

export default Footer;
