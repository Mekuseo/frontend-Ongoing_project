import DealsIcons from './dealsIcons';
import ".//dealsDetails.css";

const DealsIconsContainer = () => {
    return(
        <>
            <div className="dealsContentContainers">
                <h1>
                    What this place offers
                </h1>

                <DealsIcons />
            </div>
        </>
    );
};

export default DealsIconsContainer;