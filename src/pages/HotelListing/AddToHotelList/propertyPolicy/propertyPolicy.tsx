import Navbar from "../../../../component/HomePage/header/header";
import "../../../../component/stay/ownsProfileBody/propertyAxis.css";
import "./propertyPolicy.css";
import "./propertyPolicyMobile.css"
import Footer from "../../../../component/HomePage/footer/Footer";
import { useEffect, useState } from "react";
import {
  Container,
  ButtonGroup,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { blueGrey, green } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import ScrollHeader from "../reusables/ScrollHeader";
import { Grid, Card, CardContent, FormControlLabel } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
// import amenitiesData from "../amenities/amenitiesData.json";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import axios from "axios";
import { baseURL } from "../../../../severs/auth";
import ButtonNavBar from "../reusables/ButtonNavBar";
import { UserContextProvider } from "../../../../utils/UserData";
// import amenityIconsSVGs from "../amenities/AmenityIconsSVGs.json";
// import amenitiesSVG from '../amenities/AmenityIconsSVGs.json';
import propertyPolicySVG from "./propertyPolicy.json";

// import ButtonNavBar from "../reusables/ButtonNavBar";

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[500]),
  backgroundColor: blueGrey[50],
  borderColor: blueGrey[200],
  borderRadius: 10,
  "&:hover": {
    backgroundColor: green[300],
    borderColor: blueGrey[300],
  },
}));

const StyledInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: 0,
      borderColor: blueGrey[50],
    },
    "&:hover fieldset": {
      borderColor: green[50],
    },
    "& input": {
      textAlign: "center",
      width: 100,
      color: green[700],
      fontSize: 50,
    },
  },
});

interface ImageObject {
  caption: string;
  imgPath: string;
  progress: number;
}

function PropertyPolicy() {
  const [] = useState<string[]>([]);
  // const [addedAmenities, setAddedAmenities] = useState<string[]>([]);

  // onload
  useEffect(() => {
    handleOnLoad();
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await handleOnLoad();
  //     // Any other asynchronous operations can be added here
  //   };

  //   fetchData();
  // }, []);

  const [isLoading, setIsLoading] = useState(true);

  // About property const values
  const [propertyName, setPropertyName] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [phoneNumberOneCode, setPhoneNumberOneCode] = useState<string>("");
  const [phoneNumberOne, setPhoneNumberOne] = useState<string>("");
  const [phoneNumberTwoCode, setPhoneNumberTwoCode] = useState<string>("");
  const [phoneNumberTwo, setPhoneNumberTwo] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [propertyDescription, setPropertyDescription] = useState<string>("");
  const [propertyProxy, setPropertyProxy] = useState<string[]>([]);
  const [propertyPolicy, setPropertyPolicy] = useState<string>("");
  const [propertyRating, setPropertyRating] = useState<string>("");
  const [propertyChannelManager, setPropertyChannelManager] =
    useState<string>("");
  const [propertyChain, setPropertyChain] = useState<string>("");
  const [propertyBuildingNumber, setPropertyBuildingNumber] =
    useState<string>("");
  const [propertyStreetAddress, setPropertyStreetAddress] =
    useState<string>("");
  const [locationTimeZone, setLocationTimeZone] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [propertyChannelManager1, setPropertyChannelManager1] =
    useState<string>("");
  const [propertyChain1, setPropertyChain1] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [plotNumber, setPlotNumber] = useState<string>("");
  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // Amenities const values
  const [checkedAmenities, setCheckedAmenities] = useState<any[]>([]);

  // Select property type const values
  const [numberBedrooms, setNumberBedrooms] = useState<number>(1);
  const [number_of_room_type, setNumber_Of_Room_Type] = useState<number>(1);
  const initialRoomTypeNames = Array.from(
    { length: number_of_room_type },
    () => ""
  );
  const [roomTypeName, setRoomTypeName] = useState(initialRoomTypeNames);
  const initialNumOfBedrooms = Array.from({ length: 2 }, () => 1);
  const [numOfBedrooms, setOfNumBedrooms] = useState(initialNumOfBedrooms);
  const [selectedCategory, onSelectCategory] = useState<string[]>([]);
  const [images, setImages] = useState<{ [key: number]: string[] }>({});
  const [selectedRoomTypeAmenities, setSelectedRoomTypeAmenities] = useState<{
    [key: number]: {
      amenity: string;
      subItem: string;
    }[];
  }>({});
  const [selectedCategoryRoom, setSelectedCategoryRoom] = useState<string[]>(
    []
  );
  const [nightlyRate, setNightlyRate] = useState<number[]>([]);
  const [weeklyDiscount, setWeeklyDiscount] = useState<number[]>([]);
  const [monthlyDiscount, setMonthlyDiscount] = useState<number[]>([]);
  const [roomDiscount, setRoomDiscount] = useState<number[]>([]);
  const [late_Night_Deal_Off, setLate_Night_Deal_Off] = useState<number[]>([]);
  const [automate_late_night_deals, setAutomate_Late_Night_Deals] = useState<
    boolean[]
  >([]);
  const [selectedDates, setSelectedDates] = useState<{ [key: number]: Date[] }>(
    {}
  );
  const [hasSelectedDates, setHasSelectedDates] = useState<boolean[]>([]);

  // Property policy type const values
  const [checkInTime, setCheckInTime] = useState("00:00 am");
  const [checkOutTime, setCheckOutTime] = useState("00:00 am");
  const [count, setCount] = useState(1);

  // Payment and Commission type const values
  const [option1Checked, setOption1Checked] = useState(false);
  const [option2Checked, setOption2Checked] = useState(false);
  const [option3Checked, setOption3Checked] = useState(false);
  const [selectedCancellation, setSelectedCancellation] = useState("");
  const [refundPercentage, setRefundPercentage] = useState("");
  const [selectedTaxOption, setSelectedTaxOption] = useState("");
  const [vatPercentage, setVatPercentage] = useState("");
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState<
    string[]
  >([]);
  const [agreeItBestPrice, setAgreeItBestPrice] = useState(false);

  // Photos type const values
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [exterior_photo, setExterior_Photo] = useState<ImageObject[]>([]);
  const [interiors_photo, setInteriors_Photo] = useState<ImageObject[]>([]);

  // Terms and Condition const values
  const [accept_terms_and_conditions, setAccept_Terms_and_Conditions] =
    useState(false);
  const [go_live, setGo_Live] = useState(false);
  //navigation
  const nextPage = "/commision";
  const previousPage = "/propertyType";

  // local variables
  const [, setFormattedCheckInTime] = useState<string>("");
  const [, setFormattedCheckOutTime] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [newAmenity, setNewAmenity] = useState("");
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );
  const handleChange = (event: { target: { value: any } }) => {
    const newValue = Math.max(Number(event.target.value), 1);
    setCount(newValue);
  };
  // const [formattedCheckInTime, setFormattedCheckInTime] = useState<string>("");
  // const [formattedCheckOutTime, setFormattedCheckOutTime] =
  //   useState<string>("");

  const handleCheckInTimeChange = (time: any) => {
    // Format the time into HH:mm format
    const formattedTime = time.format("HH:mm");
    setCheckInTime(formattedTime); // Update state with the formatted time
    setFormattedCheckInTime(formattedTime); // Update the formatted check-in time variable
  };

  const handleCheckOutTimeChange = (time: any) => {
    // Format the time into HH:mm format
    const formattedTime = time.format("HH:mm");
    setCheckOutTime(formattedTime); // Update state with the formatted time
    setFormattedCheckOutTime(formattedTime); // Update the formatted check-out time variable
  };

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

  const desiredCategories = [""];

  const [filteredAmenitiesData, setFilteredAmenitiesData] = useState(
    propertyPolicySVG.filter((item) => desiredCategories.includes(item.amenity))
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

  const handleCheckboxChange = (
    amenity: string,
    subItem: string,
    icon: string
  ) => {
    const isChecked = checkedAmenities.some(
      (item) => item.amenity === amenity && item.subItem === subItem
    );

    let updatedAmenities = [];

    if (isChecked) {
      updatedAmenities = checkedAmenities.filter(
        (item) => !(item.amenity === amenity && item.subItem === subItem)
      );
    } else {
      updatedAmenities = [...checkedAmenities, { amenity, subItem, icon }];
    }

    // Update the state variable
    setCheckedAmenities(updatedAmenities);
  };

  const handleOnLoad = async () => {
    try {
      setIsLoading(true);
      const userToken = localStorage.getItem("token") || "";
      const hotelId = localStorage.getItem("hotelId");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${userToken}`,
        },
      };

      const response = await axios.get(
        `${baseURL}hotels/hotels/${hotelId}/`,
        config
      );
      const responseData = response.data;
      // About property responseData values
      setPropertyName(responseData.hotel_name);
      setPropertyType(responseData.property_type);
      setEmailAddress(responseData.hotel_email);
      setPhoneNumberOneCode(responseData.hotel_phone_code_1);
      setPhoneNumberOne(responseData.hotel_phone_number_1);
      setPhoneNumberTwoCode(responseData.hotel_phone_code_2);
      setPhoneNumberTwo(responseData.hotel_phone_number_2);
      setPropertyDescription(responseData.describe_property);
      setPropertyProxy(responseData.proximity_to_major_attractions);
      setPropertyPolicy(responseData.property_policy);
      setPropertyChannelManager(responseData.have_channel_manager);
      setPropertyChain(responseData.is_part_of_hotel_chain);
      setPropertyChannelManager1(responseData.property_channel_manager);
      setPropertyChain1(responseData.property_chain_manager);
      setPropertyRating(responseData.rating);
      setPropertyBuildingNumber(responseData.location_building_number);
      setPropertyStreetAddress(responseData.location_building_address);
      setLocationTimeZone(responseData.location_timezone);
      setSelectedCountry(responseData.location_country);
      setSelectedState(responseData.location_state);
      setSelectedCity(responseData.location_city);
      setLocation(responseData.map_location);
      setPostalCode(responseData.postal_code);
      setPlotNumber(responseData.location_plot);

      // Amenities responseData values
      setCheckedAmenities(responseData.amenities);

      // Select property type responseData values
      setRoomTypeName(responseData.room_types_name);
      setOfNumBedrooms(responseData.room_type_capacity);
      onSelectCategory(responseData.type_of_room);
      setImages(responseData.room_types_images);
      setSelectedRoomTypeAmenities(responseData.room_amenities_in_room_type);
      setSelectedCategoryRoom(responseData.room_class_of_room_type);
      setOption1Checked(responseData.full_payment);
      setOption2Checked(responseData.pay_half);
      setOption3Checked(responseData.pay_at_hotel);
      setSelectedCancellation(responseData.cancellation_policy_time);
      setRefundPercentage(responseData.cancellation_policy_percentage);
      setSelectedTaxOption(responseData.vat);
      setVatPercentage(responseData.vat_percentage);
      setSelectedPaymentMethods(responseData.full_payment_info);
      setAgreeItBestPrice(responseData.agree_is_best_price);
      setNightlyRate(responseData.room_night_rates_of_room_type);
      setWeeklyDiscount(responseData.room_weekly_rates_off_of_room_type);
      setMonthlyDiscount(responseData.room_monthly_rates_off_of_room_type);
      setRoomDiscount(responseData.room_guests_deal_off_of_room_type);
      setLate_Night_Deal_Off(responseData.late_night_deal_off_of_room_type);
      setAutomate_Late_Night_Deals(responseData.automate_late_night_deals);
      setSelectedDates(responseData.late_night_deals_time);
      setHasSelectedDates(responseData.has_late_night_deals_time);

      // Property policy type responseData values
      setCount(responseData.age_restriction);
      setCheckInTime(responseData.check_in_time);
      setCheckOutTime(responseData.check_out_time);

      // Payment and Commission type responseData values
      setNumber_Of_Room_Type(responseData.number_rooms_type);
      setNumberBedrooms(responseData.number_of_rooms);

      // Photos type responseData values
      setUploadedImages(responseData.main_photo);
      setExterior_Photo(responseData.exterior_photo);
      setInteriors_Photo(responseData.interiors_photo);

      // Terms and Condition responseData values
      setAccept_Terms_and_Conditions(responseData.accept_terms_and_conditions);
      setGo_Live(responseData.go_live);

      setIsLoading(false);
      console.log(response);
    } catch (error) {
      setIsLoading(false);
      console.log("Error fetching user data:", error);
    }
  };

  return (
    <div>
      <UserContextProvider>
        <Navbar />
        <div className="content">
          <ScrollHeader />
          <br />
          <p className="header">Property policy</p>
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <CircularProgress />{" "}
            </div>
          ) : (
            <>
              <div className="mainPolicy">
                <div className="propertyPolicy-timepicker-box">
                  <div className="propertyPolicy-flex">
                    <p>When can guests check-in?</p>
                    <div className="propertyPolicy-timepicker-container">
                      <div className="propertyPolicy-timepicker-left">
                        {/* <h1>{checkOutTime}</h1> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            components={["TimePicker"]}
                            sx={{
                              display: "inline-block",
                            }}
                          >
                            <Typography
                              variant="h5"
                              style={{
                                fontFamily: "Volkhov",
                                fontWeight: "400",
                              }}
                              className="propertypolicytime"
                            >
                              Time
                            </Typography>

                            <TimePicker
                              onChange={handleCheckInTimeChange}
                              value={checkInTime}
                              sx={{
                                "& .MuiSvgIcon-root": {
                                  color: "white",
                                },
                                "& .MuiFormLabel-root": {
                                  color: "white",
                                },
                                "& .MuiInputBase-root": {
                                  color: "white",
                                  backgroundColor: "#6e9e76",
                                  fontFamily: "volkhov, sans-serif",
                                  borderRadius: "15px",
                                  border: "1px solid #6e9e76",
                                },
                                "& .MuiStack-root": {
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                },
                                "& .MuiButtonBase-root": {
                                  width: "30px",
                                },
                              }}
                            />
                            <div className="checkinouttimeproppoli">
                              {checkInTime}
                            </div>
                          </DemoContainer>
                        </LocalizationProvider>
                      </div>
                    </div>
                  </div>

                  <div className="propertyPolicy-flex">
                    <p>When do guests check-out?</p>
                    <div className="propertyPolicy-timepicker-container">
                      <div className="propertyPolicy-timepicker-right">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            components={["TimePicker"]}
                            sx={{
                              display: "inline-block",
                            }}
                          >
                            <Typography
                              variant="h5"
                              style={{
                                fontFamily: "Volkhov",
                                fontWeight: "400",
                              }}
                              className="propertypolicytime"
                            >
                              Time
                            </Typography>
                            <TimePicker
                              value={checkOutTime}
                              onChange={handleCheckOutTimeChange}
                              sx={{
                                "& .MuiSvgIcon-root": {
                                  color: "white",
                                  border: "none",
                                },
                                "& .MuiFormLabel-root": {
                                  color: "white",
                                  border: "none",
                                },
                                "& .MuiInputBase-root": {
                                  color: "white",
                                  backgroundColor: "#6e9e76",
                                  fontFamily: "volkhov, sans-serif",
                                  borderRadius: "15px",
                                  borderColor: "none",
                                },
                                "& .MuiStack-root": {
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  border: "none",
                                },
                                "& .MuiButtonBase-root": {
                                  width: "30px",
                                  height: "50px",
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "yellow",
                                },
                              }}
                              className="timepickerproppolicyextranet"
                            />
                            <div className="checkinouttimeproppoli">
                              {checkOutTime}
                            </div>
                          </DemoContainer>
                        </LocalizationProvider>
                      </div>
                    </div>
                  </div>
                </div>

                <center>
                  <p className="propertyPolicy-restrictionTitle">
                    Age restriction
                  </p>
                  <p className="propertyPolicy-restrictionSubtitle">
                    Minimum check in range.
                  </p>

                  <Container>
                    <ButtonGroup className="mobilepropertysumbox">
                      <div className="propertyPolicy-sumBox">
                        <StyledButton
                          className="sumButtons"
                          onClick={() => setCount((prev) => prev - 1)}
                          disabled={count === 0}
                          sx={{
                            "& .MuiSvgIcon-root": {
                              color: "#929292",
                            },
                          }}
                        >
                          <RemoveIcon fontSize="small" />
                        </StyledButton>
                        <StyledInput
                          size="small"
                          onChange={handleChange}
                          value={count}
                          className="propertypolicyex"
                        />
                        <StyledButton
                          className="sumButtons"
                          onClick={() => setCount((prev) => prev + 1)}
                          sx={{
                            "& .MuiSvgIcon-root": {
                              color: "#929292",
                            },
                          }}
                        >
                          <AddIcon fontSize="small" />
                        </StyledButton>
                      </div>
                    </ButtonGroup>
                  </Container>
                </center>

                <div className="ageRestriction">
                  <Grid container spacing={2}>
                    {filteredAmenitiesData.map((amenity, index) => (
                      <Grid item xs={12} sm={12} md={12} key={index}>
                        <div className="extranetAmenities">
                          <Card
                            style={{
                              marginTop: "25px",
                              backgroundColor: "#FF000000",
                              boxShadow: "none",
                            }}
                          >
                            <CardContent>
                              <Grid container>
                                {amenity.subItems.map((item, i) => (
                                  <Grid
                                    item
                                    key={i}
                                    style={{ marginBottom: "25px" }}
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
                                          checked={checkedAmenities.some(
                                            (checkedItem) =>
                                              checkedItem.amenity ===
                                                amenity.amenity &&
                                              checkedItem.subItem === item.name
                                          )}
                                          onChange={() =>
                                            handleCheckboxChange(
                                              amenity.amenity,
                                              item.name,
                                              item.icon
                                            )
                                          }
                                        />
                                      }
                                      label={item.name}
                                    />
                                    <img
                                      src={item.icon}
                                      alt=""
                                      style={{ width: "20px" }}
                                    />
                                  </Grid>
                                ))}
                                <div
                                  style={{
                                    fontSize: "20px",
                                    fontFamily: "raleway, sans-serif",
                                    color: "#383737",
                                  }}
                                >
                                  <button
                                    style={{
                                      backgroundColor: "#6E9E76",
                                      border: "none",
                                      color: "#FFF",
                                    }}
                                    className="addmoreamenitiespolicy"
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
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
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
                          onClick={handleEnter}
                        >
                          Enter
                        </Button>
                      </div>
                    </Box>
                  </Modal>
                </div>
              </div>
              <ButtonNavBar
                // About property prob values
                propertyName={propertyName}
                propertyType={propertyType}
                emailAddress={emailAddress}
                phoneNumberOneCode={phoneNumberOneCode}
                phoneNumberOne={phoneNumberOne}
                phoneNumberTwoCode={phoneNumberTwoCode}
                phoneNumberTwo={phoneNumberTwo}
                propertyChannelManager={propertyChannelManager}
                propertyChain={propertyChain}
                propertyDescription={propertyDescription}
                propertyProxy={propertyProxy}
                propertyPolicy={propertyPolicy}
                propertyRating={propertyRating}
                propertyBuildingNumber={propertyBuildingNumber}
                propertyStreetAddress={propertyStreetAddress}
                locationTimeZone={locationTimeZone}
                selectedCountry={selectedCountry}
                selectedState={selectedState}
                selectedCity={selectedCity}
                propertyChannelManager1={propertyChannelManager1}
                propertyChain1={propertyChain1}
                location={location}
                postalCode={postalCode}
                plotNumber={plotNumber}
                // Amenities prob values
                selectedPopularAmenities={checkedAmenities}
                // Select property type prob values
                numberBedrooms={numberBedrooms}
                roomType={number_of_room_type}
                room_type_capacity={numOfBedrooms}
                type_of_room={selectedCategory}
                roomTypeImages={images}
                room_amenities_in_room_type={selectedRoomTypeAmenities}
                room_class_of_room_type={selectedCategoryRoom}
                roomTypeName={roomTypeName}
                nightlyRate={nightlyRate}
                weeklyDiscount={weeklyDiscount}
                monthlyDiscount={monthlyDiscount}
                roomDiscount={roomDiscount}
                late_Night_Deal_Off={late_Night_Deal_Off}
                automate_late_night_deals={automate_late_night_deals}
                selectedDates={selectedDates}
                hasSelectedDates={hasSelectedDates}
                // Property policy type prob values
                age_restriction={count}
                check_in_time={checkInTime}
                check_out_time={checkOutTime}
                // Payment and Commission type prob values
                option1Checked={option1Checked}
                option2Checked={option2Checked}
                option3Checked={option3Checked}
                selectedCancellation={selectedCancellation}
                selectedPaymentMethods={selectedPaymentMethods}
                refundPercentage={refundPercentage}
                selectedTaxOption={selectedTaxOption}
                vatPercentage={vatPercentage}
                agreeItBestPrice={agreeItBestPrice}
                // Photos type prob values
                exterior_photo={exterior_photo}
                interiors_photo={interiors_photo}
                uploadedImages={uploadedImages}
                // Terms and Condition prob values
                accept_terms_and_conditions={accept_terms_and_conditions}
                go_live={go_live}
                // navigation
                nextPage={nextPage}
                previousPage={previousPage}
              />
            </>
          )}
        </div>

        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default PropertyPolicy;
