const TaxAndFee = () => {
  return (
    <div>
      <p className="subheadTwoA">Taxes and fees</p>

      <div className="paymentContainerFive">
        <p className="taxratetext">
          Will these taxes be included in your room rate?
        </p>

        <div className="taxcontain">
          <div className="tab">
            <label className="container">
              <b>Yes</b>

              <a href="#link5">
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </a>
            </label>

            <div className="taxcontent" id="link5">
              <label id="link5">
                Input VAT
                <input type="text" /> %
              </label>
            </div>

            <br />

            <label className="container">
              <b>No</b>

              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="paymentContainerSix">
        <label className="agreement">
          I agree that these prices are the best prices you will find on any
          website for the rooms listed on this property.
          <input type="checkbox" />
          <span className="tick"></span>
        </label>
      </div>
    </div>
  );
};

export default TaxAndFee;
