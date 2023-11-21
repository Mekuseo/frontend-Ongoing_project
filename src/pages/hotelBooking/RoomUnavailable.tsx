import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RoomUnavailable = () => {
  const navigate = useNavigate();

  const navigateToRecommendations = () => {
    navigate("/");
  };

  return (
    <Box
      className="RoomUnavailable-container"
      sx={{
        gap: "30px",
        width: "37px 16px 165px 32px",
        height: "259px",
        padding: "50px 20px",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "center",
        borderRadius: "20px",
        backgroundColor: "white",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h4"
        style={{
          fontSize: "30px",
          fontWeight: "700",
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "2px",
        }}
      >
        Room not available
      </Typography>
      <Typography
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "rgba(38, 50, 56, 0.50)",
          marginBottom: "30px",
        }}
      >
        Sorry, there is no room available at this time.
      </Typography>
      <Button
        sx={{
          width: "368px",
          height: "74px",
          border: "2px solid rgba(0, 0, 0, 0.28)",
          borderRadius: "5px",
          color: "#929292",
          fontWeight: "700",
          textAlign: "left",
          justifyContent: "space-between",
          padding: "0 20px",
          "&:hover": {
            border: "2px solid #6E9E76",
          },
        }}
        color="primary"
        onClick={navigateToRecommendations}
      >
        FIND SIMILAR PROPERTIES <br />
        AVAILABLE FOR YOU{" "}
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{ color: "#6E9E76" }}
          size="xl"
        />
      </Button>
    </Box>
  );
};

export default RoomUnavailable;
