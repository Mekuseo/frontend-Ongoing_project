import { Box } from "@mui/material";
import Navbar from "../../../component/HomePage/header/header";
import { Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import EventGallery from "./EventGallery";
import HighlightActivity from "./HighlightActivity";
import EventDetailSummary from "./EventDetailSummary";
import ImportantInformation from "./ImportantInformation";
import EventsCard from "./EventsCard";
import EventCountryList from "./EventCountryList";

const EventDetail = () => {
  return (
    <Box>
      <Navbar />
      <Box style={{ width: "1080px", margin: "50px auto" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            direction: "row",
            alignItem: "center",
            gap: "5px",
            marginBottom: "16px",
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
          <Typography
            style={{
              fontFamily: "volkhov, sans-serif",
              fontSize: "15px",
              color: "rgba(38, 50, 56, 0.50)",
            }}
          >
            Things to do in Abuja,Nigeria
          </Typography>
        </Box>
        <Typography
          style={{ fontWeight: "600", fontSize: "25px", color: "#263238" }}
        >
          Neighbourhood Hangout
        </Typography>
        <Typography
          style={{
            fontSize: "30px",
            fontWeight: "800",
            color: "#CF0007",
            lineHeight: "160%",
            fontFamily: "raleway, sans-serif",
          }}
        >
          IT’S A PARTY LIKE NEVER BEFORE
        </Typography>
        <Typography
          style={{
            fontFamily: "raleway, sans-serif",
            fontSize: "20px",
            color: "#263238",
            marginBottom: "-30px",
          }}
        >
          No reviews
        </Typography>
      </Box>

      <EventGallery />
      <Box sx={{ display: "flex", alignItem: "center" }}>
        <div style={{ width: "60%" }}>
          <HighlightActivity />
        </div>
        <div style={{ width: "35%" }}>
          <EventDetailSummary />
        </div>
      </Box>
      <ImportantInformation />
      <EventsCard />
      <EventCountryList />
    </Box>
  );
};

export default EventDetail;
