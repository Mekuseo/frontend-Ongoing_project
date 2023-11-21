import React from "react";
import { Box, Button } from "@mui/material";
import { Divider, Typography } from "antd";

interface GuestRoomCountProps {
  roomCount: number;
  adultCount: number;
  childCount: number;
  onRoomCountChange: (newRoomCount: number) => void;
  onAdultCountChange: (newAdultCount: number) => void;
  onChildCountChange: (newChildCount: number) => void;
}

const GuestRoomCount: React.FC<GuestRoomCountProps> = ({
  roomCount,
  adultCount,
  childCount,
  onRoomCountChange,
  onAdultCountChange,
  onChildCountChange,
}) => {
  const handleIncrement = (type: string) => {
    switch (type) {
      case "room":
        onRoomCountChange(roomCount + 1);
        break;
      case "adult":
        onAdultCountChange(adultCount + 1);
        break;
      case "child":
        onChildCountChange(childCount + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (type: string) => {
    switch (type) {
      case "room":
        if (roomCount > 1) {
          onRoomCountChange(roomCount - 1);
        }
        break;
      case "adult":
        if (adultCount > 1) {
          onAdultCountChange(adultCount - 1);
        }
        break;
      case "child":
        if (childCount > 0) {
          onChildCountChange(childCount - 1);
        }
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        width: "256px",
        background: "white",
        borderRadius: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "7px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography style={{ fontFamily: "volkhov, sans-serif", fontSize: "15px" }}>
          Room
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ fontSize: "12px", fontFamily: "raleway, sans-serif", minWidth: "44px" }}
            onClick={() => handleDecrement("room")}
          >
            -
          </Button>
          <Typography
            style={{ fontSize: "20px", fontFamily: "Raleway, sans-serif", padding: "0 10px" }}
          >
            {roomCount}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            sx={{ fontSize: "12px", fontFamily: "raleway, sans-serif", minWidth: "44px" }}
            onClick={() => handleIncrement("room")}
          >
            +
          </Button>
        </Box>
      </Box>
      <Divider style={{ margin: "0" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography style={{ fontFamily: "volkhov, sans-serif", fontSize: "15px" }}>
          Adults <br />
          <small>Ages 18 or above</small>
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ fontSize: "12px", fontFamily: "raleway, sans-serif", minWidth: "44px" }}
            onClick={() => handleDecrement("adult")}
          >
            -
          </Button>
          <Typography
            style={{ fontSize: "20px", fontFamily: "Raleway, sans-serif", padding: "0 10px" }}
          >
            {adultCount}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            sx={{ fontSize: "12px", fontFamily: "raleway, sans-serif", minWidth: "44px" }}
            onClick={() => handleIncrement("adult")}
          >
            +
          </Button>
        </Box>
      </Box>
      <Divider style={{ margin: "0" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography style={{ fontFamily: "volkhov, sans-serif", fontSize: "15px" }}>
          Children <br />
          <small>Ages 0-17</small>
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ fontSize: "12px", fontFamily: "raleway, sans-serif", minWidth: "44px" }}
            onClick={() => handleDecrement("child")}
          >
            -
          </Button>
          <Typography
            style={{ fontSize: "20px", fontFamily: "Raleway, sans-serif", padding: "0 10px" }}
          >
            {childCount}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            sx={{ fontSize: "12px", fontFamily: "raleway, sans-serif", minWidth: "44px" }}
            onClick={() => handleIncrement("child")}
          >
            +
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GuestRoomCount;
