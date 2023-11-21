import React from "react";
import "./Taxes.css";

interface TaxesProps {
  selectedTaxOption: string;
  vatPercentage: string;
  handleTaxOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleVatPercentageChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  agreeItBestPrice: boolean;
  handleAgreement: (isChecked: boolean) => void;
}

const Taxes: React.FC<TaxesProps> = (TaxesProps) => {
  const {
    selectedTaxOption,
    vatPercentage,
    handleTaxOptionChange,
    handleVatPercentageChange,
    agreeItBestPrice,
    handleAgreement,
  } = TaxesProps;

  return (
    <div className="discountOffer-container">
      <h1
        style={{
          paddingBottom: "5px",
        }}
      >
        Taxes and fees
      </h1>
      <div className="requireDeposit-Card">
        <p className="depositCardText">Will these taxes be included in your room rate?</p>
        <div className="cancellation-radio taxes-radio">
          <div className="cancellation-radioContainers">
            <input
              type="radio"
              name="taxOption"
              value="Yes"
              id="yesTaxes"
              checked={selectedTaxOption === "Yes"}
              onChange={handleTaxOptionChange}
            />
            <label htmlFor="yesTaxes">Yes</label>
          </div>
          {selectedTaxOption === "Yes" && (
            <div className="vat-input-container">
              <input
                type="text"
                placeholder="Input VAT"
                value={vatPercentage}
                onChange={handleVatPercentageChange}
                className="vat-input"
              />
              <span>%</span>
            </div>
          )}
          <div className="cancellation-radioContainers">
            <input
              type="radio"
              name="taxOption"
              value="No"
              id="noTaxes"
              checked={selectedTaxOption === "No"}
              onChange={handleTaxOptionChange}
            />
            <label htmlFor="noTaxes">No</label>
          </div>
        </div>
      </div>
      <div className="requireDeposit-Card taxes-consent">
        <input
          type="checkbox"
          value="Yes"
          name="Yes"
          checked={agreeItBestPrice}
          onChange={(e) => handleAgreement(e.target.checked)}
        />
        <p>
          I agree that these prices are the best prices you will find on any
          website for the rooms listed on this property.
        </p>
      </div>
    </div>
  );
};

export default Taxes;
