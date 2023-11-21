import "./NightDeals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";

interface DiscountRateCounterProps {
  roomAvailability: number;
  setRoomAvailability: (value: number) => void;
}

const DiscountRateCounter = ({
  roomAvailability,
  setRoomAvailability,
}: DiscountRateCounterProps) => {
  return (
    <div className="rateCounter-container">
      <span>Offer guest competitive deals to get increased bookings.</span>
      <span>Room Availability</span>
      <span>Number of available rooms on this offer</span>
      <span>
        <Button onClick={() => setRoomAvailability(roomAvailability - 1)}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <div>{roomAvailability}</div>
        <Button onClick={() => setRoomAvailability(roomAvailability + 1)}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </span>
    </div>
  );
};

export default DiscountRateCounter;
