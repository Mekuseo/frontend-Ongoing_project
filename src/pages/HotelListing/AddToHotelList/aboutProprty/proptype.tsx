// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import propertyimage from "../../../../assets/pics/pana.png";

interface PropertyTypeProps {
  propertyType: string;
  setPropertyType: (propertyType: string) => void;
}

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
  "Apartments",
  "Hotel",
  "Guest house",
  "Hostel",
  "Serviced Apartments",
  "Inn",
  "Bungalow",
  "Lodge",
];

const PropType: React.FC<PropertyTypeProps> = ({
  setPropertyType,
  propertyType,
}) => {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const changeHandling = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPropertyType(typeof value === "string" ? value : value.join(", "));
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <p className="subheadTworeuse propertytypeabpropheader mobileproptype">Property type</p>
      <p className="subheadreuse">Please select just one property type.</p>
      <div className="containerTwo">
        <img
          src={propertyimage}
          alt=""
          className="propertyType-img"
          style={{ float: "left" }}
        />
        <div className="dropcontainer">
          <FormControl className="selectCategoryABProp">
            <Select
              className="dropdownContainer"
              displayEmpty
              value={personName}
              onChange={changeHandling}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return propertyType || "Select Category";
                }
                return selected.join(", ");
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value=""></MenuItem>
              {names.map((name) => (
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

export default PropType;
