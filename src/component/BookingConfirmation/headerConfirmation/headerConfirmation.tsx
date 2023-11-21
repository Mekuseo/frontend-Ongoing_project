import "./headerConfirmation.css"

const headerConfirmation = () => {
    return(
        <>
            <div className="row">
                <div className="headerConfirmationContainer">
                    <h1 className="headerConfirmationbookingConfirmed">
                        Your booking is confirmed
                    </h1>

                    <p className="headerConfirmationDateOfBooking">
                        This booking was made on the 12th August 2023, at 10:00 GMT 
                    </p>

                    <span className="headerConfirmationPrintConfirmation">
                        Print confirmation.
                    </span>
                </div>

                <div className="headerConfirmationContainer">
                    <h1 className="headerConfirmationbookingConfirmed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="21" viewBox="0 0 14 21" fill="none">
                            <path d="M11 0.5H3C1.3 0.5 0 1.8 0 3.5V19.5C0 19.7 -9.68575e-08 19.8 0.0999999 20C0.4 20.5 1 20.6 1.5 20.4L7 17.2L12.5 20.4C12.7 20.5 12.8 20.5 13 20.5C13.6 20.5 14 20.1 14 19.5V3.5C14 1.8 12.7 0.5 11 0.5Z" fill="#CF0007"/>
                        </svg>
                        Booking number #00904
                    </h1>

                    <p className="headerConfirmationManageBookings">
                        View and 
                        <span>
                            Manage bookings.
                        </span>
                    </p>

                    <p className="headerConfirmationSentEmails">
                        We’ve emailed your booking details to 
                        <br />
                        <span>
                            Gbengadaniel@gmail.com
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default headerConfirmation;