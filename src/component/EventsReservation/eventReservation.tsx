/* eslint-disable @typescript-eslint/no-unused-vars */
import ".//eventReservation.css"
import OrderSummary from "./orderSummary";
import EventsForm from "./form";
import MakePaymentReservations from "./makePayment";

const EventReservationComponent = () => {
    return(
        <>
            <div className="eventReservation">
                 <h1>
                    Event Reservations
                </h1>

                <div className="eventReservationCont">
                    <div className="row">
                        <div className="eventcolumn eventFormLeft">
                            <EventsForm onPhoneNumberChange={function (): void {
                                throw new Error("Function not implemented.");
                            } } />
                        </div>

                        <div className="eventcolumn orderSummaryRight">
                            <OrderSummary />
                        </div>
                    </div>
                </div>
                
                <MakePaymentReservations />

                <label className="eventReservationBottomContainer">
                    By selecting RESERVE, you agree to 
                    <span>
                        Thetravelhunters
                    </span> 
                    <u>
                        Terms and Conditions
                    </u>.
                    <input type="checkbox" />
                    <span className="eventReservationBottomCheckmark"></span>
                </label>
                

                <button className="eventReservationBottomButton">
                    RESERVE | 
                    <span>
                        N5,000.00
                    </span>
                </button>
            </div>
           
        </>
    );
};

export default EventReservationComponent;