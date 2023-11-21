// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from "react";
import "../marketingListing.css";
import MarketingCheckboxes from "./checkboxes";
import MarketingPrices from "./prices";
import "../Header/header.css"

const MarketingPlace = () => {
  const [totalValue, setTotalValue] = useState(6000);

  const handleTotalValueChange = (newValue: number) => {
    setTotalValue(newValue);
  };

  return (
    <>
      <div className="marketingPlaceListing">
        <br/>
        <br/>
        <div className="marketingHeader">
              <a href="/placeMarketing" className="marketingHeaderActive">Marketing</a>
              <a href="/managePlaceListing">Manage place listings</a>
          </div>
        <h1 className="marketingHeader">MARKETING</h1>

        <div className="marketingPlaceCont">
          <div className="row">
            <div className="marketingPlaceCol checkboxMarketing">
              <MarketingCheckboxes onTotalValueChange={handleTotalValueChange} />
            </div>

            <div className="marketingPlaceCol priceMarketing">
              <MarketingPrices />
            </div>
          </div>

          <div className="totalMarketingPrice">
            <div>
              Total cost of Ads = N{totalValue.toLocaleString()}.00
            </div>
          </div>

          <div className="advertMarketing">
              <button>
                Create Advert
              </button>
          </div>

          <div className="callLink">
               <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_6423_9312)">
                            <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z" stroke="#EA4131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_6423_9312">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    Need to talk to our marketing team?
                </a>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default MarketingPlace;
