import "./header.css";
import SearchForm from "./searchForm";
import Flip from "./time";

const nightHeader = () => {
    return(
        <>
            <div className="dealsImg">
                <div className="travelTopDiv">
                    Travel, feel safe and in comfort with our guides, and our partners. 
                </div>

                <div className="lateNightContainer">
                    <div className="lateNightTextContent">
                        <h1>
                            Get Amazing Late Night Deals At Your Favourite Hotels
                        </h1>

                        <SearchForm />

                        <p>
                            Get up to 
                            <span>
                                50% off 
                            </span>
                            on your favourite hotels, just for you!
                        </p>
                    </div>
                </div>

                
                <Flip />
            </div>
        </>
    );
};

export default nightHeader;