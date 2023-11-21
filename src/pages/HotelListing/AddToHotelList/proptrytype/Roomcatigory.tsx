import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const roomtypes = [
  "Single",
  "Double",
  "Twin",
  "Studio suite",
  "Quadruple",
  "Cottage",
  "Chalet",
  "Suite",
];

const Roomcatigory = () => {
  const [roomType, setRoomType] = React.useState<string[]>([]);

  const changeHandle = (event: SelectChangeEvent<typeof roomType>) => {
    const {
      target: { value },
    } = event;
    setRoomType(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div>
      <p className="propTypeHeaderreused">Type of room</p>

      <br />
      <br />

      <div className="typeContainer">
        <div className="dropcontainer">
          <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <Select
              className="dropdownContainer"
              displayEmpty
              value={roomType}
              onChange={changeHandle}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <>Select Category</>;
                }

                return selected.join(", ");
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                <em>Select Category</em>
              </MenuItem>
              {roomtypes.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Roomcatigory;
