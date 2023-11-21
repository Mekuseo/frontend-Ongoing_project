import "./dealsContent.css";
import image1 from "../../../../assets/pics/Ellipse 4.png"
import image2 from "../../../../assets/pics/Ellipse 5.png";
import image3 from "../../../../assets/pics/Ellipse 6.png";
import image4 from "../../../../assets/pics/Ellipse 7.png";

const dealsCont = () => {
    return(
        <>
            <div className="lateNightDealsMainContent">
                <div className="row">
                    <div className="lateNightDealsImages">
                        <div className="lateNightDealsSmallerImageContent">
                            <img src={image1} alt="" />
                            <p>
                                It’s a rush hour, make it count and don’t be left behind.
                            </p>
                        </div>
                    </div>

                    <div className="lateNightDealsImages">
                        <div className="lateNightDealsBiggerImageContent">
                            <img src={image2} alt="" />
                            <p>
                                Find a hotel for the night, right where you are, for the best deals ever!
                            </p>
                        </div>
                    </div>

                    <div className="lateNightDealsImages">
                        <div className="lateNightDealsBiggerImageContent">
                            <img src={image3} alt="" />
                            <p>
                                Reservations
                                <br />
                                <span>
                                    Starts 
                                    <b>
                                        8:00 
                                    </b>
                                    pm 
                                    <br />
                                    Stops 
                                    <b>
                                        9:00
                                    </b>
                                    pm
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="lateNightDealsImages">
                        <div className="lateNightDealsSmallerImageContent">
                            <img src={image4} alt="" />
                            <p>
                                Pack your bags, a room awaits at your favourite hotel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default dealsCont;