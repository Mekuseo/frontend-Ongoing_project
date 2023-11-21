import image from "../../assets/pics/imageheader.png";
import CustomerDetails from "./Details/customerDetail";
import HotelDetails from "./Details/hotelDetail";
import "./bookingConfirmation.css";

const HeaderBooking = () =>{
    return(
        <>

            <div className="headerLogoandConfirmationBookingConfirmation">
                <div className="leftAligned">
                    <img src={image} alt="" />
                    <p>
                        RC: 7024893
                    </p>
                </div>

                <div className="rightAligned">
                    <h1>
                        PREPAID
                    </h1>

                    <p>
                        Booking Confirmation
                    </p>
                </div>
            </div>
            
            <div className="bookingIDConfirmation">
                <h1>
                    Booking ID: <span>ID100904</span>
                </h1>

                <p>
                    Reservation Information
                </p>
            </div>

            <div className="hotelAndCustomerDetails">
                <div className="row">
                    <div className="hotelandcutomerdetailscol hosteldetailsbookingline">
                        <HotelDetails />
                    </div>

                    <div className="hotelandcutomerdetailscol customerdetailsbookingline">
                        <CustomerDetails />
                    </div>
                </div>
                
                <div className="roomtypedetailsbookingcontainer">
                    <div className="roomtypedetailsbooking">
                        <table className="roombookingdetailstable">
                            <tr>
                                <th>Room type</th>
                                <th>No. of Rooms</th>
                                <th>Bed Type</th>
                                <th>Room Occupancy</th>
                            </tr>
                            <tr>
                                <td>Double</td>
                                <td>2</td>
                                <td>Single bed</td>
                                <td>2 Adults</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default HeaderBooking;