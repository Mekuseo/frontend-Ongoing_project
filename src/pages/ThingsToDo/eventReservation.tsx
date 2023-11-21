import Navbar from '../../component/HomePage/header/header';
import Footer from "../../component/HomePage/footer/Footer";
import EventReservationComponent from '../../component/EventsReservation/eventReservation';

const EventReservation = () => {
    return(
        <>
            <Navbar />
            <EventReservationComponent />
            <Footer />
        </>
    );
};

export default EventReservation;