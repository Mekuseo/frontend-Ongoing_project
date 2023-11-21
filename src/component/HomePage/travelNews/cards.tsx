// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import "./travelNew.css";
import timer from "../../../assets/pics/timerhomepage.png";
import hotel from "../../../assets/pics/hotelhomepage.png";
import discount from "../../../assets/pics/discounthomepage.png"

const HomePageCards = () =>{
    return(
        <>
            <div className="cardshomepagecont">
                <div className="footerrow">
                    <div className="latenightcardshomepage">
                        <div className="cardssinglehomepage">
                        <img src={timer} alt="" />
                            <p>
                                New and exciting hotel deals tonight. Starts 8:00pm till 10pm daily
                            </p> 
                        </div>
                    </div>

                    <div className="latenightcardshomepage">
                        <div className="cardssinglehomepage">
                            <img src={hotel} alt="" />
                            <p>
                                Make a reservation and you can check-in to your hotel on the go!
                            </p>
                        </div>
                        
                    </div>

                    <div className="latenightcardshomepage">
                        <div className="cardssinglehomepage">
                            <img src={discount} alt="" />
                            <p>
                                Get up-to 60% off your favourite hotels.
                            </p>
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePageCards;