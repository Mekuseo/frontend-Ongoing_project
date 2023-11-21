import "./reservationConfirmed.css";

const Details = () =>{
    return(
        <>
            <div className="eventReservationConfirmationDetails">
                <h1>
                    Reservation confirmed
                </h1>
                
                <div className="orderPlacedEventReservation">
                    <h3>
                        Your order has been placed

                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                <path d="M7.85714 0.857422H2.14286C0.928571 0.857422 0 1.78599 0 3.00028V14.4289C0 14.5717 -6.9184e-08 14.6431 0.0714285 14.786C0.285714 15.1431 0.714286 15.2146 1.07143 15.0717L5 12.786L8.92857 15.0717C9.07143 15.1431 9.14286 15.1431 9.28571 15.1431C9.71429 15.1431 10 14.8574 10 14.4289V3.00028C10 1.78599 9.07143 0.857422 7.85714 0.857422Z" fill="#CF0007"/>
                            </svg>
                            Reference #00904
                        </span>
                    </h3>
                </div>

                <p>
                    Thank you for registering for 
                    <span>
                        A day in Lagos.
                    </span>
                    We are Excited to have you join us!
                </p>

                <div className="eventReservationticketNumber">
                    Your ticket: 1 
                </div>

                <div className="eventReservationEmail">
                    Sent to Email:
                    <span>
                        Gbengadaniel@gmail.com
                    </span>
                </div>

                <div className="eventReservationTimeDateDuration">
                    <p>
                        Thurs 9th Sept, 2023
                    </p>

                    <p>
                        Time: 10:00am WAT
                    </p>

                    <p>
                        Duration: 2 hours
                    </p>
                </div>

                <div className="eventReservationLocation">
                    Location
                </div>

                <div className="eventReservationLocationText">
                    2, Aminu Kano Crescent, Wuse II, Abuja. 
                </div>

                <div className="eventReservationTotalPayment">
                    Order total: Paid N5,000.00 only 
                </div>
            </div>
        </>
    );
};

export default Details;