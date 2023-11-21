import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';

interface RoomDetailsProps {
  handleIncrementRoomAvailability: () => void;
  handleDecrementRoomAvailability: () => void;
  handleInputChangeRoomAvailability: (event: { target: { value: string } }) => void;
  inputWidth: string;
  availableRooms: number;
}

const RoomAvailability = ({
  handleIncrementRoomAvailability,
  handleDecrementRoomAvailability,
  handleInputChangeRoomAvailability,
  inputWidth,
  availableRooms,
}: RoomDetailsProps
) => {

  return (
<div className="property-roomDetails-container">
      <p>Rooms and details</p>
      <div className="propertyType-Cards">
        <p>Total number of bedrooms in your property</p>
        <div className="property-roomDetails-calc">
          <div onClick={handleDecrementRoomAvailability}>
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <input
            type="number"
            placeholder="0"
            value={availableRooms}
            onChange={handleInputChangeRoomAvailability}
            style={{ width: inputWidth }}
          />
          <div onClick={handleIncrementRoomAvailability}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
    </div>  )
}

export default RoomAvailability