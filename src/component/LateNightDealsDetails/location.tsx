import ".//dealsDetails.css";
import map from "../../assets/pics/MapsicleMap.png"

const DealsLocation = () => {
    return(
        <>
            <div className="dealsContentContainerLocation">
                <h1>
                    Location
                </h1>

                <img src={map} alt="" />

                <p>
                    Plot 7, Yakubu Gowon way, Asokoro, Abuja 9001-
                </p>
            </div>
        </>
    );
};

export default DealsLocation;