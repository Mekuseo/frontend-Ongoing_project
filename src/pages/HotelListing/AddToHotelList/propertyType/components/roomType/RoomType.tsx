import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./RoomType.css";

interface RoomTypeProps {
  roomType: number;
  setRoomType: (roomType: number) => void;
}

const RoomType = ({ roomType, setRoomType }: RoomTypeProps) => {
  const handleIncrement = () => {
    setRoomType(roomType + 1);
  };

  const handleDecrement = () => {
    if (roomType > 0) {
      setRoomType(roomType - 1);
    }
  };

  const handleInputChange = (event: { target: { value: string } }) => {
    const newNumBedrooms = parseInt(event.target.value);
    // Check if newNumBedrooms is a valid number before setting it
    if (!isNaN(newNumBedrooms)) {
      setRoomType(newNumBedrooms);
    }
  };

  return (
    <div className="property-roomDetails-container">
      <p>Number of room types</p>
      <small>The types of classes of rooms in this property</small>
      <div className="propertyType-Cards mobileroomcapacity">
        <p>How many room types are available in your property.</p>
        <div className="property-roomDetails-calc">
          <div onClick={handleDecrement}>
            <FontAwesomeIcon icon={faMinus} />
          </div>

          <input
            type="number"
            placeholder="1"
            value={roomType}
            onChange={handleInputChange}
          />
          <div onClick={handleIncrement}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomType;
