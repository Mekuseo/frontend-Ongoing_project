import ".//bookingDetails.css"

const classes = [
    {
        name: 'Guest name:',
        subhead: 'Ahmed Zaks'
    },
    {
        name: 'Amenities for you:',
        subhead: 'Wi-Fi, Car parking, breakfast etc '
    },
    {
        name: 'Customer preference/Special request:',
        subhead: 'I need the room to be well heated. I would like a table in my room'
    },
    {
        name: 'Room capacity:',
        subhead: '2 people'
    }
]

const DetailsDeals = () => {
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
                                Non-refundable until 16:00, 25th, 2023
                            </li>
                            <li>
                                Check -in 26th July, 2023.
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
            </div>
        </>
    );
};

export default DetailsDeals;