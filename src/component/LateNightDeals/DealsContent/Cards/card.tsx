/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import ".//dealsContent.css";
import CardIcons from "./cardIcons";


const Card = () => {
    const [shopStat, setshopChange] = useState(true);
    return(
        <>
             <div className="dealsSelectCard">
                <div className="row">
                    <div className="cardDealsColumn imageDeals">
                    </div>

                    <div className="cardDealsColumn dealsCardContent">
                        <div className="leftDealsCard">
                            <div className="percentagetopright">
                                <svg xmlns="http://www.w3.org/2000/svg" width="78" height="70" viewBox="0 0 78 70" fill="none">
                                    <g filter="url(#filter0_d_4749_4221)">
                                        <path d="M4 0H64C69.5229 0 74 4.47715 74 10V62L36.5532 27.874L4 0Z" fill="#FF2127" fill-opacity="0.86" shape-rendering="crispEdges"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_4749_4221" x="0" y="0" width="78" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.570833 0 0 0 0 0.570833 0 0 0 0 0.570833 0 0 0 0.4 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4749_4221"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4749_4221" result="shape"/>
                                        </filter>
                                    </defs>
                                    <text x="72%" y="5%" font-size="16" text-anchor="middle" fill="#FFF">
                                        <tspan x="72%" dy="1em">30%</tspan>
                                        <tspan x="72%" dy="1em">off</tspan>
                                    </text>
                                </svg>

                            </div>
                        
                            <h1>
                                Transcorp Hilton
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M9.99229 4.00429C10.0423 3.74226 9.84241 3.42783 9.5926 3.42783L6.7448 3.00858L5.4458 0.283491C5.39584 0.178679 5.34588 0.126274 5.24595 0.0738679C4.99615 -0.0833491 4.69638 0.0214623 4.54649 0.283491L3.29746 3.00858L0.449653 3.42783C0.299769 3.42783 0.199846 3.48024 0.149884 3.58505C-0.0499615 3.79467 -0.0499615 4.1091 0.149884 4.31873L2.1983 6.41495L1.69869 9.40208C1.69869 9.50689 1.69869 9.6117 1.74865 9.71651C1.89854 9.97854 2.1983 10.0833 2.44811 9.92613L4.99615 8.51118L7.54418 9.92613C7.59414 9.97854 7.69407 9.97854 7.79399 9.97854C7.84395 9.97854 7.84395 9.97854 7.89391 9.97854C8.14372 9.92613 8.34356 9.6641 8.2936 9.34967L7.79399 6.36255L9.84241 4.26632C9.94233 4.21391 9.99229 4.1091 9.99229 4.00429Z" fill="#F0B500"/>
                                    </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M9.99229 4.00429C10.0423 3.74226 9.84241 3.42783 9.5926 3.42783L6.7448 3.00858L5.4458 0.283491C5.39584 0.178679 5.34588 0.126274 5.24595 0.0738679C4.99615 -0.0833491 4.69638 0.0214623 4.54649 0.283491L3.29746 3.00858L0.449653 3.42783C0.299769 3.42783 0.199846 3.48024 0.149884 3.58505C-0.0499615 3.79467 -0.0499615 4.1091 0.149884 4.31873L2.1983 6.41495L1.69869 9.40208C1.69869 9.50689 1.69869 9.6117 1.74865 9.71651C1.89854 9.97854 2.1983 10.0833 2.44811 9.92613L4.99615 8.51118L7.54418 9.92613C7.59414 9.97854 7.69407 9.97854 7.79399 9.97854C7.84395 9.97854 7.84395 9.97854 7.89391 9.97854C8.14372 9.92613 8.34356 9.6641 8.2936 9.34967L7.79399 6.36255L9.84241 4.26632C9.94233 4.21391 9.99229 4.1091 9.99229 4.00429Z" fill="#F0B500"/>
                                </svg>
                            </h1>
                            
                            <p className="p">
                                20, Aminu Kano Cresent, Abuja
                            </p>
                            
                            <div>
                                <span>
                                    Free breakfast
                                </span>

                                <span>
                                    Access to spa
                                </span>

                                <span onClick={() => setshopChange(!shopStat)}>
                                    {shopStat === true ? "+1" : " Swimming pool"}
                                </span>
                            </div>
                            
                            <CardIcons />
                            
                            <div className="dealsFloatRight">
                                <p className="truePrice">₦ 50,000.00</p>
                                <p className="cancelledPrice">₦ 55,000.00</p>
                            </div>
                            
                            
                            <p className="dealsBottomDealsText">
                                2 rooms left on this deal
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;