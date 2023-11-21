import React from "react";

interface BottonNavBarProps {
  propertyName: string;
  setpropertyName: (value: string) => void;
  propertyType: string;
  setpropertyType: (value: string) => void;
  propertyChannelManager: string;
  setpropertyChannelManager: (value: string) => void;
  propertyChain: string;
  setpropertyChain: (value: string) => void;
  propertyDescription: string;
  setpropertyDescription: (value: string) => void;
  propertyPorxy: string;
  setpropertyPorxy: (value: string) => void;
  propertyPolicy: string;
  setpropertyPolicy: (value: string) => void;
  propertyRating: string;
  setpropertyRating: (value: string) => void;
  propertyBulidingNumber: string;
  setpropertyBulidingNumber: (value: string) => void;
  propertyStreetAddress: string;
  setpropertyStreetAddress: (value: string) => void;
  fullAddress: string;
  setFullAddress: (value: string) => void;
  locationLongitude: string;
  setLocationLongitude: (value: string) => void;
  locationLatitude: string;
  setLocationLatitude: (value: string) => void;
  locationTimeZone: string;
  setLocationTimeZone: (value: string) => void;
}

const BottonNavBar: React.FC<BottonNavBarProps> = (
  {
    // propertyName,
    // setpropertyName,
    // propertyType,
    // setpropertyType,
    // propertyChannelManager,
    // setpropertyChannelManager,
    // propertyChain,
    // setpropertyChain,
    // propertyDescription,
    // setpropertyDescription,
    // propertyPorxy,
    // setpropertyPorxy,
    // propertyPolicy,
    // setpropertyPolicy,
    // propertyRating,
    // setpropertyRating,
    // propertyBulidingNumber,
    // setpropertyBulidingNumber,
    // propertyStreetAddress,
    // setpropertyStreetAddress,
    // fullAddress,
    // setFullAddress,
    // locationLongitude,
    // setLocationLongitude,
    // locationLatitude,
    // setLocationLatitude,
    // locationTimeZone,
    // setLocationTimeZone,
  }
) => {
  return (
    <div>
      <div className="bottombuttons">
        <a href="#" className="main">
          save and exit
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z"
              stroke="#6E9E76"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.59003 11L11.09 12.5L15.09 8.5"
              stroke="#6E9E76"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <div className="bottombuttons-right">
          <a href="/ownersProfile" className="main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
            >
              <path
                d="M23 7H2L9 14"
                stroke="#6E9E76"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            previous
          </a>
          <a href="/Amenities" className="a">
            next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="18"
              viewBox="0 0 25 18"
              fill="none"
            >
              <path
                d="M2 9L23 9L16 2"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23 9L16 16"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottonNavBar;
