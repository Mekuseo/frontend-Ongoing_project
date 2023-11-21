import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ArrowDown from "../../../svgs/ArrowDown";
import Input from "@mui/joy/Input";

const options = [
  "Reacon for Cancelling",
  "Change of plans",
  "I found a cheaper option",
  "Option didn’t meet initial expectations",
  "Due to sickness",
  "Others - Specify",
];

const CancelReasonDrop = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [cancelReason, setCancelReason] = React.useState("");

  const handleCancelReason = (e: any) => {
    setCancelReason(e.target.value);
  };

  const openCancelReason = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    _event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleCloseCancelReason = () => {
    setAnchorEl(null);
  };

  // Log the updated cancelReason when it changes
  React.useEffect(() => {
    console.log(cancelReason);
  }, [cancelReason]);

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "#FAFAFA" }}
      >
        <button className="cancelReason-btn">
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when the device is locked"
            aria-expanded={openCancelReason ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText secondary={options[selectedIndex]} />
          </ListItem>
          <ArrowDown />
        </button>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={openCancelReason}
        onClose={handleCloseCancelReason}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      {options[selectedIndex] === "Others - Specify" ? (
        <Input
          placeholder="Specify the reason"
          className="specifyReason"
          onChange={handleCancelReason}
        />
      ) : null}
    </div>
  );
};

export default CancelReasonDrop;
