import Navbar from "../../component/HomePage/header/header";
import Footer from "../../component/HomePage/footer/Footer";
import Form from "../../component/CreateEvent/Form/form";
import "../ThingsToDo/toDo.css"

const CreateEvent = () =>{
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

export default CreateEvent;