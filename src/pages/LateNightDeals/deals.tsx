import Navbar from "../../component/HomePage/header/header";
import DealsFooter from "../../component/LateNightDeals/DealsFooter/footer";
import DealsHeader from "../../component/LateNightDeals/DealsHeader/dealsHeader";
import SideMap from "../../component/LateNightDeals/DealsContent/Map/sideMap";
import "../../component/LateNightDeals/DealsContent/Cards/dealsContent.css"

const Deals = () =>{
    return(
        <>
            <Navbar />
            <DealsHeader />
            <div className="dealsMainContent">
                <SideMap />
            </div>
            <DealsFooter />
        </>
    );
};

export default Deals;