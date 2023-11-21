const RoomType = () => {
  return (
    <div>
      <p className="propTypeHeaderreused">Room type 1</p>

      <br />
      <br />

      <div className="typeContainer">
        <p className="details">Give this room type a name</p>

        <input
          type="text"
          placeholder="E.g Double exclusive, single "
          className="roomType"
        />
      </div>
    </div>
  );
};

export default RoomType;
