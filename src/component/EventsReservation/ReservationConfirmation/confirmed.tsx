import "./reservationConfirmed.css";
import image from "../../../assets/pics/Frame 2290.png"

const Confirmed = () =>{
    return(
        <>
            <img src={image} alt="" className="eventReservationImage"/>

            <br/>

            <div className="eventReservationButtons">
                <button className="active">
                    Contact Organizer
                </button>

                <button>
                    Print Ticket
                </button>

                <button>
                    Review This Event
                </button>
            </div>
        </>
    );
};

export default Confirmed;