import "./footer.css";
import "./footerMobile.css";
import { useContext } from "react";
import { UserContext } from "../../../utils/UserData";

const link1 = [
  {
    id: 1,
    name: "Contact Us",
    to: "#",
  },
  {
    id: 2,
    name: "About Us",
    to: "./about-us",
  },
  {
    id: 3,
    name: "Terms of use",
    to: "#",
  },
  {
    id: 4,
    name: "Privacy Policy",
    to: "#",
  },
];

const link2 = [
  // const navigate = useNavigate();
  // const { user } = useContext(UserContext);

  // const handleListItemClick = () => {
  //   if (user) {
  //     navigate("/stay");
  //   } else {
  //     navigate("/login");
  //   }
  // };
  {
    id: 5,
    name: "Add a Hotel",
    href: "/stay",
  },
  {
    id: 6,
    name: "Add an event",
    to: "/createEvent",
  },
  {
    id: 7,
    name: "Add a Place",
    to: "/addPlace",
  },
  {
    id: 8,
    name: "Advertise with Us",
    to: "#",
  },
];

const link3 = [
  {
    id: 9,
    name: "Hotels",
    to: "#",
  },
  {
    id: 10,
    name: "Late-night Hotel Deals",
    to: "/dealsHome",
  },
  {
    id: 11,
    name: "Things To Do",
    to: "/toDoHome",
  },
  {
    id: 12,
    name: "Destinations",
    to: "#",
  },
];

const Links = () => {
  useContext(UserContext);

  return (
    <>
      <div className="footerow">
        <div className="footercontainerslinks">
          <h1>Company</h1>

          {link1.map((links, id) => (
            <div key={id}>
              <a>{links.name}</a>
            </div>
          ))}
        </div>

        <div className="footercontainerslinks">
          <h1>Do Business With Us</h1>

          {link2.map((links, id) => (
            <div key={id}>
              <a href={links.href}>{links.name}</a>
            </div>
          ))}
        </div>

        <div className="footercontainerslinks">
          <h1>Products</h1>

          {link3.map((links, id) => (
            <div key={id}>
              <a>{links.name}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Links;
