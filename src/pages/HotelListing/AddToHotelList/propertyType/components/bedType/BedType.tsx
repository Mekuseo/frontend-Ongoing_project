import React, { useState } from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import propertyTypeDataList from "./PropertyTypeDataList.json";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import "../roomDetails/RoomDetails.css"

// interface BedTypeProps {
//   checkboxComponent: JSX.Element;
//   selectedRoomTypeAmenities: any;
//   setSelectedRoomTypeAmenities: (value: any) => void;
// }

const BedType: React.FC<{
  checkboxComponent: JSX.Element;
  selectedRoomTypeAmenities: any[];
  setSelectedRoomTypeAmenities: (valueType: any[]) => void;
}> = () => {

  const [open, setOpen] = useState(false);
  const [newAmenity, setNewAmenity] = useState("");
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  const desiredCategories = [
    "Type of bed",
    "Room amenities",
    "Additional deals on this room type",
  ];

  const [filteredAmenitiesData, setFilteredAmenitiesData] = useState(
    propertyTypeDataList.filter((item) => desiredCategories.includes(item.amenity))
  );

  const handleOpen = (index: number) => {
    setSelectedCardIndex(index);
    setOpen(true);
  };

  const handleEnter = () => {
    if (selectedCardIndex !== null && newAmenity.trim() !== "") {
      setFilteredAmenitiesData((prevFilteredAmenitiesData) => {
        return prevFilteredAmenitiesData.map((amenity, index) => {
          if (index === selectedCardIndex) {
            const newSubItem = {
              name: newAmenity,
              icon: "some-icon-value",
            };
            return {
              ...amenity,
              subItems: [...amenity.subItems, newSubItem],
            };
          }
          return amenity;
        });
      });
    }
  
    setNewAmenity("");
    setOpen(false);
  };
  

  const handleCheckboxChange = (amenity: string, subItem: string, icon: string) => {
    const isChecked = selectedItems.some(
      (item) => item.amenity === amenity && item.subItem === subItem
    );
  
    let updatedItems = [...selectedItems];
  
    if (isChecked) {
      updatedItems = selectedItems.filter(
        (item) => item.amenity !== amenity || item.subItem !== subItem
      );
    } else {
      const newAmenityItem = {
        amenity,
        subItem,
        icon,
      };
  
      updatedItems.push(newAmenityItem);
    }
  
    setSelectedItems(updatedItems);
    console.log(updatedItems);
  };
  

  return (
    <div>
      <Grid container spacing={2}>
        {filteredAmenitiesData.map((amenity, index) => (
          <Grid item xs={12} sm={12} md={12} key={index}>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Volkhov, sans-serif",
              }}
              className="bedtypeproptypeheader"
            >
              {amenity.amenity}
            </Typography>
            {amenity["amenity-subtitle"] && (
              <Typography
                style={{
                  fontFamily: "raleway, sans-serif",
                }}
                className="amenitysubheader"
              >
                {amenity["amenity-subtitle"]}
              </Typography>
            )}
            <div className="extranetAmenities">
              <Card>
                <CardContent>
                  <Grid container className="extranetamenitiesindcont">
                    {amenity.subItems &&
                      amenity.subItems.map((item, i) => (
                        <Grid
                          item
                          key={i}
                          className="propertyPolicyCardAmenities"
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                color="success"
                                style={{
                                  fontSize: "25px",
                                  fontFamily: "raleway, sans-serif",
                                }}
                                checked={selectedItems.some(
                                  (checkedItem) =>
                                    checkedItem.amenity === amenity.amenity &&
                                    checkedItem.subItem === item.name
                                )}
                                onChange={() =>
                                  handleCheckboxChange(amenity.amenity, item.name, item.icon)
                                }
                              />
                            }
                            label={item.name}
                          />
                          <img src={item.icon} style={{ width: "20px" }} />
                        </Grid>
                      ))}

                    <div
                      style={{
                        fontFamily: "raleway, sans-serif",
                        color: "#383737",
                      }}
                      className="addmoredivamenities"
                    >
                      <button
                        // variant="contained"
                        style={{
                          backgroundColor: "#6E9E76",
                          border: "none",
                          color: "#FFF",
                        }}
                        className="addmoreamenities"
                        onClick={() => handleOpen(index)}
                      >
                        +
                      </button>
                      Add More
                    </div>
                  </Grid>
                </CardContent>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add an Amenity below then press "Enter"
          </Typography>
          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              id="outlined-basic"
              label="Add an Amenity"
              variant="outlined"
              value={newAmenity}
              onChange={(e) => setNewAmenity(e.target.value)}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "#6E9E76", color: "white" }}
              onClick={() => {
                handleEnter();
              }}
            >
              Enter
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BedType;
