import React, { useState } from "react";

const RoomNumber = () => {
  const [types, setTypes] = useState(0);
  const incTypes = () => {
    if (types < 1000) {
      setTypes(Number(types) + 1);
    }
  };
  const decTypes = () => {
    if (types > 0) {
      setTypes(types - 1);
    }
  };

  const changeTypes = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypes(parseFloat(e.target.value));
  };
  return (
    <div>
      <p className="propTypeHeaderreused">Number of room types</p>

      <p className="propTypeSubHeader">
        The types or classes of rooms in this property.
      </p>

      <div className="typeContainer">
        <p className="details">
          How many room types are available in your property.
        </p>

        <div className="numberInc">
          <div className="quantity clearfix">
            <input
              type="button"
              value="-"
              className="minus"
              onClick={decTypes}
            />
            <input
              type="text"
              value={types}
              onChange={changeTypes}
              className="qty"
            />
            <input
              type="button"
              value="+"
              className="plus"
              onClick={incTypes}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomNumber;
