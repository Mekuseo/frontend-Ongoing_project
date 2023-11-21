// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import map from '../../../assets/pics/MapsicleMap.png';
import '../Form/form.css';
import '../Modal/modal.css';
import PlaceModal from '../Modal/modal';
import CreateLive from '../../CreateLive/createLive';

interface AboutPlaceProps {
  selectedCategory: string;
  placeName: string;
  uploadedImageSrc: string;
  highlightValue: string;
  houseNo: string;
  streetName: string;
  cityName: string;
  stateName: string;
  countryName: string;
  houseNumber: string;
  startHour: number;
  startMinute: number;
  startAMPM: string;
  endHour: number;
  endMinute: number;
  endAMPM: string;
  formattedStartTime: string;
  formattedEndTime: string;
  name: string;
  entryFee: number | undefined;
  onNameChange: (name: string) => void;
  onEntryFeeChange: (entryFee: number | undefined) => void;
}

const AboutPlace: React.FC<AboutPlaceProps> = ({
  selectedCategory,
  placeName,
  uploadedImageSrc,
  highlightValue,
  streetName,
  cityName,
  stateName,
  countryName,
  formattedStartTime,
  formattedEndTime,
  name,
  entryFee,
  houseNumber,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

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


  return (
    <>
      <div className="eventHangOutContainer">
        <div className="hangoutHeader">
          <h1>{placeName}</h1>
        </div>

        <img src={uploadedImageSrc} alt="" onClick={openModal} />

        <h3>{selectedCategory}</h3>

        <div className="row hangOut">
          <div className="hangoutCol highlightHangOut">
            <div className="highlightHangout">
              <div className="placeHeight">
                <h1>About</h1>
                <p>{highlightValue}</p>
                <h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M10.6667 11.8794V17.9997C10.6667 18.318 10.8071 18.6232 11.0572 18.8483C11.3072 19.0733 11.6464 19.1998 12 19.1998C12.3536 19.1998 12.6928 19.0733 12.9428 18.8483C13.1929 18.6232 13.3333 18.318 13.3333 17.9997V11.8794C14.9521 11.582 16.3904 10.7542 17.3696 9.55656C18.3488 8.35889 18.799 6.87666 18.6329 5.39722C18.4669 3.91778 17.6964 2.54654 16.4709 1.54933C15.2454 0.552124 13.6521 0 12 0C10.3479 0 8.75464 0.552124 7.52913 1.54933C6.30361 2.54654 5.53314 3.91778 5.36709 5.39722C5.20104 6.87666 5.65124 8.35889 6.6304 9.55656C7.60957 10.7542 9.04794 11.582 10.6667 11.8794ZM12 2.3989C12.7911 2.3989 13.5645 2.61005 14.2223 3.00564C14.8801 3.40123 15.3928 3.9635 15.6955 4.62135C15.9983 5.2792 16.0775 6.00308 15.9231 6.70144C15.7688 7.39981 15.3878 8.0413 14.8284 8.5448C14.269 9.04829 13.5563 9.39118 12.7804 9.53009C12.0044 9.669 11.2002 9.59771 10.4693 9.32522C9.73836 9.05273 9.11365 8.59128 8.67412 7.99924C8.2346 7.40719 8 6.71113 8 5.99908C8 5.04425 8.42143 4.12853 9.17157 3.45337C9.92172 2.7782 10.9391 2.3989 12 2.3989ZM17.6133 14.9035C17.4382 14.8704 17.2576 14.8687 17.0818 14.8984C16.9059 14.9282 16.7383 14.9888 16.5885 15.0768C16.4387 15.1649 16.3096 15.2786 16.2086 15.4115C16.1077 15.5445 16.0368 15.694 16 15.8516C15.9632 16.0092 15.9613 16.1717 15.9943 16.33C16.0274 16.4883 16.0947 16.6391 16.1925 16.774C16.2903 16.9088 16.4167 17.025 16.5644 17.1159C16.7121 17.2068 16.8782 17.2706 17.0533 17.3037C20.08 17.8437 21.3333 18.8157 21.3333 19.1998C21.3333 19.8958 18.0667 21.5999 12 21.5999C5.93333 21.5999 2.66667 19.8958 2.66667 19.1998C2.66667 18.8157 3.92 17.8437 6.94667 17.2557C7.12176 17.2226 7.2879 17.1588 7.4356 17.0679C7.58329 16.977 7.70965 16.8608 7.80747 16.726C7.90528 16.5911 7.97262 16.4403 8.00566 16.282C8.03869 16.1237 8.03677 15.9612 8 15.8036C7.96323 15.646 7.89233 15.4965 7.79136 15.3635C7.69038 15.2306 7.5613 15.1169 7.41149 15.0288C7.26167 14.9408 7.09406 14.8802 6.91823 14.8504C6.74239 14.8207 6.56176 14.8224 6.38667 14.8555C2.33333 15.6956 0 17.2677 0 19.1998C0 22.3559 6.04 24 12 24C17.96 24 24 22.3559 24 19.1998C24 17.2677 21.6667 15.6956 17.6133 14.9035Z" fill="#263238"/>
                  </svg>

                  No. {houseNumber}, {streetName}, {cityName}, {stateName}, {countryName}.
                </h3>

                <div className="moreInformation">
                  <h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 13" fill="none">
                        <path d="M6 11.375C3.035 11.375 0.625 8.965 0.625 6C0.625 3.035 3.035 0.625 6 0.625C8.965 0.625 11.375 3.035 11.375 6C11.375 8.965 8.965 11.375 6 11.375ZM6 1.375C3.45 1.375 1.375 3.45 1.375 6C1.375 8.55 3.45 10.625 6 10.625C8.55 10.625 10.625 8.55 10.625 6C10.625 3.45 8.55 1.375 6 1.375Z" fill="#292D32"/>
                        <path d="M7.85482 7.96391C7.78982 7.96391 7.72482 7.94891 7.66482 7.90891L6.11482 6.98391C5.72982 6.75391 5.44482 6.24891 5.44482 5.80391V3.75391C5.44482 3.54891 5.61482 3.37891 5.81982 3.37891C6.02482 3.37891 6.19482 3.54891 6.19482 3.75391V5.80391C6.19482 5.98391 6.34482 6.24891 6.49982 6.33891L8.04982 7.26391C8.22982 7.36891 8.28482 7.59891 8.17982 7.77891C8.10482 7.89891 7.97982 7.96391 7.85482 7.96391Z" fill="#292D32"/>
                    </svg>

                    &nbsp; Opens
                    <br />
                    {formattedStartTime}
                  </h5>

                  <h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 13" fill="none">
                        <path d="M6 11.375C3.035 11.375 0.625 8.965 0.625 6C0.625 3.035 3.035 0.625 6 0.625C8.965 0.625 11.375 3.035 11.375 6C11.375 8.965 8.965 11.375 6 11.375ZM6 1.375C3.45 1.375 1.375 3.45 1.375 6C1.375 8.55 3.45 10.625 6 10.625C8.55 10.625 10.625 8.55 10.625 6C10.625 3.45 8.55 1.375 6 1.375Z" fill="#292D32"/>
                        <path d="M7.85482 7.96391C7.78982 7.96391 7.72482 7.94891 7.66482 7.90891L6.11482 6.98391C5.72982 6.75391 5.44482 6.24891 5.44482 5.80391V3.75391C5.44482 3.54891 5.61482 3.37891 5.81982 3.37891C6.02482 3.37891 6.19482 3.54891 6.19482 3.75391V5.80391C6.19482 5.98391 6.34482 6.24891 6.49982 6.33891L8.04982 7.26391C8.22982 7.36891 8.28482 7.59891 8.17982 7.77891C8.10482 7.89891 7.97982 7.96391 7.85482 7.96391Z" fill="#292D32"/>
                    </svg>

                    &nbsp; Closes
                    <br />
                    {formattedEndTime}
                  </h5>
                </div>

                <br />

                <div className="moreInformation">
                  <h5>By: {name}</h5>

                  <h5>Entry fee: {entryFee ? `N${entryFee.toFixed(2)}` : 'N/A'}</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="hangoutCol summaryHangOut">
            <img src={map} alt="" />
          </div>
        </div>
      </div>

      <p className="warningText">
        Note: Thetravelhunters charges a processing fee of 3% on every ticket sale for aid events
      </p>

      <label className="hangOutLiveContainer">
        By clicking “Go Live”, you agree you have read and accept our{' '}
        <span>Terms and Condition</span>, <span>Privacy Policy</span> and <span>Government</span> Travel Advice.
        <input type="checkbox" />
        <span className="hangOutLiveCheckmark"></span>
      </label>

      <button className="goLiveHangOut" onClick={openReview}>go live!</button>

      <br />

      {isReview && (
        <div className="reviewModal" onClick={handleOutsideClick}>
          <div className="reviewModalContent">
            <span onClick={closeReview}></span>
            <CreateLive />
          </div>
        </div>
      )}

      {modalVisible && (
        <div className="placeModalCont" onClick={handleClickOutside}>
          <span className="closePlaceModal" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g clip-path="url(#clip0_6421_8329)">
                    <path d="M20 20L28 28M28 20L20 28" stroke="#929292" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24 6C38.4 6 42 9.6 42 24C42 38.4 38.4 42 24 42C9.6 42 6 38.4 6 24C6 9.6 9.6 6 24 6Z" stroke="#929292" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_6421_8329">
                    <rect width="48" height="48" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
          </span>
          <div className="placeModalContContent">
            <PlaceModal 
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
          </div>
        </div>
      )}
    </>
  );
};

export default AboutPlace;
