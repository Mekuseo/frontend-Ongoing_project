import "../../HotelProcessing/Payment/Payment.css";
import "../../../pages/hotelBooking/booking.css"

const metricAd = () =>{
    return(
        <>
            <h1 className="metricsHeader">
                User metrics for property performance based on this advert.
            </h1>

            <div className="travelContainer">
                <div className="metricsContent">
                    <div className="row">
                        <div className="metrics">
                            <input type="text" name="" id="" placeholder="Number of clicks on property" className="noOfClicks"/>
                            <input type="text" placeholder="From date" className="dateSelectFrom"/>
                        </div>

                        <div className="metrics">
                            <input type="text" name="" placeholder="Number of views on property" id="" className="noOfClicks"/>
                            <input type="text" placeholder="To date" className="dateSelectTo"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default metricAd;