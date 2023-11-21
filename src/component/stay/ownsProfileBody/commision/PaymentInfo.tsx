const PaymentInfo = () => {
  return (
    <div>
      <p className="subheadTwoA">Payment information</p>

      <div className="commisionContainerThree">
        <p className="paymentmethodtext">
          What payment methods do you accept on your property?
        </p>

        <div className="paymethodcontainer">
          <label className="container">
            <p className="paymethod">Card Payment</p>

            <input type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>

          <label className="container">
            <p className="paymethod">Cash</p>

            <input type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>

          <label className="container">
            <p className="paymethod">Bank Transfer</p>

            <input type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>

          <label className="container">
            <p className="paymethod">Point Of Sale(POS)</p>

            <input type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
