import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import EventsPics from "../../../assets/pics/eventcard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faShareNodes,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import EventsCardData from "./EventsCardData.json";
import { useState } from "react";

interface EventData {
  title: string;
  name: string;
  location: string;
  date: string;
  price: string;
  Organizer: string;
}

const location = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
  >
    <path
      d="M5.33333 6.43969V9.49985C5.33333 9.65899 5.40357 9.81161 5.5286 9.92413C5.65362 10.0367 5.82319 10.0999 6 10.0999C6.17681 10.0999 6.34638 10.0367 6.4714 9.92413C6.59643 9.81161 6.66667 9.65899 6.66667 9.49985V6.43969C7.47603 6.29099 8.19522 5.87711 8.6848 5.27828C9.17438 4.67945 9.39948 3.93833 9.31645 3.19861C9.23343 2.45889 8.84819 1.77327 8.23544 1.27467C7.62268 0.776062 6.82605 0.5 6 0.5C5.17395 0.5 4.37732 0.776062 3.76456 1.27467C3.15181 1.77327 2.76657 2.45889 2.68355 3.19861C2.60052 3.93833 2.82562 4.67945 3.3152 5.27828C3.80478 5.87711 4.52397 6.29099 5.33333 6.43969ZM6 1.69945C6.39556 1.69945 6.78224 1.80502 7.11114 2.00282C7.44004 2.20062 7.69638 2.48175 7.84776 2.81068C7.99914 3.1396 8.03874 3.50154 7.96157 3.85072C7.8844 4.1999 7.69392 4.52065 7.41421 4.7724C7.13451 5.02415 6.77814 5.19559 6.39018 5.26504C6.00222 5.3345 5.60009 5.29885 5.23463 5.16261C4.86918 5.02636 4.55682 4.79564 4.33706 4.49962C4.1173 4.20359 4 3.85557 4 3.49954C4 3.02213 4.21071 2.56427 4.58579 2.22668C4.96086 1.8891 5.46957 1.69945 6 1.69945ZM8.80667 7.95177C8.71912 7.93522 8.62881 7.93436 8.54089 7.94922C8.45297 7.96409 8.36916 7.9944 8.29426 8.03841C8.21935 8.08243 8.15481 8.1393 8.10432 8.20576C8.05383 8.27223 8.01838 8.347 8 8.42579C7.98161 8.50459 7.98065 8.58587 7.99717 8.66501C8.01369 8.74414 8.04736 8.81957 8.09627 8.88698C8.14517 8.9544 8.20835 9.01249 8.2822 9.05793C8.35605 9.10338 8.43912 9.13528 8.52667 9.15183C10.04 9.42184 10.6667 9.90787 10.6667 10.0999C10.6667 10.4479 9.03333 11.2999 6 11.2999C2.96667 11.2999 1.33333 10.4479 1.33333 10.0999C1.33333 9.90787 1.96 9.42184 3.47333 9.12783C3.56088 9.11128 3.64395 9.07938 3.7178 9.03393C3.79165 8.98849 3.85483 8.9304 3.90373 8.86298C3.95264 8.79556 3.98631 8.72014 4.00283 8.641C4.01935 8.56187 4.01838 8.48059 4 8.40179C3.98161 8.32299 3.94617 8.24823 3.89568 8.18176C3.84519 8.11529 3.78065 8.05843 3.70574 8.01441C3.63084 7.97039 3.54703 7.94009 3.45911 7.92522C3.37119 7.91035 3.28088 7.91122 3.19333 7.92777C1.16667 8.34779 0 9.13383 0 10.0999C0 11.678 3.02 12.5 6 12.5C8.98 12.5 12 11.678 12 10.0999C12 9.13383 10.8333 8.34779 8.80667 7.95177Z"
      fill="#263238"
    />
  </svg>
);

interface EventsCardProps {
  event: EventData;
}
const EventsCard = ({ event }: EventsCardProps) => {
  const [selectThumb, setSelectThumb] = useState(false);
  const [selectShare, setSelectShare] = useState(false);

  const {
    title,
    name,
    location: eventLocation,
    date,
    price,
    Organizer,
  } = event;

  const handleThumb = () => {
    setSelectThumb(!selectThumb);
  };

  const handleShare = () => {
    setSelectShare(!selectShare);
  };

  return (
    <Card
      sx={{
        width: "250px",
        marginBottom: "38px",
        position: "relative",
        "&:hover": {
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          transition:"all 0.5s ease",
          transform:"scale(1.05)"
        }
      }}
    >
      <CardMedia
        component="img"
        height="179"
        image={EventsPics}
        alt="Event pics"
      />
      <CardContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            top: "0",
            right: "0",
            margin: "8px 10px 0 0",
            gap: "5px",
          }}
        >
          <FontAwesomeIcon
            icon={faThumbsUp}
            style={{
              color: selectThumb ? "gold" : "white",
              transform: selectThumb ? "scale(1.2)" : "scale(1)",
            }}
            onClick={handleThumb}
          />
          <FontAwesomeIcon
            icon={faShareNodes}
            style={{
              color: selectShare ? "gold" : "white",
              transform: selectShare ? "scale(1.2)" : "scale(1)",
            }}
            onClick={handleShare}
          />
        </div>
        <Typography
          style={{
            fontFamily: "raleway, sans-serif",
            fontSize: "12px",
            margin: "-10px 0 15px",
          }}
        >
          {title}
        </Typography>
        <Typography
          style={{
            fontFamily: "raleway, sans-serif",
            fontSize: "12px",
            fontWeight: "800",
            color: "#CF0007",
          }}
        >
          {name}
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginBottom: "5px",
            marginTop: "8px",
          }}
        >
          {location}
          <p style={{ fontSize: "10px", fontFamily: "volkhov, sans-serif" }}>
            {eventLocation}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginBottom: "5px",
          }}
        >
          <FontAwesomeIcon icon={faCalendar} size="xs" />
          <p style={{ fontSize: "10px", fontFamily: "volkhov, sans-serif" }}>
            {date}
          </p>
        </div>
        <p style={{ fontSize: "10px", fontFamily: "volkhov, sans-serif" }}>
          {price}
        </p>
        <p
          style={{
            fontSize: "10px",
            fontFamily: "raleway, sans-serif",
            color: "#6E9E76",
            marginTop: "8px",
          }}
        >
          Organizer: {Organizer}
        </p>
      </CardContent>
    </Card>
  );
};

const EventsCardList = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {EventsCardData.map((event, index) => (
        <EventsCard key={index} event={event} />
      ))}
    </div>
  );
};

export default EventsCardList;
