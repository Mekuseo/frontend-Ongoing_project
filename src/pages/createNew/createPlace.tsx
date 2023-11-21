import Navbar from "../../component/HomePage/header/header";
import Footer from "../../component/HomePage/footer/Footer";
import Form from "../../component/CreatePlace/Form/form";
import "../ThingsToDo/toDo.css"

const CreatePlace = () => {
    return(
        <>
            <Navbar />
            <div className="createEventContainer">
                <Form />
            </div>
            <Footer />
        </>
    );
};

export default CreatePlace;