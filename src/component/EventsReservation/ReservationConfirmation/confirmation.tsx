import "./reservationConfirmed.css";
import Details from "./details";
import Confirmed from "./confirmed";

const Confirmation = () =>{
    return(
        <>
            <div className="eventReservationConfirmationContainer">
                <div className="row">
                    <div className="eventReservationConfirmationCol deets">
                        <Details />
                    </div>

                    <div className="eventReservationConfirmationCol moreDeets">
                        <Confirmed />
                    </div>
                </div>    

                <div className="eventReservationThankYou">
                    THANK YOU!
                </div>
            </div>        
        </>
    );
};

export default Confirmation