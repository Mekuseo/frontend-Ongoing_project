// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import './topDes.css';
import image1 from "../../../assets/pics/attractions4.png"
import image2 from "../../../assets/pics/attractions5.png"
import image3 from "../../../assets/pics/attractions6.png"
import image4 from "../../../assets/pics/happeninghomepage.png"

const cards1 = [
  {
    id: 1,
    state: "LAGOS",
    imageSrc: image1,
    href: "#",
    commerce: "Commerce",
  },
  {
    id: 2,
    state: "ABUJA",
    imageSrc: image2,
    href: "#",
    politics: "Politics",
  },
  {
    id: 3,
    state: "CALABAR",
    imageSrc: image3,
    href: "#",
    tourism: "Tourism",
  },
  {
    id: 4,
    state: "IBADAN",
    imageSrc: image4,
    href: "#",
    industry: "Industry",
  },
];

const TopFeaturedCards: React.FC = () => {
  return (
    <>
        <div className="footerow">
        {cards1.map((cards, id) => (
            <div key={id} id={id} className="cardCols">
            <div className="cardhome-item">
                <a href={cards.href}>
                <img src={cards.imageSrc} alt="" />

                <div className="destinationDetails">
                    <p className="cardhome-name">
                    Destinations
                    </p>

                    <div className="circleCardHome"></div>

                    <span className="commerce">
                    {cards.commerce}
                    </span>
                    
                    <span className="politics">
                    {cards.politics}
                    </span>

                    <span className="tourism">
                    {cards.tourism}
                    </span>

                    <span className="industry">
                    {cards.industry}
                    </span>
                </div>

                <p className="stateCardhome">
                    {cards.state}
                </p>
                
                </a>
            </div>
            </div>
        ))}
        </div>
    </>
  );
};

export default TopFeaturedCards;