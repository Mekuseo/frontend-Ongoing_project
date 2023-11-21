import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RoomCapacity.css";
import "../roomDetails/RoomDetails.css"

interface RoomCapacityProps {
  numOfBedrooms: number;
  setOfNumBedrooms: (numOfBedrooms: number) => void;
}

const RoomCapacity: React.FC<RoomCapacityProps> = ({
  numOfBedrooms,
  setOfNumBedrooms,
}) => {
  const handleIncrement = () => {
    console.log({ numOfBedrooms });
    setOfNumBedrooms(numOfBedrooms + 1);
    console.log({ numOfBedrooms });
  };

  const handleDecrement = () => {
    if (numOfBedrooms > 0) {
      setOfNumBedrooms(numOfBedrooms - 1);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value) || 1;
    setOfNumBedrooms(newValue);
  };

  const inputWidth = `${(numOfBedrooms || 1).toString().length * 20 + 40}px`;

  return (
    <div className="property-roomDetails-container mobileroomdetails">
      <p>Room type capacity</p>
      <div className="propertyType-Cards mobileroomcapacity">
        <p>How many people can this room type accommodate?</p>
        <div className="property-roomDetails-calc">
          <div onClick={handleDecrement}>
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <input
            type="number"
            placeholder="0"
            value={numOfBedrooms}
            onChange={handleInputChange}
            style={{ width: inputWidth }}
          />
          <div onClick={handleIncrement}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCapacity;
