import "./CancellationPolicy.css";
import CheckIn from "../../../../svgs/CheckIn";
import CheckOut from "../../../../svgs/CheckOut";

const CancellationPolicy = () => {
  return (
    <div className="cancellationPolicy-container">
      <h2>Cancellation Policy</h2>

      <ul className="cancellationPolicy-list">
        <li>Fully refundable until 16:00, 25th, 2023</li>
        <li>Cancel for free until 16:00, 25th July, 2023.</li>
        <li>
          If you change or cancel this booking after 16:00, 25th July, you will
          be charged N5,000.00. (5% of 1 nightly room rate).
        </li>
        <li>Check -in 26th July, 2023.</li>
      </ul>

      <div className="cancellationPolicy-flex">
        <div className="cancellationPolicy-flex-row">
          <CheckIn />
          <p style={{fontSize:"18px"}}>Check-in <span style={{fontWeight:"600"}}>13:00 26th July, 2023</span></p>
        </div>
        <div className="cancellationPolicy-flex-row">
          <CheckOut />
          <p style={{fontSize:"18px"}}>Check-out <span style={{fontWeight:"600"}}>11:59 27th July, 2023</span></p>
        </div>
      </div>

      <div>
        <h3 style={{marginBottom:"15px"}}>Terms of Booking</h3>
        <div className="cancellationPolicy-checkbox" style={{alignItems:"baseline"}}>
          <input type="checkbox" />
          <p style={{fontSize:"20px"}}>
            By clicking “Book”, you agree you have read and accept our{" "}
            <a href="#">
              Terms and Condition, Privacy Policy and Government Travel Advice.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
