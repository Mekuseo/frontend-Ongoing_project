import Navbar from '../../component/HomePage/header/header';
import Footer from "../../component/HomePage/footer/Footer";
import ToDo from '../../component/ThingsToDo/HomePage/toDo';

const ToDoHome = () => {
    return(
        <>
            <Navbar />
            <ToDo />
            <Footer />
        </>
    );
};

export default ToDoHome;