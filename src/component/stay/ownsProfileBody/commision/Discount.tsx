const Discount = () => {
  return (
    <div>
      <p className="subheadTwoA">Offer a discount for your bookings.</p>
      <p className="subheadreuseA">
        Offer guests a deal. This helps you get increased bookings.
      </p>
      <div className="commisionContainer">
        {/* <p className="offertext">
                        Offer guests a deal. This helps you get increased bookings.
                    </p> */}

        <div className="commision-inline">
          <input type="text" id="number" placeholder="Input price" name="" />
          <input type="text" id="number" placeholder="10% off" name="" />
        </div>

        <p className="offertext">
          Select the room types that this offer applies to.
        </p>

        <div className="form-inlinePayment">
          <label className="containerAmenities">
            Room type 1
            <input type="checkbox" />
            <span className="tick"></span>
          </label>

          <label className="containerAmenities">
            Room type 2
            <input type="checkbox" />
            <span className="tick"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Discount;
