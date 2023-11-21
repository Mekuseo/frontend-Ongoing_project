import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./RoomClassDrop.css";

interface RoomClassDropProps {
  dropdownItems: string[];
  selectedCategoryRoom: string;
  setSelectedCategoryRoom: (category: string) => void;
}

const RoomClassDrop: React.FC<RoomClassDropProps> = ({
  dropdownItems,
  selectedCategoryRoom,
  setSelectedCategoryRoom,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    localStorage.setItem("selectedCategory2", selectedCategoryRoom);
  }, [selectedCategoryRoom]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (category: string) => {
    setSelectedCategoryRoom(category);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="property-roomDetails-container mobileroomclassdrop">
      <p className="roomclassextranet">Room class</p>
      <div className="propertyType-Cards">
        <Box
          style={{
            textAlign: "center",
            position: "relative",
            margin: "0 auto",
          }}
          sx={{
            backgroundColor: "#efefef",
            width: "100%",
          }}
          className="roomtypedropdown"
        >
          <Button
            className="roomType-select-category"
            onClick={handleClick}
            style={{
              color: "black",
              width: "100%",
            }}
          >
            {selectedCategoryRoom || "Select category"}{" "}
            <FontAwesomeIcon icon={faChevronDown} />
          </Button>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {dropdownItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => handleMenuItemClick(item)}
              sx={{
                backgroundColor: "#ffffff",
                padding: "5px 190px",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default RoomClassDrop;