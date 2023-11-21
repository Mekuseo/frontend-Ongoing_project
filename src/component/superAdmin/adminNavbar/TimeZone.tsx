import React, { useState, useEffect, useRef } from "react";
import "./AdminNavbar.css";
import MenuButton from "@mui/joy/MenuButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Dropdown from "@mui/joy/Dropdown";
import ClockIcon from "./AdminNavbarIcons";

const AdminNavbar = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState("Africa/Lagos");
  const [currentTime, setCurrentTime] = useState("");

  // Use ref to keep track of the latest selectedTimeZone
  const selectedTimeZoneRef = useRef(selectedTimeZone);
  selectedTimeZoneRef.current = selectedTimeZone;

  useEffect(() => {
    // Function to get the current time in a specific time zone
    const getTimeInTimeZone = (timeZone: string) => {
      const options = {
        timeZone: timeZone,
        hour: "numeric" as const,
        minute: "numeric" as const,
        hour12: true,
      };
      return new Date().toLocaleTimeString([], options);
    };

    // Set the default current time
    setCurrentTime(getTimeInTimeZone(selectedTimeZone));

    // Update the time every minute
    const intervalId = setInterval(() => {
      setCurrentTime(getTimeInTimeZone(selectedTimeZoneRef.current));
    }, 60000);

    return () => clearInterval(intervalId);
  }, [selectedTimeZone]);

  const handleTimeZoneChange = (newTimeZone: React.SetStateAction<string>) => {
    setSelectedTimeZone(newTimeZone);
  };

  return (
    <div className="admin-navbar-container">
      <Dropdown>
        <MenuButton
          endDecorator={<ArrowDropDown />}
          sx={{
            backgroundColor: "white",
            border: "none",
            borderRadius: "30px",
            display:"flex",
            alignItems:"center",
            gap:"10px"
          }}
        >
          <ClockIcon />
          {`${currentTime} ${selectedTimeZone}`}
        </MenuButton>
        <Menu
          sx={{
            minWidth: 160,
            "--ListItemDecorator-size": "24px",
            backgroundColor: "white",
            border: "none",
          }}
        >
          <MenuItem onClick={() => handleTimeZoneChange("Africa/Lagos")}>
            West Africa Time
          </MenuItem>
          <MenuItem onClick={() => handleTimeZoneChange("America/New_York")}>
            Eastern Standard Time
          </MenuItem>
          <MenuItem onClick={() => handleTimeZoneChange("America/Los_Angeles")}>
            Pacific Time Zone
          </MenuItem>
          <MenuItem onClick={() => handleTimeZoneChange("GMT")}>GMT</MenuItem>
        </Menu>
      </Dropdown>
    </div>
  );
};

export default AdminNavbar;
