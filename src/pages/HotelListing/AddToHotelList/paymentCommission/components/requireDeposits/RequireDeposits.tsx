/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from "react";
import "./RequireDeposits.css";

interface RequireDepositsProps {
  option1Checked: boolean;
  option2Checked: boolean;
  option3Checked: boolean;
  onOption1Change: (isChecked: boolean) => void;
  onOption2Change: (isChecked: boolean) => void;
  onOption3Change: (isChecked: boolean) => void;
}

const RequireDeposits: React.FC<RequireDepositsProps> = (RequireDepositsProps) => {
  return (
    <div className="discountOffer-container">
      <h1>Do you require any deposits?</h1>
      <div>
        <div className="requireDeposit-Card">
          <div className="requireDeposit-section">
            <div className="requireDeposit-yesSection">
              <div className="requireDeposit-sectionOptions">
                <div className="requireDeposit-yesSection">
                  <input
                    type="checkbox"
                    name="yes1"
                    id="yes1"
                    checked={true}
                    onChange={() => {}} 
                    disabled 
                  />
                  <label htmlFor="yes1">
                    Guests make full payment before reservation is confirmed.
                  </label>
                </div>

                <div className="requireDeposit-yesSection">
                  <input
                    type="checkbox"
                    name="yes2"
                    id="yes2"
                    checked={true}
                    onChange={() => {}}
                    disabled
                  />
                  <label htmlFor="yes2">
                    Pay to book on hold - Guests pay 20% per nightly rate for
                    reservation & makes full payment at your property.
                  </label>
                </div>
                {/* <div className="requireDeposit-yesSection">
                  <input
                    type="checkbox"
                    name="yes3"
                    id="yes3"
                    checked={option3Checked}
                    onChange={(e) => onOption3Change(e.target.checked)}
                  />
                  <label htmlFor="yes3">
                    Pay at Hotel ( hotel makes reservations, and receives payment
                    when the guest arrives)
                  </label>
                </div> */}
              </div>
            </div>
            <p>
              NB: The company will not be held responsible if there is any
              default.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequireDeposits;
