import ".//toDo.css"
import ImageHeader from "./imageHeader";
import CreateEvent from "./createEvent";
import Activities from "./activities";
import Days from "./daysEvents/days";
import HangOutCards from "./daysEvents/cards";
import ThingsHappening from "./thingsHappening";
import Trending from "./trending";

const ToDo = () => {
    return(
        <>
            <div>
                <br /><br />
                <ImageHeader />
                <CreateEvent />
                <Activities />
                <div className="daysContainerToDo">
                    <Days />
                    <HangOutCards />
                </div>
                
                <ThingsHappening />
                <Trending />
                <Activities />
                <HangOutCards />
                <br />
            </div>
        </>
    );
};

export default ToDo;