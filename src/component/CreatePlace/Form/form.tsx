// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from "react";
import Picture from "./picture";
import Category from "./category";
import Location from "./location";
import About from "./about";
import Time from "./time";
import AboutPlace from "../About/about";
import NameFee from "./nameFee";
import PlaceSlider from "../Modal/slider";

const Form: React.FC = () => {
  const [isContentVisible, setContentVisible] = useState(false);
  const [selectedCategory, setSelectedItem] = useState<string>("");
  const [placeName, setPlaceName] = useState<string>("");
  const [uploadedImageSrc, setUploadedImageSrc] = useState<string | null>(
    null
  );
  const [highlightValue, setHighlightValue] = useState<string>("");
  const [streetName, setStreetName] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [stateName, setStateName] = useState<string>("");
  const [houseNumber, setHouseNumber] = useState<string>("");
  const [countryName, setCountryName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [entryFee, setEntryFee] = useState<number | undefined>(undefined);
  const [formattedStartTime, setFormattedStartTime] = useState<string>('');
  const [formattedEndTime, setFormattedEndTime] = useState<string>('');

  const hasRequiredFields =
    selectedCategory &&
    placeName &&
    uploadedImageSrc &&
    highlightValue &&
    streetName &&
    cityName &&
    stateName &&
    countryName &&
    name &&
    entryFee;

  const toggleContentVisibility = () => {
    if (
      selectedCategory &&
      placeName &&
      uploadedImageSrc &&
      highlightValue &&
      streetName &&
      cityName &&
      stateName &&
      houseNumber &&
      countryName
    ) {
      setContentVisible(!isContentVisible);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleImageUpload = (imageSrc: string) => {
    setUploadedImageSrc(imageSrc);
  };

  const handleHighlightChange = (newHighlight: string) => {
    setHighlightValue(newHighlight);
  };

  const handleStreetNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStreetName(event.target.value);
  };

  const handleHouseNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHouseNumber(event.target.value);
  };

  const handleCityNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCityName(event.target.value);
  };

  const handleStateNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStateName(event.target.value);
  };

  const handleCountryNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCountryName(event.target.value);
  };

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleEntryFeeChange = (entryFee: number | undefined) => {
    setEntryFee(entryFee);
  };

  return (
    <>
      <div className="formEventCont">
        <h1>Add a place</h1>
        <br />
        <Category 
        setSelectedItem={setSelectedItem} 
        setPlaceName={setPlaceName} 
        />
        <Picture onImageUpload={handleImageUpload} />
        <Location
          streetName={streetName}
          cityName={cityName}
          stateName={stateName}
          countryName={countryName}
          onHouseNumberChange={handleHouseNumberChange}
          houseNumber={houseNumber}
          onStreetNameChange={handleStreetNameChange}
          onCityNameChange={handleCityNameChange}
          onStateNameChange={handleStateNameChange}
          onCountryNameChange={handleCountryNameChange}
        />
        <About onHighlightChange={handleHighlightChange} />
        <Time
           formattedStartTime={formattedStartTime}
           formattedEndTime={formattedEndTime}
           setFormattedStartTime={setFormattedStartTime}
           setFormattedEndTime={setFormattedEndTime}
        />
        <NameFee
          onNameChange={handleNameChange}
          onEntryFeeChange={handleEntryFeeChange}
        />
        
        <div className="centButtons">
          <button className="activeColor" onClick={toggleContentVisibility}>
            Preview this place
          </button>
        </div>
        {isContentVisible && (
          <AboutPlace
            selectedCategory={selectedCategory}
            placeName={placeName}
            uploadedImageSrc={uploadedImageSrc}
            highlightValue={highlightValue}
            streetName={streetName}
            cityName={cityName}
            houseNumber={houseNumber}
            stateName={stateName}
            countryName={countryName}
            name={name}
            entryFee={entryFee}
            formattedStartTime={formattedStartTime}
            formattedEndTime={formattedEndTime}
          />
        )}
      </div>

      
    </>
  );
};

export default Form;
