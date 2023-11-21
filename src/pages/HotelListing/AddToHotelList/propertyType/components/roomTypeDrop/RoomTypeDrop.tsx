import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import "./RoomTypeDrop.css";

interface RoomTypeDropProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const RoomTypeDrop: React.FC<RoomTypeDropProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (category: string) => {
    onSelectCategory(category);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropdownItems = [
    "single",
    "Double",
    "Twin",
    "Studio Suite",
    "Quadruple",
    "Cottage",
    "Chalet",
    "Suite",
  ];

  return (
    <div className="property-roomDetails-container">
      <p>Type of room</p>
      <div
        className="propertyType-Cards roomTypeDrop-center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          style={{
            textAlign: "center",
            position: "relative",
            margin: "0 auto",
          }}
          sx={{
            backgroundColor: "#efefef",
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
            {selectedCategory || "Select category"} <ArrowDropDownIcon />
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

export default RoomTypeDrop;