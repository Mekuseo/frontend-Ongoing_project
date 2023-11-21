import "../bookingConfirmation.css"

const CustomerDetails = () =>{
    return(
        <>
            <div className="customerdetailshotelbooking">
                <p>
                    Customer First Name:
                    <span>
                        Zaks
                    </span>
                </p>

                <p>
                    Customer Last Name:
                    <span>
                        Ahmed
                    </span>
                </p>

                <p>
                    Check-In Date:
                    <span>
                        Tue, April 10 2023
                    </span>
                </p>

                <p>
                    Check-out Date:
                    <span>
                        Thurs, April 12 2023 
                    </span>
                </p>
            </div>
        </>
    );
};

export default CustomerDetails;