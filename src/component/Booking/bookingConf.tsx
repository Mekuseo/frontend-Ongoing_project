import BodyBooking from "./bodyCont";
import "./bookingConfirmation.css"
import HeaderBooking from "./headerCont"
import PaymentBooking from "./paymentCont";

const MainBooking = () =>{
    return(
        <>
            <HeaderBooking />
            <BodyBooking />
            <PaymentBooking />

            <button className="acknowledgebookingbookingconfirm">
                Acknowledge this booking
            </button>

            <p className="travelhotlinesbookingconfirm">
                Thetravelhunters Hotline( Nigeria) (234) 7062644248; (234)8062323629 Booking questions hotelbookings@thetravelhunters.com
            </p>
        </>
    );
};

export default MainBooking;