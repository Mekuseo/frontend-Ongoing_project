const CanclePolicy = () => {
  return (
    <div>
      <p className="subheadTwoA">Default cancellation policy</p>

      <p className="subheadreuseA">Cancellation policy options.</p>

      <div className="paymentContainerFour">
        <p className="canceltext">
          *A cancellation window is the amount of time before your local
          cancellation cut-off from the time of check-in and no fee is charged.
          Standard check-in time being 18:00 of the day of reservation.
        </p>

        <div className="cancontainer">
          <div className="tab">
            <label className="canceltickcontain">
              24-hour cancellation window
              <a href="#link1">
                <input type="checkbox" />
                <span className="canceltick"></span>
              </a>
            </label>

            <div id="link1">
              <p className="refundperc">
                How many
                <input type="text" className="ref" />% do you refund in the case
                customer fails to cancel before the cancellation window expires?
              </p>
            </div>

            <label className="canceltickcontain">
              48-hour cancellation window
              <a href="#link2">
                <input type="checkbox" />
                <span className="canceltick"></span>
              </a>
            </label>

            <div id="link2">
              <p className="refundperc">
                How many
                <input type="text" className="ref" />% do you refund in the case
                customer fails to cancel before the cancellation window expires?
              </p>
            </div>

            <label className="canceltickcontain">
              72-hour cancellation window
              <a href="#link3">
                <input type="checkbox" />
                <span className="canceltick"></span>
              </a>
            </label>

            <div id="link3">
              <p className="refundperc">
                How many
                <input type="text" className="ref" />% do you refund in the case
                customer fails to cancel before the cancellation window expires?
              </p>
            </div>

            <label className="canceltickcontain">
              No cancellation - once booking has been confirmed, payment is
              non-refundable
              <a href="#link4">
                <input type="checkbox" />
                <span className="canceltick"></span>
              </a>
            </label>

            <div id="link4">
              <p className="refundperc">
                How many
                <input type="text" className="ref" />% do you refund in the case
                customer fails to cancel before the cancellation window expires?
              </p>
            </div>
          </div>

          <p className="note">
            Note - If you ticked any of those, it means you won’t charge any
            fees if the customer cancels reservations __ hours before
            cancellation window d check-in time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CanclePolicy;
