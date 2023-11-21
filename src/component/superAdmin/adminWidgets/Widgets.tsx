import "./AdminWidgets.css";
import PendingIcons, { CheckInIcons } from "./WidgetsIcons";

type WidgetType =
  | "pending bookings today"
  | "check-in today"
  | "check-out today"
  | "total confirmed"
  | "pending bookings"
  | "check-in for nightly"
  | "checkout-for nightly"
  | "confirmed bookings for nightly";

const Widgets: React.FC<{ type: WidgetType }> = ({ type }) => {  
  let data;

  switch (type) {
    case "pending bookings today":
      data = {
        title: "Pending Bookings Today",
        number: 1000,
        icon: <PendingIcons />,
        color: "#5C0F08"
      };
      break;
    case "check-in today":
      data = {
        title: "Check-in today",
        number: 30,
        icon: <CheckInIcons />,
        color: "#5C0F08"
      };
      break;
    case "check-out today":
      data = {
        title: "check-out today",
        number: 12,
        icon: <PendingIcons />,
        color: "#5C0F08"
      };
      break;
    case "total confirmed":
      data = {
        title: "Total confirmed bookings today",
        number: 5,
        icon: <PendingIcons />,
        color: "#5C0F08"
      };
      break;
    case "pending bookings":
      data = {
        title: "Pending bookings for Nightly Hotel deals",
        number: 52,
        icon: <PendingIcons />,
        color: "#08155C",
      };
      break;
    case "check-in for nightly":
      data = {
        title: "Check-in for Nightly Hotel deals",
        number: 42,
        icon: <PendingIcons />,
        color: "#08155C",
      };
      break;
    case "checkout-for nightly":
      data = {
        title: "Check-out for Nightly Hotel deals",
        number: 39,
        icon: <PendingIcons />,
        color: "#08155C",
      };
      break;
    case "confirmed bookings for nightly":
      data = {
        title: "Confirmed bookings for Nightly Hotel deals",
        number: 10,
        icon: <PendingIcons />,
        color: "#08155C",
      };
      break;
      
  }

  const numberColor = {color: data?.color || "black"};

  return (
    <div className="widgetCard">
      <span>{data?.title}</span>
      <div>
        {data?.icon}
        <span style={numberColor}>{data?.number}</span>
      </div>
    </div>
  );
};

export default Widgets;
