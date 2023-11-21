import React, { useState } from "react";

const PropatiyTypeRDetals = () => {
  const [details, setDetails] = useState(0);

  const incDet = () => {
    if (details < 1000) {
      setDetails(Number(details) + 1);
    }
  };
  const decDet = () => {
    if (details > 0) {
      setDetails(details - 1);
    }
  };

  const changeDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails(parseFloat(e.target.value));
  };

  return (
    <div>
      <p className="propTypeHeader">Rooms and details</p>
      <div className="typeContainer">
        <p className="details">Total number of bedrooms in your property</p>
        <div className="numberInc">
          <div className="quantity clearfix">
            <input type="button" value="-" className="minus" onClick={decDet} />
            <input
              type="text"
              value={details}
              onChange={changeDetails}
              className="qty"
            />
            <input type="button" value="+" className="plus" onClick={incDet} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropatiyTypeRDetals;
