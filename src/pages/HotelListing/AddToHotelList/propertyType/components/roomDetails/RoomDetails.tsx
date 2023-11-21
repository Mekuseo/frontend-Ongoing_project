import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RoomDetails.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface RoomDetailsProps {
  numberBedrooms: number;
  setNumberBedrooms: (numBedrooms: number) => void;
}

const RoomDetails: React.FC<RoomDetailsProps> = ({
  numberBedrooms,
  setNumberBedrooms,
}) => {
  // useEffect(() => {
  //   localStorage.setItem("numBedrooms", numberBedrooms.toString());
  // }, [numberBedrooms]);

  const handleIncrement = () => {
    setNumberBedrooms(numberBedrooms + 1);
  };

  const handleDecrement = () => {
    if (numberBedrooms > 0) {
      setNumberBedrooms(numberBedrooms - 1);
    }
  };

  const handleInputChange = (event: { target: { value: string } }) => {
    setNumberBedrooms(parseInt(event.target.value));
  };

  const inputWidth = `${numberBedrooms?.toString().length * 20 + 40}px`;

  return (
    <div className="property-roomDetails-container">
      <p className="roomsanddeetsmobile">Rooms and details</p>
      <div className="propertyType-Cards mobileroomcapacity">
        <p className="roomdeetsmobile">Total number of bedrooms in your property</p>
        <div className="property-roomDetails-calc">
          <div onClick={handleDecrement}>
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <input
            type="number"
            placeholder="0"
            value={numberBedrooms}
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

export default RoomDetails;