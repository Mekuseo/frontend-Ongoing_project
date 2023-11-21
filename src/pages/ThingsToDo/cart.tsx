import Navbar from "../../component/HomePage/header/header";
import Footer from "../../component/HomePage/footer/Footer";
import ToDoCart from "../../component/ThingsToDo/Cart/cart";

const ThingsToDoCart = () => {
    return(
        <>
            <Navbar />
            <ToDoCart />
            <Footer />
        </>
    );
};

export default ThingsToDoCart;