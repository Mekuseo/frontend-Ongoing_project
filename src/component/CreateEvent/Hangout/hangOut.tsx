// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import "./hangOut.css";
import Highlight from "./highlight";
import Summary from "./summary";
import CreateLive from '../../CreateLive/createLive';

interface HangOutProps {
  selectedCategory: string;
  selectedSubcategory: string;
  streetName: string;
  eventTitle: string;
  cityName: string;
  stateName: string;
  countryName: string;
  houseNumber: string;
  highlightValue: string;
  infoValue: string;
  selectedDateString: string;
  dateRangeString: string;
  formattedStartTime: string;
  duration: string;
  uploadedImageSrc: string;
  showFileInput1: boolean;
  showFileInput2: boolean;
  amountPerPerson: number | null;
}

const HangOut: React.FC<HangOutProps> = (
  {
    selectedCategory, 
    selectedSubcategory,
    eventTitle,
    streetName,
    cityName,
    stateName,
    countryName,
    houseNumber,
    highlightValue,
    infoValue,
    selectedDateString,
    dateRangeString,
    formattedStartTime,
    duration,
    uploadedImageSrc,
    amountPerPerson,
    showFileInput1,
    showFileInput2,
  }
) => {

    const [isReview, setIsReviewOpen] = useState(false);

    const openReview = () => {
        setIsReviewOpen(true);
    };

    const closeReview = () => {
        setIsReviewOpen(false);
    };

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
        closeReview();
        }
    };

    console.log("showFileInput2:", showFileInput2);
    console.log("showFileInput1:", showFileInput1);
    console.log("amountPerPerson:", amountPerPerson);
  return (
    <>
      <div className="eventHangOutContainer">
        <div className="hangoutHeader">
          <p>
            {selectedCategory} 
          </p>

          <p className='subSelected'>
            {selectedSubcategory}
          </p>

          <h1>
            {eventTitle}
          </h1>
        </div>
        <img src={uploadedImageSrc} alt="" />

        <div className="row hangOut">
          <div className="hangoutCol highlightHangOut">
            <Highlight
              highlightValue={highlightValue}
              infoValue={infoValue}
            />
          </div>

          <div className="hangoutCol summaryHangOut">
            <Summary 
              streetName={streetName}
              cityName={cityName}
              houseNumber={houseNumber}
              stateName={stateName}
              countryName={countryName}
              selectedDateString={selectedDateString}
              dateRangeString={dateRangeString}
              duration={duration}
              formattedStartTime={formattedStartTime}
            />
          </div>
        </div>
      </div>

      <p className="warningText">
        Note: Thetravelhunters charges a processing fee of 3% on every ticket sale for aid events 
      </p>

      <label className="hangOutLiveContainer">
        By clicking “Go Live”, you agree you have read and accept our 
        <span>
          Terms and Condition
        </span>,
        <span>
          Privacy Policy 
        </span>
        and 
        <span>
          Government 
        </span>
        Travel Advice.

        <input type="checkbox"></input>
        <span className="hangOutLiveCheckmark"></span>
      </label>

      <button className="goLiveHangOut" onClick={openReview}>
        go live!
      </button>

      <br/>

      <p>eee
        {showFileInput2 ? 'Free' : null}
        {showFileInput1 && amountPerPerson !== null
          ? `Paid: ${formatCurrency((amountPerPerson * 100).toString())}`
          : null}
      </p>

      {isReview && (
        <div className="reviewModal" onClick={handleOutsideClick}>
          <div className="reviewModalContent">
            <span onClick={closeReview}></span>
            <CreateLive />
          </div>
        </div>
      )}
    </>
  );
};

export default HangOut;