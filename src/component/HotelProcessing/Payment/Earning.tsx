import ".//Payment.css";
import YearDropOne from "./YearDropDown1";
import MonthDrop from "./MonthDropDown";
import YearDropTwo from './YearDropDown2';

const Earnings = () => {
    return(
        <>
          <p className="headerTextPayment">
                Earnings and Commision
            </p>

            <div className="paymentContainerTwo">

                <div className="centerContainer">
                    <div className="row">
                        <div className="netColumn revenue">
                            <div className="net">
                                <p>
                                    #500,000.00
                                </p>
                                
                            </div>
                            
                            <div className="row">
                                <div className="yearMonth">
                                    <YearDropOne />
                                </div>

                                <div className="yearMonth spacingyearmonth">
                                    <MonthDrop />
                                </div>
                            </div>

                            <table className="earnings">
                                <tr>
                                    <td>
                                        <p className="earningsInput">
                                            ₦ 200,000.00
                                        </p>
                                        
                                    </td>
                                    
                                    <td>
                                        <p className="earningsInput">
                                            ₦ 10,000.00
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div className="netColumn dailyrevenue">
                            <span className="averageDailyRevenue">Average daily revenue</span>

                            <div className="yeardropdowndailyrevenue">
                                <YearDropTwo />
                            </div>
                            
                            <div className="dailyrevenueearningsinput">
                                <p className="earningsInput">
                                    ₦ 547.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="yearMonthCon">
                     <div className="row">
                       

                        <div className="yearMonth">
                            <YearDropTwo />
                        </div>
                    </div>
                </div> */}
            
            </div>
        </>
    );
};

export default Earnings