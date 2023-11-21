import "../../pages/hotelBooking/booking.css"

const Metrics = () =>{
    return (
        <>
            <h1 className="metricsHeader">
                User metrics for property performance
            </h1>

            <div className="boostPropContainer">
                <div className="row">
                    <div className="metricsColumn">
                        <h1>
                            24
                        </h1>

                        <p>
                            No. of views per property
                        </p>
                    </div>

                    <div className="metricsColumn">
                        <h1>
                            40
                        </h1>

                        <p>
                            No. of times your property has been searched for
                        </p>
                    </div>

                    <div className="metricsColumn">
                        <h1>
                            10
                        </h1>

                        <p>
                            No. of views per property
                        </p>
                    </div>
                </div>

                <div className="metricsDate">
                    <input type="text" placeholder="From date"/>
                    <input type="text" placeholder="To date"/>
                </div>
                
            </div>
        </>
    );
};

export default Metrics;