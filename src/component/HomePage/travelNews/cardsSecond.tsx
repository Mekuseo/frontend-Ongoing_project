// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from "react";
import "./travelNew.css";
import "../topDes/topDes.css";
import image1 from "../../../assets/pics/homepageimage1.png"
import image2 from "../../../assets/pics/homepageimage2.png"
import image3 from "../../../assets/pics/homepageimage3.png"

const SVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="10"
    viewBox="0 0 11 10"
    fill="none"
  >
    <g clip-path="url(#clip0_6985_10446)">
      <path
        d="M3.58939 3.05836L0.93106 3.44378L0.883976 3.45336C0.812701 3.47228 0.747724 3.50978 0.695681 3.56203C0.643639 3.61428 0.606394 3.6794 0.587752 3.75075C0.56911 3.8221 0.569738 3.89712 0.589571 3.96814C0.609405 4.03917 0.647733 4.10366 0.700643 4.15503L2.62648 6.02961L2.17231 8.67753L2.16689 8.72336C2.16253 8.79708 2.17784 8.87063 2.21125 8.93649C2.24466 9.00235 2.29497 9.05814 2.35703 9.09816C2.4191 9.13818 2.49068 9.16098 2.56445 9.16424C2.63823 9.1675 2.71154 9.15109 2.77689 9.11669L5.15439 7.86669L7.52648 9.11669L7.56814 9.13586C7.63692 9.16295 7.71166 9.17126 7.78471 9.15993C7.85775 9.1486 7.92647 9.11804 7.98381 9.07139C8.04114 9.02474 8.08504 8.96367 8.11099 8.89446C8.13694 8.82525 8.14401 8.75038 8.13148 8.67753L7.67689 6.02961L9.60356 4.15461L9.63606 4.1192C9.68249 4.06202 9.71292 3.99355 9.72428 3.92078C9.73563 3.848 9.72749 3.77352 9.70068 3.70492C9.67387 3.63631 9.62936 3.57604 9.57168 3.53024C9.514 3.48444 9.4452 3.45475 9.37231 3.4442L6.71398 3.05836L5.52564 0.650029C5.49126 0.580251 5.43803 0.521493 5.37197 0.480406C5.30592 0.439318 5.22968 0.417542 5.15189 0.417542C5.0741 0.417542 4.99787 0.439318 4.93181 0.480406C4.86576 0.521493 4.81253 0.580251 4.77814 0.650029L3.58939 3.05836Z"
        fill="#FFC61A"
      />
    </g>
    <defs>
      <clipPath id="clip0_6985_10446">
        <rect
          width="10"
          height="10"
          fill="white"
          transform="translate(0.154297)"
        />
      </clipPath>
    </defs>
  </svg>
);

const cards1 = [
  {
    id: 1,
    name: "Transcorp Hilton Hotel",
    imageSrc: image1,
    href: "#",
    percentage: "20",
    icon: (
      <>
        <SVG />
        <SVG />
        <SVG />
        <SVG />
        <SVG />
      </>
    ),
    state: "Abuja",
    originalPrice: "20,000.00",
    cancelledPrice: "55,000.00",
  },
  {
    id: 2,
    name: "Oriental Hotel",
    imageSrc: image2,
    href: "#",
    percentage: "50",
    icon: (
      <>
        <SVG />
        <SVG />
        <SVG />
      </>
    ),
    state: "Lagos",
    originalPrice: "80,000.00",
    cancelledPrice: "95,000.00",
  },
  {
    id: 3,
    name: "Raddison Blue Hotel",
    imageSrc: image3,
    href: "#",
    percentage: "80",
    icon: (
      <>
        <SVG />
        <SVG />
        <SVG />
        <SVG />
      </>
    ),
    state: "Benin",
    originalPrice: "110,000.00",
    cancelledPrice: "120,000.00",
  },
];

const HomeCardsDestination = () => {
  const [isLiked, setIsLiked] = useState(new Array(cards1.length).fill(false));

  const handleLikeClick = (index) => {
    const newLikedState = [...isLiked];
    newLikedState[index] = !newLikedState[index];
    setIsLiked(newLikedState);
  };

  return (
    <>
      <div className="footerow">
        {cards1.map((card, index) => (
          <div key={card.id} className="cardColsFirst">
            <div className="cardhomefirst">
              <h3>{card.name}</h3>
              <div className="cardhomefirstimage">
                <img src={card.imageSrc} alt="" />
                <div className="likecardhomefirst">
                  <button
                    className="heart-buttonhome"
                    onClick={() => handleLikeClick(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      className={
                        isLiked[index]
                          ? "hearthome likedhomeheart"
                          : "hearthome"
                      }
                    >
                      <path d="M9.59964 2.52953L10 3.06465L10.4004 2.52953C11.3204 1.29973 12.7949 0.5 14.44 0.5C17.2315 0.5 19.5 2.7738 19.5 5.59C19.5 6.72562 19.3189 7.77375 19.0043 8.74609L19.0032 8.74934C18.249 11.136 16.7035 13.0596 15.0354 14.4933C13.365 15.9289 11.6004 16.8483 10.4589 17.2366L10.4589 17.2366L10.4536 17.2385C10.3537 17.2737 10.1893 17.3 10 17.3C9.81075 17.3 9.64625 17.2737 9.54641 17.2385L9.54642 17.2385L9.54106 17.2366C8.3996 16.8483 6.635 15.9289 4.96465 14.4933C3.29649 13.0596 1.75096 11.136 0.996763 8.74934L0.996774 8.74934L0.995722 8.74609C0.681141 7.77375 0.5 6.72562 0.5 5.59C0.5 2.7738 2.76848 0.5 5.56 0.5C7.2051 0.5 8.67958 1.29973 9.59964 2.52953Z" />
                    </svg>
                  </button>
                </div>
                <div className="cardhomefirstdiscount">
                  <div className="homebanner">
                    {card.percentage}% <span>off</span>
                  </div>
                </div>
              </div>

              <a href={card.href}>
                <div className="homecardDetails">
                  <div>
                    <div className="hoteltaghome">Hotels</div>
                  </div>

                  <div className="rightdetails">
                    <div className="homestarcontainer">{card.icon}</div>
                  </div>
                </div>

                <div className="homecardDetails">
                  <div>
                    <div className="hotellocationhomepage">
                      <div className="stateoflocation">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="16"
                          viewBox="0 0 15 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_6985_10454)">
                            <path
                              d="M5.625 7.375C5.625 7.87228 5.82254 8.34919 6.17417 8.70083C6.52581 9.05246 7.00272 9.25 7.5 9.25C7.99728 9.25 8.47419 9.05246 8.82583 8.70083C9.17746 8.34919 9.375 7.87228 9.375 7.375C9.375 6.87772 9.17746 6.40081 8.82583 6.04917C8.47419 5.69754 7.99728 5.5 7.5 5.5C7.00272 5.5 6.52581 5.69754 6.17417 6.04917C5.82254 6.40081 5.625 6.87772 5.625 7.375Z"
                              stroke="#263238"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.0356 10.9106L8.38375 13.5625C8.14937 13.7966 7.8313 15 7.5 15C7.1687 15 6.85126 13.7966 6.61688 13.5625L3.96438 10.9106C3.26514 10.2114 2.78896 9.32044 2.59606 8.35054C2.40315 7.38064 2.50218 6.37532 2.88063 5.46171C3.25908 4.54809 3.89994 3.76721 4.72218 3.21782C5.54442 2.66842 6.51111 2.37518 7.5 2.37518C8.4889 2.37518 9.45559 2.66842 10.2778 3.21782C11.1001 3.76721 11.7409 4.54809 12.1194 5.46171C12.4978 6.37532 12.5969 7.38064 12.4039 8.35054C12.211 9.32044 11.7349 10.2114 11.0356 10.9106Z"
                              stroke="#263238"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_6985_10454">
                              <rect
                                width="15"
                                height="15"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        {card.state}
                      </div>
                      , Nigeria
                    </div>
                  </div>

                  <div className="rightdetails">
                    <div className="cancelledpricingrightdetailshome">
                      <p>₦ {card.originalPrice}</p>

                      <h6>₦ {card.cancelledPrice}</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeCardsDestination;
