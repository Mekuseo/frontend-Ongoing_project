import TopImages from "../../component/LateNightDealsDetails/topImages";
import Navbar from "../../component/HomePage/header/header";
import DealsFooter from "../../component/LateNightDeals/DealsFooter/footer";
import DealsDetailsContainer from "../../component/LateNightDealsDetails/dealsDetails";
import "../../component/LateNightDeals/DealsContent/Cards/dealsContent.css"


const DealsDetails = () => {
    return(
        <>
            <Navbar />
            
            <div className="dealsMainContent">
                <TopImages />
                <DealsDetailsContainer />
            </div>
            
            <DealsFooter />
        </>
    );
};

export default DealsDetails;