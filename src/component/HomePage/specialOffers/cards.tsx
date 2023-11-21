// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import '../topDes/topDes.css';
import image1 from "../../../assets/pics/attractions1.png"
import image2 from "../../../assets/pics/attractions2.png"
import image3 from "../../../assets/pics/attractions3.png"
import image4 from "../../../assets/pics/attractions4.png"

const cards1 = [
  {
    id: 1,
    name: "JUJU GARDENS",
    imageSrc: image1,
    href: "#",
    nightLife: "Nightlife",
    fee: "₦3,000.00",
  },
  {
    id: 2,
    name: "jabi lake",
    imageSrc: image2,
    href: "#",
    wildlife: "Wildlife park",
    fee: "Free",
  },
  {
    id: 3,
    name: "retro africa",
    imageSrc: image3,
    href: "#",
    sports: "Sports",
    fee: "Free",
  },
  {
    id: 4,
    name: "bmt african garden",
    imageSrc: image4,
    href: "#",
    wildlifepark: "Wildlife park",
    fee: "₦3,000.00",
  },
];

const SoffersCards: React.FC = () => {
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
                    Things to do
                    </p>

                    <div className="circleCardHome"></div>

                    <span className="nightLife">
                    {cards.nightLife}
                    </span>
                    
                    <span className="wildlife">
                    {cards.wildlife}
                    </span>

                    <span className="sports">
                    {cards.sports}
                    </span>

                    <span className="wildlifepark">
                    {cards.wildlifepark}
                    </span>
                </div>

                <div className="topattractionsplaceandfee">
                    <div>
                    {cards.name}
                    </div>

                    <div className="entryfeehomepage">
                    <span>
                        Entry Fee:
                    </span>
                    &nbsp;
                    {cards.fee}
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

export default SoffersCards;