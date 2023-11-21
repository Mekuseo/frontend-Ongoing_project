// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import './form.css';

import Category from "./category";
import Event from "./event";
import Dates from "./dates";
import Time from "./time";
import TextBox from "./textBox";
import Pictures from "./pictures";
import Ticketing from "./ticketing";
import HangOut from "../Hangout/hangOut";

const Form: React.FC = () => {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    if (
        selectedCategory &&
        eventTitle &&
        streetName &&
        cityName &&
        stateName &&
        houseNumber &&
        countryName &&
        uploadedImageSrc 
      ) {
        setContentVisible(!isContentVisible);
      } else {
        alert('Please fill in all required fields.');
      }
  };

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [eventTitle, setEventTitle] = useState<string>('');
  const [streetName, setStreetName] = useState<string>('');
  const [cityName, setCityName] = useState<string>('');
  const [stateName, setStateName] = useState<string>('');
  const [houseNumber, setHouseNumber] = useState<string>('');
  const [countryName, setCountryName] = useState<string>('');
  const [highlightValue, setHighlightValue] = useState<string>('');
  const [infoValue, setInfoValue] = useState<string>('');
  const [selectedDateString, setSelectedDateString] = useState<string>('');
  const [dateRangeString, setDateRangeString] = useState<string>('');
  const [formattedStartTime, setFormattedStartTime] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [uploadedImageSrc, setUploadedImageSrc] = useState<string | null>(null);
  const [showFileInput1, setShowFileInput1] = useState(false);
  const [showFileInput2, setShowFileInput2] = useState(false);
  const [amountPerPerson, setAmountPerPerson] = useState<number | null>(null);

  const handleCategorySelect = (category: string, subcategory: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
  };

  const handleStreetNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreetName(event.target.value);
  };

  const handleHouseNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHouseNumber(event.target.value);
  };

  const handleCityNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const handleStateNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateName(event.target.value);
  };

  const handleCountryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(event.target.value);
  };

  const handleEventTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEventTitle(event.target.value);
  };

  const handleHighlightChange = (newHighlight: string) => {
    setHighlightValue(newHighlight);
  };

  const handleInfoChange = (newInfo: string) => {
    setInfoValue(newInfo);
  };

  const handleSelectedDateChange = (dateString: string) => {
    setSelectedDateString(dateString);
  };

  const handleDateRangeChange = (dateRangeString: string) => {
    setDateRangeString(dateRangeString);
  };

  const handleImageUpload = (imageSrc: string) => {
    setUploadedImageSrc(imageSrc);
  };

  console.log("showFileIn1:", showFileInput1);
  console.log("showFileInput2:", showFileInput2);
  console.log("amountPerPerson:", amountPerPerson);

  return (
    <>
      <div className="formEventCont">
        <h1>Create an event</h1>
        <Category onCategorySelect={handleCategorySelect} />
        <Event
          eventTitle={eventTitle}
          streetName={streetName}
          cityName={cityName}
          stateName={stateName}
          countryName={countryName}
          onEventTitleChange={handleEventTitleChange}
          onHouseNumberChange={handleHouseNumberChange}
          houseNumber={houseNumber}
          onStreetNameChange={handleStreetNameChange}
          onCityNameChange={handleCityNameChange}
          onStateNameChange={handleStateNameChange}
          onCountryNameChange={handleCountryNameChange}
        />
        <Dates
          onSelectedDateChange={handleSelectedDateChange}
          onDateRangeChange={handleDateRangeChange}
        />
        <Time 
          onFormattedStartTimeChange={setFormattedStartTime}
          onDurationChange={setDuration}
        />
        <TextBox
          onHighlightChange={handleHighlightChange}
          onInfoChange={handleInfoChange}
        />
        <Pictures onImageUpload={handleImageUpload}/>
        <Ticketing
          showFileInput1={showFileInput1}
          showFileInput2={showFileInput2}
          amountPerPerson={amountPerPerson}
        />
        <br />
        <div className="buttons">
          <button>Save as draft</button>

          <button className="activeColor" onClick={toggleContentVisibility}>
            Preview this event
          </button>
        </div>
        {isContentVisible && (
          <HangOut
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}
            eventTitle={eventTitle}
            streetName={streetName}
            cityName={cityName}
            houseNumber={houseNumber}
            stateName={stateName}
            countryName={countryName}
            highlightValue={highlightValue}
            infoValue={infoValue}
            selectedDateString={selectedDateString}
            dateRangeString={dateRangeString}
            formattedStartTime={formattedStartTime}
            duration={duration}
            uploadedImageSrc={uploadedImageSrc}
            showFileInput1={showFileInput1}
            showFileInput2={showFileInput2}
            amountPerPerson={amountPerPerson}
          />
        )}
      </div>
    </>
  );
};

export default Form;
