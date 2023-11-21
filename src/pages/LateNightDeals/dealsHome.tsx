import Navbar from '../../component/HomePage/header/header';
import DealsFooter from "../../component/LateNightDeals/DealsFooter/footer";
import DealsImages from '../../component/LateNightDealsHome/backgroundImages';
import DealsCont from '../../component/LateNightDealsHome/LateNightDeals/dealsContent/dealsContent';
import "../../component/LateNightDealsHome/dealsHome.css"

const DealsHome = () => {
    return(
        <>
            <Navbar />
            <div className="dealsHomeCont">
                <DealsImages />
                <DealsCont />
            </div>
            <div className="footerDealsHomeSpace">
                <DealsFooter /> 
            </div>
            
            
        </>
    );
};

export default DealsHome;