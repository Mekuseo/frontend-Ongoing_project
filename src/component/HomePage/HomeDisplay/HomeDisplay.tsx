// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./HomeDisplay.css";
import SearchBar from "./Search";

const HomeSearch: React.FC = () => {
  const [userLocation, setUserLocation] = useState({ state: "", country: "" });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        )
          .then((response) => response.json())
          .then((data) => {
            const { address } = data;
            setUserLocation({ state: address.state, country: address.country });
          })
          .catch((error) => {
            console.error("Error fetching location information:", error);
          });
      });
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return (
    <div className="displayBody">
      <div className="sec">
        <h1>Get ready to explore</h1>

        <div className="findHotelLocationHomePage">
          <SearchBar />
        </div>

        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <g clip-path="url(#clip0_6771_9578)">
              <path
                d="M9.5 11.5C9.5 12.2956 9.81607 13.0587 10.3787 13.6213C10.9413 14.1839 11.7044 14.5 12.5 14.5C13.2956 14.5 14.0587 14.1839 14.6213 13.6213C15.1839 13.0587 15.5 12.2956 15.5 11.5C15.5 10.7044 15.1839 9.94129 14.6213 9.37868C14.0587 8.81607 13.2956 8.5 12.5 8.5C11.7044 8.5 10.9413 8.81607 10.3787 9.37868C9.81607 9.94129 9.5 10.7044 9.5 11.5Z"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.157 17.157L13.914 21.4C13.539 21.7746 13.0306 21.9851 12.5005 21.9851C11.9704 21.9851 11.462 21.7746 11.087 21.4L6.843 17.157C5.72422 16.0382 4.96234 14.6127 4.65369 13.0609C4.34504 11.509 4.50349 9.90053 5.10901 8.43874C5.71452 6.97696 6.7399 5.72755 8.05548 4.84852C9.37107 3.96949 10.9178 3.50031 12.5 3.50031C14.0822 3.50031 15.6289 3.96949 16.9445 4.84852C18.2601 5.72755 19.2855 6.97696 19.891 8.43874C20.4965 9.90053 20.655 11.509 20.3463 13.0609C20.0377 14.6127 19.2758 16.0382 18.157 17.157Z"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_6771_9578">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          {userLocation.state}, {userLocation.country}
        </p>
      </div>
    </div>
  );
};

export default HomeSearch;
