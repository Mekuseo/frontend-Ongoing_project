import { useEffect } from "react";
import "./RoomTypeNumber.css";

interface RoomNumberProps {
  roomTypeName: string;
  setRoomTypeName: (roomTypeName: string) => void;
}

const RoomTypeNumber: React.FC<RoomNumberProps> = ({
  roomTypeName,
  setRoomTypeName,
}) => {
  useEffect(() => {
    localStorage.setItem("roomTypeName", roomTypeName);
  }, [roomTypeName]);

  const handleInputChange = (event: { target: { value: string } }) => {
    const value = event.target.value;
    setRoomTypeName(value);
  };

  return (
    <div className="roomType-count-container">
      <div className="roomType-card">
        <p>Give this room type a name</p>
        <input
          type="text"
          placeholder="e.g. Double exclusive single"
          value={roomTypeName}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default RoomTypeNumber;