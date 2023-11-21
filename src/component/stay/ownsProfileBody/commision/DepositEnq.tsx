const DepositEnq = () => {
  return (
    <div>
      <p className="subheadTwoA">Do you require any deposits?</p>

      <div className="commisionContainerTwo">
        <div className="deposit">
          <label className="container">
            <b className="depositText">
              Yes (Select one from the options below)
            </b>
            <input type="radio" name="radio" />
            <span className="checkmark"></span>

            <label className="depositcheck">
              Guests make full payment before reservation is confirmed
              <input type="checkbox" />
              <span className="deposittick"></span>
            </label>

            <label className="depositcheck">
              Pay to book on hold - Guests pay 20% per nightly rate for
              reservation & makes full payment at your property .
              <input type="checkbox" />
              <span className="deposittick"></span>
            </label>
          </label>

          <br />

          <label className="container">
            <b className="depositText">
              No - Guests can pay at the hotel. Hotel reserves rooms without
              receiving payment.
            </b>

            <input type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>

          <p className="noteDepo">
            NB: The company will not be held responsible if there is any
            default.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DepositEnq;
