import "./bookingContainer.css"

const bookingContainer = () => {
    return(
        <>
            <h1 className="bookingContainerHotelName">
                Transcorp Hilton
            </h1>

            <p className="bookingContainerHotelLocation">
                Plot 7, Yakubu Gowon way, Asokoro, Abuja - 
                <span>
                    Show location on map
                </span>
            </p>

            <div className="bookingContainerBookingDetails">
                <h1>
                    Your Booking Details
                </h1>
                
                <div className="row">
                    <div className="checkingContainer">
                        <div className="checking">
                            <h1>
                                Check-In
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M9.75 12.5L9.75 10.8333C9.75 10.3333 9.45 10 9 10C8.55 10 8.25 10.3333 8.25 10.8333L8.25 12.5C8.25 13 7.95 13.3333 7.5 13.3333L2.25 13.3333C1.8 13.3333 1.5 13 1.5 12.5L1.5 2.5C1.5 2 1.8 1.66667 2.25 1.66667L7.5 1.66667C7.95 1.66667 8.25 2 8.25 2.5L8.25 4.16667C8.25 4.66667 8.55 5 9 5C9.45 5 9.75 4.66667 9.75 4.16667L9.75 2.5C9.75 1.08333 8.775 7.42324e-08 7.5 8.94366e-08L2.25 1.52042e-07C0.975 1.67246e-07 1.29186e-08 1.08333 2.98122e-08 2.5L1.49061e-07 12.5C1.65955e-07 13.9167 0.975001 15 2.25 15L7.5 15C8.775 15 9.75 13.9167 9.75 12.5ZM5.475 4.41667L3.225 6.91667C3.075 7.08333 3 7.25 3 7.5C3 7.75 3.075 7.91667 3.225 8.08333L5.475 10.5833C5.775 10.9167 6.225 10.9167 6.525 10.5833C6.825 10.25 6.825 9.75 6.525 9.41667L5.55 8.33333L14.25 8.33333C14.7 8.33333 15 8 15 7.5C15 7 14.7 6.66667 14.25 6.66667L5.55 6.66667L6.525 5.58333C6.825 5.25 6.825 4.75 6.525 4.41667C6.225 4.08333 5.775 4.08333 5.475 4.41667Z" fill="#263238"/>
                                </svg>
                            </h1>

                            <p>
                                <b>
                                    Tue, April 10, 2023
                                </b>
                            </p>

                            <p>
                                14:00/2:00 PM
                            </p>
                            
                            <h1 className="moreDetails">
                                Length of stay:

                                <span>
                                    1 night(s)
                                </span>
                            </h1>

                            <h1 className="moreDetails">
                                Number of rooms:

                                <span>
                                    1
                                </span>
                            </h1>
                        </div>
                    </div>

                    <div className="checkingContainer">
                        <div className="checking">
                            <h1>
                                Check-Out
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M5.25 2.5L5.25 4.16667C5.25 4.66667 5.55 5 6 5C6.45 5 6.75 4.66667 6.75 4.16667L6.75 2.5C6.75 2 7.05 1.66667 7.5 1.66667H12.75C13.2 1.66667 13.5 2 13.5 2.5L13.5 12.5C13.5 13 13.2 13.3333 12.75 13.3333L7.5 13.3333C7.05 13.3333 6.75 13 6.75 12.5L6.75 10.8333C6.75 10.3333 6.45 10 6 10C5.55 10 5.25 10.3333 5.25 10.8333L5.25 12.5C5.25 13.9167 6.225 15 7.5 15H12.75C14.025 15 15 13.9167 15 12.5L15 2.5C15 1.08333 14.025 0 12.75 0H7.5C6.225 0 5.25 1.08333 5.25 2.5ZM9.525 10.5833L11.775 8.08333C11.925 7.91667 12 7.75 12 7.5C12 7.25 11.925 7.08333 11.775 6.91667L9.525 4.41667C9.225 4.08333 8.775 4.08333 8.475 4.41667C8.175 4.75 8.175 5.25 8.475 5.58333L9.45 6.66667L0.75 6.66667C0.3 6.66667 0 7 0 7.5C0 8 0.3 8.33333 0.75 8.33333H9.45L8.475 9.41667C8.175 9.75 8.175 10.25 8.475 10.5833C8.775 10.9167 9.225 10.9167 9.525 10.5833Z" fill="#263238"/>
                                </svg>
                            </h1>

                            <p>
                                <b>
                                    Tue, April 15, 2023
                                </b>
                            </p>

                            <p>
                                11:59/11:29 AM
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="roomTypeClass">
                        <h1>
                            Room type
                        </h1>

                        <p>
                            Double bed
                        </p>
                    </div>

                    <div className="roomTypeClass">
                        <h1>
                            Bed type
                        </h1>

                        <p>
                            Single bed
                        </p>
                    </div>

                    <div className="roomTypeClass">
                        <h1>
                            Room class
                        </h1>

                        <p>
                            Classic
                        </p>
                    </div>
                </div>

                <p className="changeSelection">
                    Change selection 
                </p>
            </div>
        </>
    );
};

export default bookingContainer