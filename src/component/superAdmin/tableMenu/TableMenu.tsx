import ButtonStyle from "./ButtonStyle";
import "./TableMenu.css";

import pendingMenuIcons, {
  cancelledMenuIcon,
  checkInMenuIcons,
  checkOutMenuIcon,
  confirmedMenuIcons,
  failedMenuIcon,
  leftArrowMenuIcon,
  rightArrowMenuIcon,
} from "./TableMenuIcons";

interface TableMenuProps {
  handleScroll: (direction: "left" | "right") => void;
  activeComponent: boolean;
  handleComponentDisplay: () => void;
}

const TableMenu = ({
  handleScroll,
  activeComponent,
  handleComponentDisplay,
}: TableMenuProps) => {
  return (
    <ButtonStyle>
      <button
        onClick={handleComponentDisplay}
        style={{ backgroundColor: activeComponent ? "#B7D59F" : "" }}
      >
        <span>Pending Bookings</span> {pendingMenuIcons()}{" "}
      </button>
      <button>
        <span>Confirmed bookings</span> {confirmedMenuIcons()}{" "}
      </button>
      <button>
        <span>Bookings for Check-in today</span> {checkInMenuIcons()}{" "}
      </button>
      <button>
        <span>Bookings for Check-out today</span> {checkOutMenuIcon()}{" "}
      </button>
      <button>
        <span>Cancelled bookings - for refund</span> {cancelledMenuIcon()}{" "}
      </button>
      <button>
        <span>Failed bookings - non-availability</span> {failedMenuIcon()}{" "}
      </button>

      <div className="tableMenu-scrollBtn">
        <button onClick={() => handleScroll("left")}>
          {leftArrowMenuIcon()}
        </button>
        <span>Move</span>
        <button onClick={() => handleScroll("right")}>
          {rightArrowMenuIcon()}
        </button>
      </div>
    </ButtonStyle>
  );
};

export default TableMenu;
