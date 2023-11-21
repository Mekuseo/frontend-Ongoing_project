import "./BookingSteps.css";
import DoubleArrow from "../../../../svgs/DoubleArrow";

const BookingSteps = () => {
  return (
    <div className="bookingSteps-container">
      <div className="bookingSteps-title">
        <h1 style={{color: "black"}}>Step 01</h1>
        <h3 style={{color: "black"}}>Important Details</h3>
      </div>
      <DoubleArrow />
      <div className="bookingSteps-title">
        <h1>Step 02</h1>
        <h3>Booking Summary</h3>
      </div>
      <DoubleArrow />
      <div className="bookingSteps-title">
        <h1>Step 03</h1>
        <h3>Booking Confirmation</h3>
      </div>
    </div>
  )
}

export default BookingSteps