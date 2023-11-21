/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

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

const names = [
  "Business",
  "Classic",
  "City",
  "Comfort",
  "Deluxe",
  "Design",
  "Luxury",
  "Panoramic",
  "Elite",
  "Family",
  "Exclusive",
  "Executive",
  "Grand",
  "Honeymoon",
  "Junior",
  "Presidential",
];

const RoomClass = () => {
  const [roomClass, setRoomClass] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof roomClass>) => {
    const {
      target: { value },
    } = event;
    setRoomClass(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div>
      <p className="propTypeHeaderreused">Room class</p>

      <br />
      <br />

      <div className="typeContainer">
        <div className="dropcontainer">
          {/* <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <Select
              className="dropdownContainer"
              displayEmpty
              value={roomClass}
              onChange={handleChange}
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
                <>Select Category</>
              </MenuItem>
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
        </div>
      </div>
    </div>
  );
};

export default RoomClass;
