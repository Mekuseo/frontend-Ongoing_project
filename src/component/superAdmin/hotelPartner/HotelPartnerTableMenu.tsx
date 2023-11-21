import ButtonStyle from "../tableMenu/ButtonStyle";
import pendingMenuIcons from "../tableMenu/TableMenuIcons";
import {
  DashboardIconBlack,
  ReservationsIcons,
  PaymentIcon,
  InvoiceIcon,
} from "../../ThingsToDo/SuperAdminIcons";
import {
  leftArrowMenuIcon,
  rightArrowMenuIcon,
} from "../tableMenu/TableMenuIcons";

interface TableMenuProps {
  handleScroll: (direction: "left" | "right") => void;
}

const HotelPartnerTableMenu = ({handleScroll}: TableMenuProps) => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
      <ButtonStyle>
        <button style={{ width: "150px", alignItems: "center" }}>
          <span style={{ paddingRight: "15px", textAlign: "left" }}>
            Property Details
          </span>{" "}
          {DashboardIconBlack()}{" "}
        </button>
        <button style={{ width: "200px", alignItems: "center" }}>
          <span style={{ paddingRight: "15px", textAlign: "left" }}>
            Reservations and history
          </span>{" "}
          {ReservationsIcons()}{" "}
        </button>
        <button style={{ width: "150px", alignItems: "center" }}>
          <span style={{ paddingRight: "15px", textAlign: "left" }}>
            Payment and billing info
          </span>{" "}
          {PaymentIcon()}{" "}
        </button>
        <button style={{ width: "150px", alignItems: "center" }}>
          <span style={{ paddingRight: "15px", textAlign: "left" }}>
            Booking history
          </span>{" "}
          {pendingMenuIcons()}{" "}
        </button>
        <button style={{ width: "150px", alignItems: "center" }}>
          <span style={{ paddingRight: "15px", textAlign: "left" }}>
            Invoice
          </span>{" "}
          {InvoiceIcon()}{" "}
        </button>
      </ButtonStyle>

      <div className="tableMenu-scrollBtn" style={{paddingTop:"20px"}}>
        <button onClick={() => handleScroll("left")}>
          {leftArrowMenuIcon()}
        </button>
        <span>Move</span>
        <button onClick={() => handleScroll("right")}>
          {rightArrowMenuIcon()}
        </button>
      </div>
    </div>
  );
};

export default HotelPartnerTableMenu;
