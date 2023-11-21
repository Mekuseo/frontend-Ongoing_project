import PaymentCheck from './makePaymentCheck';

const MakePaymentReservations = () => {
    return(
        <>
            <div className="makePaymentReservationContainer">
                <h1>
                    Make Payment
                </h1>

                <h2>
                    How do you want to pay?
                </h2>

                <PaymentCheck label="Pay now" additionalContent="Make a payment of N5,000.00" />
                <PaymentCheck label="Reserve now pay later" additionalContent="Make your reservation now" />

                <p className='makePaymentExpiry'>
                    Expires in 12 hours, at 13:00 WAT , 5th Sept 2023
                </p>
            </div>
        </>
    );
};

export default MakePaymentReservations;