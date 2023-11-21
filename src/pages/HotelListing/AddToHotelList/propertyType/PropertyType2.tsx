// import { useEffect, useState } from "react";
// import Navbar from "../../../../component/HomePage/header/header";
// import ScrollHeader from "../reusables/ScrollHeader";
// import RoomDetails from "./components/roomDetails/RoomDetails";
// import RoomType from "./components/roomType/RoomType";
// import RoomTypeName from "./components/roomTypeNumber/roomTypeNumber";
// import React from "react";
// import RoomCapacity from "../proptrytype/RoomCapacity";
// import RoomTypeDrop from "./components/roomTypeDrop/RoomTypeDrop";
// import BedType from "../propertyType/components/bedType/BedType";
// import amenitiesData from "../amenities/amenitiesData.json";
// import RoomClassDrop from "./components/roomClassDrop/RoomClassDrop";
// import RoomRates from "./components/roomRates/RoomRates";
// import NightDeals from "./components/nightDeals/NightDeals";


// const PropertyType2 = () => {
//   const [roomTypes, setRoomTypes] = useState<
//     { id: number; capacity: number; roomTypeName: string }[]
//   >([]);
//   const [numBedrooms, setNumBedrooms] = useState(0);
//   const [numBedroomsRoomType, setNumBedroomsRoomType] = useState(0);
//   const [roomTypeName, setRoomTypeName] = useState("");
//   const [capacity, setCapacity] = useState(0);
//   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
//   const [selectedCategory, setSelectedCategory] = useState<string>("");
//   const [openBedType, setOpenBedType] = useState(false);
//   const [newAmenity, setNewAmenity] = useState("");
//   const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
//     null
//   );
//   const [checkedAmenities, setCheckedAmenities] = useState<any[]>([]);
//   const [selectedCategoryRoomClass, setSelectedCategoryRoomClass] =
//     useState<string>("");
//   const [nightlyRate, setNightlyRate] = useState<number | null>(null);
//   const [weeklyDiscount, setWeeklyDiscount] = useState<number | null>(null);
//   const [monthlyDiscount, setMonthlyDiscount] = useState<number | null>(null);
//   const [roomDiscount, setRoomDiscount] = useState<number | null>(null);
//   const [discount, setDiscount] = useState<number | null>(null);
//   const [discountedPrice, setDiscountedPrice] = useState<number | null>(null);
//   const [selectedDatesFormatted, setSelectedDatesFormatted] = useState<
//     string[]
//   >([]);
//   const [availableRooms, setAvailableRooms] = useState(0);

//   const handleMenuItemClickRoomClass = (category: string) => {
//     setSelectedCategoryRoomClass(category);
//     setAnchorEl(null);
//   };
//   const desiredCategories = [
//     "Type of bed",
//     "Room amenities",
//     "Additional deals on this room type",
//   ];

//   const filteredAmenitiesData = amenitiesData.filter((item) =>
//     desiredCategories.includes(item.amenity)
//   );

//   // const [checkedItems, setCheckedItems] = useState<boolean[]>(
//   //   Array(filteredAmenitiesData.length).fill(false)
//   // );

//   const handleCheckboxChange = (amenity: string, subItem: string) => {
//     const isChecked = checkedAmenities.some(
//       (item) => item.amenity === amenity && item.subItem === subItem
//     );
//     if (isChecked) {
//       setCheckedAmenities((prev) =>
//         prev.filter(
//           (item) => !(item.amenity === amenity && item.subItem === subItem)
//         )
//       );
//     } else {
//       setCheckedAmenities((prev) => [...prev, { amenity, subItem }]);
//     }
//     setCheckedAmenities((updatedAmenities) => {
//       return updatedAmenities;
//     });
//   };

//   const handleCloseBedType = () => setOpenBedType(false);

//   const handleOpenBedType = (index: number) => {
//     setSelectedCardIndex(index);
//     setOpenBedType(true);
//   };

//   const handleEnterBedType = () => {
//     if (selectedCardIndex !== null && newAmenity.trim() !== "") {
//       filteredAmenitiesData.forEach((amenity, index) => {
//         if (index === selectedCardIndex) {
//           amenity.subItems.push(newAmenity);
//         }
//       });
//     }

//     setNewAmenity("");
//     setOpenBedType(false);
//   };

//   const handleRoomTypeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     // Specify the event type
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuItemClick = (category: string) => {
//     // Specify the parameter type
//     setSelectedCategory(category);
//     setAnchorEl(null);
//   };

//   const handleRoomTypeClose = () => {
//     setAnchorEl(null);
//   };

//   const dropdownItems = [
//     "single",
//     "Double",
//     "Twin",
//     "Studio Suite",
//     "Quadruple",
//     "Cottage",
//     "Chalet",
//     "Suite",
//   ];
//   const incCapacity = () => {
//     setCapacity(Number(capacity) + 1);
//   };
//   const decCapacity = () => {
//     if (capacity > 0) {
//       setCapacity(capacity - 1);
//     }
//   };

//   const handleIncrementRoomAvailability = () => {
//     setAvailableRooms(Number(availableRooms) + 1);
//   };

//   const handleDecrementRoomAvailability = () => {
//     if (availableRooms > 0) {
//       setAvailableRooms(availableRooms - 1);
//     }
//   };

//   const handleInputChangeRoomAvailability = (event: {
//     target: { value: string };
//   }) => {
//     setAvailableRooms(parseInt(event.target.value));
//   };

//   const changeCapacity = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCapacity(parseFloat(e.target.value));
//   };

//   const handleIncrement = () => {
//     setNumBedrooms(numBedrooms + 1);
//   };

//   const handleDecrement = () => {
//     if (numBedrooms > 0) {
//       setNumBedrooms(numBedrooms - 1);
//     }
//   };

//   const handleInputChange = (event: { target: { value: string } }) => {
//     setNumBedrooms(parseInt(event.target.value));
//   };

//   const handleIncrementRoomType = () => {
//     setNumBedroomsRoomType(numBedroomsRoomType + 1);
//     const newRoomType = {
//       id: roomTypes.length + 1, // Assign a unique id for each room type
//       capacity: 0,
//       roomTypeName: "",
//       // ... (other properties unique to each room type)
//     };
//     setRoomTypes([...roomTypes, newRoomType]);
//   };

//   const updateRoomTypes = () => {
//     const updatedRoomTypes = [];
//     for (let i = 1; i <= numBedroomsRoomType; i++) {
//       updatedRoomTypes.push({
//         id: i,
//         capacity: 0,
//         roomTypeName: "",
//         // ... (other properties unique to each room type)
//       });
//     }
//     setRoomTypes(updatedRoomTypes);
//   };

//   useEffect(() => {
//     updateRoomTypes(); // Initial update
//   }, [numBedroomsRoomType]);

//   const handleDecrementRoomType = () => {
//     if (numBedroomsRoomType > 0) {
//       setNumBedroomsRoomType(numBedroomsRoomType - 1);
//     }
//   };

//   const handleInputChangeRoomType = (event: { target: { value: string } }) => {
//     const newNumBedrooms = parseInt(event.target.value);
//     setNumBedroomsRoomType(newNumBedrooms);
//   };

//   const handleRoomTypeNameChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setRoomTypeName(event.target.value);
//   };

//   const inputWidth = `${numBedrooms.toString().length * 20 + 40}px`;
//   const inputWidthRoomType = `${
//     numBedroomsRoomType.toString().length * 20 + 40
//   }px`;

//   console.log(checkedAmenities);
//   return (
//     <div>
//       <Navbar />
//       <ScrollHeader />
//       <div>
//         <h1>Select Property Type</h1>
//         <RoomDetails
//           handleIncrement={handleIncrement}
//           handleDecrement={handleDecrement}
//           handleInputChange={handleInputChange}
//           inputWidth={inputWidth}
//           numBedrooms={numBedrooms}
//         />
//         <RoomType
//           handleIncrementRoomType={handleIncrementRoomType}
//           handleDecrementRoomType={handleDecrementRoomType}
//           handleInputChangeRoomType={handleInputChangeRoomType}
//           inputWidthRoomType={inputWidthRoomType}
//           numBedroomsRoomType={numBedroomsRoomType}
//         />
//         {roomTypes.map((roomType) => (
//           <div className="roomTypePack" key={roomType.id}>
//             <h2>{roomTypeName.toLocaleUpperCase()}</h2>
//             <RoomTypeName
//               handleRoomTypeNameChange={handleRoomTypeNameChange}
//               roomTypeName={roomTypeName}
//             />
//             <RoomCapacity
//               incCapacity={incCapacity}
//               decCapacity={decCapacity}
//               changeCapacity={changeCapacity}
//               capacity={capacity}
//             />
//             <RoomTypeDrop
//               selectedCategory={selectedCategory}
//               anchorEl={anchorEl}
//               handleRoomTypeClick={handleRoomTypeClick}
//               handleMenuItemClick={handleMenuItemClick}
//               handleRoomTypeClose={handleRoomTypeClose}
//               dropdownItems={dropdownItems}
//             />
//             <BedType
//               filteredAmenitiesData={filteredAmenitiesData}
//               handleOpenBedType={handleOpenBedType}
//               openBedType={openBedType}
//               handleCloseBedType={handleCloseBedType}
//               newAmenity={newAmenity}
//               setNewAmenity={setNewAmenity}
//               handleEnterBedType={handleEnterBedType}
//               handleCheckboxChange={handleCheckboxChange}
//               checkedAmenities={checkedAmenities}
//             />
//             <RoomClassDrop
//               handleMenuItemClickRoomClass={handleMenuItemClickRoomClass}
//               selectedCategoryRoomClass={selectedCategoryRoomClass}
//             />
//             <RoomRates
//               nightlyRate={nightlyRate}
//               setNightlyRate={setNightlyRate}
//               weeklyDiscount={weeklyDiscount}
//               setWeeklyDiscount={setWeeklyDiscount}
//               monthlyDiscount={monthlyDiscount}
//               setMonthlyDiscount={setMonthlyDiscount}
//               roomDiscount={roomDiscount}
//               setRoomDiscount={setRoomDiscount}
//             />
//             <NightDeals
//               nightlyRate={nightlyRate}
//               discount={discount}
//               setDiscount={setDiscount}
//               discountedPrice={discountedPrice}
//               setDiscountedPrice={setDiscountedPrice}
//               setSelectedDatesFormatted={setSelectedDatesFormatted}
//               handleIncrementRoomAvailability={handleIncrementRoomAvailability}
//               handleDecrementRoomAvailability={handleDecrementRoomAvailability}
//               handleInputChangeRoomAvailability={
//                 handleInputChangeRoomAvailability
//               }
//               availableRooms={availableRooms}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PropertyType2;
