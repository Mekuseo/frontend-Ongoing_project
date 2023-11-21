import "./bookingDetails.css"

const classes = [
    {
        name: 'Guest name:',
        subhead: 'Ahmed Zaks'
    },
    {
        name: 'Amenities for you:',
        subhead: 'Wi-Fi, Car parking etc '
    },
    {
        name: 'Customer preference/Special request:',
        subhead: 'I need the room to be well heated. I would like a table in my room'
    },
    {
        name: 'Room capacity:',
        subhead: '3 people'
    }
]
const bookingDetails = () => {
    return(
        <>
            <div className="bookingDetailsHeadingContainer">
                {classes.map((item, index) => (
                    <div key={index}>
                        <p className="bookingDetailsHeading">
                            {item.name}
                            <span>
                                {item.subhead}
                            </span>
                        </p>
                    </div>
                ))}

                <p className="bookingDetailsHeading">
                    Cancellation:
                    <span>
                        <ul>
                            <li>
                                Fully refundable until 16:00, 25th, 2023. 
                            </li>
                            <li>
                                Cancel for free until 16:00, 25th July, 2023.
                            </li>
                            <li>
                                If you change or cancel this booking after 16:00, 25th July, you will be charged N5,000.00. (5% of 1 nightly room rate). 
                            </li>
                            <li>
                                Check-in 26th July, 2023.
                            </li>
                        </ul>
                    </span>
                </p>

                <p className="bookingDetailsHeading">
                    Property policy:
                    <span>
                        Guests are to be of good behaviour. The neighbourhood abhors noise pollution.
                    </span>

                    <div className="bookingDetailsAllowedContainer">
                        <div className="row">
                            <div className="bookingDetailsAllowed">
                                <ul>
                                    <li>
                                        Smoking allowed
                                    </li>
                                </ul>
                            </div>

                            <div className="bookingDetailsAllowed">
                                <ul>
                                    <li>
                                        No parties allowed
                                    </li>
                                </ul>
                            </div>

                            <div className="bookingDetailsAllowed">
                                <ul>
                                    <li>
                                        Pets allowed
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </p>

                <p className="bookingDetailsHeading">
                    Children:
                    <span>
                        Children of all ages are welcome
                    </span>
                </p>

                <p className="bookingDetailsHeading">
                    Payment type:
                    <span>
                        Pay at hotel
                    </span>
                </p>
            </div>

            <p className="bookingDetailsFullPayment">
                <span>
                    Receive Guest’s full payment of N5,300 at check-in  
                </span>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 51 50" fill="none">
                    <path d="M4.66699 22.916L10.5149 16.3389C11.2967 15.4591 12.2561 14.7549 13.3297 14.2726C14.4034 13.7904 15.5671 13.541 16.7441 13.541H17.167M4.66699 40.6244H16.1253L24.4587 34.3744C24.4587 34.3744 26.1462 33.2348 28.6253 31.2494C33.8337 27.0827 28.6253 20.4868 23.417 23.9577C19.1753 26.7848 15.0837 29.166 15.0837 29.166" stroke="#263238" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.167 28.1244V14.5827C17.167 13.4776 17.606 12.4178 18.3874 11.6364C19.1688 10.855 20.2286 10.416 21.3337 10.416H42.167C43.2721 10.416 44.3319 10.855 45.1133 11.6364C45.8947 12.4178 46.3337 13.4776 46.3337 14.5827V27.0827C46.3337 28.1878 45.8947 29.2476 45.1133 30.029C44.3319 30.8104 43.2721 31.2494 42.167 31.2494H28.6253" stroke="#263238" stroke-width="2"/>
                    <path d="M41.125 20.8535L41.1458 20.8306M22.375 20.8535L22.3958 20.8306M31.75 24.9993C30.6449 24.9993 29.5851 24.5604 28.8037 23.779C28.0223 22.9976 27.5833 21.9378 27.5833 20.8327C27.5833 19.7276 28.0223 18.6678 28.8037 17.8864C29.5851 17.105 30.6449 16.666 31.75 16.666C32.8551 16.666 33.9149 17.105 34.6963 17.8864C35.4777 18.6678 35.9167 19.7276 35.9167 20.8327C35.9167 21.9378 35.4777 22.9976 34.6963 23.779C33.9149 24.5604 32.8551 24.9993 31.75 24.9993Z" stroke="#263238" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </p>
        </>
    );
};

export default bookingDetails;