import Navbar from "../../component/HomePage/header/header";
import Footer from "../../component/HomePage/footer/Footer";
import Confirmation from "../../component/EventsReservation/ReservationConfirmation/confirmation";

const ReservationConfirmed = () =>{
    return(
        <>
            <Navbar />
            <Confirmation />
            <Footer />
        </>
    );
};

export default ReservationConfirmed;