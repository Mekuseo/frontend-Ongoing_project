import React from 'react';

interface RoomCapacityProps {
  capacity: any;
  decCapacity: any;
  incCapacity: any;
  changeCapacity: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const RoomCapacity = ({capacity, decCapacity, incCapacity, changeCapacity}: RoomCapacityProps) => {

  return (
    <div>
      <p className="propTypeHeaderreused">Room type capacity</p>

      <br />
      <br />

      <div className="typeContainer">
        <p className="details">
          How many people can this room type accomodate?
        </p>

        <div className="numberInc">
          <div className="quantity clearfix">
            <input
              type="button"
              value="-"
              className="minus"
              onClick={decCapacity}
            />
            <input
              type="text"
              value={capacity}
              onChange={changeCapacity}
              className="qty"
            />
            <input
              type="button"
              value="+"
              className="plus"
              onClick={incCapacity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCapacity;
