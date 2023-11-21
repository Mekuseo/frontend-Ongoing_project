/* eslint-disable @typescript-eslint/no-unused-vars */
import ".//Message.css";
import React from 'react';
// import Review from "../Review/Review";
import dp1 from "../../../assets/pics/unsplash_hh3ViD0r0Rc.png";
import dp2 from "../../../assets/pics/unsplash_rDEOVtE7vOs.png";
const Message: React.FC = () =>{
    return(
        <>
            <div className="otherChats">
                <form>
                    <input type="text" name="search" placeholder="Search.." />
                </form>
                
                <div className="otherChatsContainer">
                    <a href="#" className="activeName">
                        <img src={dp1} alt="" />
                        Adkan Samuel

                        <span>
                            11:04
                        </span>
                    </a>
                    <a href="/amina">
                        <img src={dp2} alt="" />
                        Amina Bel

                        <span>
                            Thursday
                        </span>
                    </a>
                    <a href="#">
                        <img src={dp2} alt="" />
                        Timi Ajayi

                        <span>
                            08/09
                        </span>
                    </a>
                    <a href="#">
                        <img src={dp2} alt="" />
                        Limi Ade

                        <span>
                            Thu
                        </span>
                    </a>

                    <a href="#">
                        <img src={dp2} alt="" />
                        Paul Fred

                        <span>
                            08/09
                        </span>
                    </a>
                </div>
            
            </div>

            <div className="mainChats">
                <div className="mainChatContent">
                    <div className="chatDetails">
                        <a><div className="activeCircle"></div></a>
                        <a>
                            Adkan Samuel
                            <img src={dp1} alt="" />
                        </a>
                        <div className="chatDetails-right">
                            <a href="#call">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 40 41" fill="none">
                                    <path d="M36.6664 28.6998V33.6998C36.6683 34.164 36.5732 34.6234 36.3872 35.0487C36.2013 35.474 35.9286 35.8558 35.5865 36.1696C35.2445 36.4834 34.8407 36.7223 34.401 36.871C33.9613 37.0197 33.4954 37.0749 33.0331 37.0332C27.9045 36.4759 22.9781 34.7234 18.6497 31.9165C14.6228 29.3576 11.2086 25.9435 8.64973 21.9165C5.83302 17.5685 4.08013 12.6182 3.53306 7.4665C3.49141 7.00561 3.54618 6.5411 3.69389 6.10254C3.8416 5.66398 4.07901 5.26098 4.391 4.9192C4.70299 4.57742 5.08273 4.30435 5.50604 4.11737C5.92935 3.93039 6.38696 3.83361 6.84973 3.83317H11.8497C12.6586 3.82521 13.4427 4.11163 14.056 4.63906C14.6693 5.16648 15.0699 5.89891 15.1831 6.69984C15.3941 8.29995 15.7855 9.87105 16.3497 11.3832C16.574 11.9797 16.6225 12.628 16.4896 13.2513C16.3566 13.8746 16.0478 14.4467 15.5997 14.8998L13.4831 17.0165C15.8557 21.1891 19.3105 24.6439 23.4831 27.0165L25.5997 24.8998C26.0529 24.4517 26.625 24.1429 27.2483 24.01C27.8715 23.8771 28.5199 23.9256 29.1164 24.1498C30.6285 24.7141 32.1996 25.1055 33.7997 25.3165C34.6093 25.4307 35.3487 25.8385 35.8773 26.4623C36.4058 27.0861 36.6867 27.8825 36.6664 28.6998Z" stroke="#6E9E76" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>

                            <div className="dropdown">
                                <button className="dropbtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 26 27" fill="none">
                                        <path d="M12.8057 14.9351C13.6686 14.9351 14.3682 14.1922 14.3682 13.2757C14.3682 12.3592 13.6686 11.6162 12.8057 11.6162C11.9427 11.6162 11.2432 12.3592 11.2432 13.2757C11.2432 14.1922 11.9427 14.9351 12.8057 14.9351Z" fill="#6E9E76" fill-opacity="0.8"/>
                                        <path d="M20.0967 14.9351C20.9596 14.9351 21.6592 14.1922 21.6592 13.2757C21.6592 12.3592 20.9596 11.6162 20.0967 11.6162C19.2337 11.6162 18.5342 12.3592 18.5342 13.2757C18.5342 14.1922 19.2337 14.9351 20.0967 14.9351Z" fill="#6E9E76" fill-opacity="0.8"/>
                                        <path d="M5.51367 14.9351C6.37662 14.9351 7.07617 14.1922 7.07617 13.2757C7.07617 12.3592 6.37662 11.6162 5.51367 11.6162C4.65073 11.6162 3.95117 12.3592 3.95117 13.2757C3.95117 14.1922 4.65073 14.9351 5.51367 14.9351Z" fill="#6E9E76" fill-opacity="0.8"/>
                                    </svg> 
                                </button>
                                <div className="dropdown-content">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 26 27" fill="none">
                                        <g clip-path="url(#clip0_4732_2660)">
                                            <path d="M22.3782 12.2246L12.8052 22.3915C11.6325 23.6371 10.0419 24.3368 8.38336 24.3368C6.72483 24.3368 5.13424 23.6371 3.96148 22.3915C2.78873 21.146 2.12988 19.4567 2.12988 17.6952C2.12988 15.9338 2.78873 14.2445 3.96148 12.999L13.5344 2.832C14.3162 2.00164 15.3766 1.53516 16.4823 1.53516C17.588 1.53516 18.6484 2.00164 19.4302 2.832C20.2121 3.66235 20.6513 4.78855 20.6513 5.96285C20.6513 7.13715 20.2121 8.26335 19.4302 9.0937L9.8469 19.2607C9.45598 19.6758 8.92578 19.9091 8.37294 19.9091C7.8201 19.9091 7.2899 19.6758 6.89898 19.2607C6.50807 18.8455 6.28845 18.2824 6.28845 17.6952C6.28845 17.1081 6.50807 16.545 6.89898 16.1298L15.7427 6.74833" stroke="#6E9E76" stroke-opacity="0.8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4732_2660">
                                            <rect width="25" height="26.5514" fill="white" transform="translate(0.0449219)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Add attachment
                                </a>

                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 26 27" fill="none">
                                        <g clip-path="url(#clip0_4732_2649)">
                                            <path d="M12.5449 1.10645C11.7161 1.10645 10.9213 1.45612 10.3352 2.07854C9.74916 2.70095 9.41992 3.54514 9.41992 4.42537V13.2758C9.41992 14.1561 9.74916 15.0002 10.3352 15.6227C10.9213 16.2451 11.7161 16.5948 12.5449 16.5948C13.3737 16.5948 14.1686 16.2451 14.7546 15.6227C15.3407 15.0002 15.6699 14.1561 15.6699 13.2758V4.42537C15.6699 3.54514 15.3407 2.70095 14.7546 2.07854C14.1686 1.45612 13.3737 1.10645 12.5449 1.10645V1.10645Z" stroke="#6E9E76" stroke-opacity="0.8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M19.8363 11.0635V13.2761C19.8363 15.33 19.068 17.2997 17.7006 18.752C16.3331 20.2043 14.4785 21.0202 12.5446 21.0202C10.6107 21.0202 8.75606 20.2043 7.38861 18.752C6.02116 17.2997 5.25293 15.33 5.25293 13.2761V11.0635" stroke="#6E9E76" stroke-opacity="0.8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.5449 21.0195V25.4448" stroke="#6E9E76" stroke-opacity="0.8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8.37793 25.4453H16.7113" stroke="#6E9E76" stroke-opacity="0.8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4732_2649">
                                            <rect width="25" height="26.5514" fill="white" transform="translate(0.0449219)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Add voice memo
                                </a>
                                </div>
                            </div> 

                        </div>
                    </div>

                    <p className="dateChat">
                        25th June, 2023
                    </p>


                    {/* <Review /> */}

                </div>
            </div>
            
        </>
    );
};

export default Message;