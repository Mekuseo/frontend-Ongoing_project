import ".//bookingConfirmation.css";
import Navbar from "../../../component/HomePage/header/header";
import Footer from "../../../component/HomePage/footer/Footer";
import HeaderConfirmation from "../../../component/BookingConfirmation/headerConfirmation/headerConfirmation";
import BookingContainer from "../../../component/BookingConfirmation/bookingContainer/bookingContainer";
import BookingDetails from "../../../component/BookingConfirmation/bookingDetails/bookingDetails";
import BookingPayment from "../../../component/BookingConfirmation/bookingPayment/bookingPayment";

const HotelListingBookingConfirm = () => {
    return(
        <>
            <Navbar />
                <div className="bookingConfirmationContent">
                    <HeaderConfirmation />
                    <BookingContainer />
                    <BookingDetails />
                    <BookingPayment />
                </div>
            <Footer />
        </>
    );
};

export default HotelListingBookingConfirm;