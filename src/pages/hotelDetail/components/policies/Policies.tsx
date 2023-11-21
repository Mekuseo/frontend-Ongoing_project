import "./Policies.css";
import { FaSignInAlt, FaSignOutAlt, FaCheck } from "react-icons/fa";

interface PoliciesProps {
  checkInTime: string;
  checkOutTime: string;
  count: number;
  selectedCancellation: string;
  refundPercentage: string;
  selectedPaymentMethods: string[];
  checkedAmenities: {
    amenity: string;
    subItem: string;
  }[];
}

const Policies: React.FC<PoliciesProps> = ({
  checkInTime,
  checkOutTime,
  count,
  selectedCancellation,
  refundPercentage,
  selectedPaymentMethods,
  checkedAmenities,
}) => {
  const allowedAmenities = checkedAmenities.filter(
    (item) => item.amenity === ""
  );
  return (
    <div className="policy-body">
      <h1>Policies and Fees</h1>
      <div className="policies-list">
        <div className="policies-listContent">
          <h4>Property Policy</h4>
          <p>The property does not allow late night hanging around</p>
        </div>
        <div className="policies-listContent">
          <h4>Cancellation policy</h4>
          <p>
            The property has a {selectedCancellation}-hour free cancellation
            window before check-in time at {refundPercentage}% refund.
          </p>
        </div>
        <div className="policies-listContent">
          <h4>Payment Policy</h4>
          <p>This hotel accepts the following payment(s):</p>
          <ul>
            {selectedPaymentMethods.map((paymentMethod, index) => (
              <li key={index}>{paymentMethod}</li>
            ))}
          </ul>
        </div>
        <div className="policies-checkin">
          <div className="policies-checkInList">
            <h4>Check-in and check-out</h4>
            <p>
              <FaSignInAlt style={{ marginRight: "7px" }} />
              Check-in after {checkInTime}
            </p>
            <p>
              <FaSignOutAlt style={{ marginRight: "7px" }} />
              Check-out before {checkOutTime}
            </p>
          </div>
          <div>
            <h4>Age</h4>
            <p>Age restriction is for people under {count}</p>
          </div>
        </div>
        <ul>
          {allowedAmenities.map((item, index) => (
            <li key={index}>
              <FaCheck style={{ color: "green", marginRight: "2" }} />{" "}
              {item.subItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Policies;
