import Navbar from "../../component/HomePage/header/header";
import Footer from "../../component/HomePage/footer/Footer";
import ManageEventListings from "../../component/ThingsToDo/ManageEvent/manageEvent";

const ManageEvent = () => {
    return(
        <>
            <Navbar />
            <ManageEventListings />
            <Footer />
        </>
    );
};

export default ManageEvent;