import Navbar from "../../../component/HomePage/header/header";
import Footer from "../../../component/HomePage/footer/Footer";
import BookingDeals from "../../../component/BookingConfirmation/bookingContainer/bookingDeals";
import DetailsDeals from "../../../component/BookingConfirmation/bookingDetails/detailsDeals";
import PaymentDeals from "../../../component/BookingConfirmation/bookingPayment/paymentDeals";
import HeaderDealsConfirm from "../../../component/BookingConfirmation/headerConfirmation/headerDealsConfirm";
import "../../HotelListing/bookings/bookingConfirmation.css";

const DealsConfirmation = () => {
    return(
        <>
            <Navbar />
            <div className="bookingConfirmationContent">
                <HeaderDealsConfirm />
                <BookingDeals />
                <DetailsDeals />
                <PaymentDeals />
            </div>
            <Footer />
        </>
    );
};

export default DealsConfirmation;