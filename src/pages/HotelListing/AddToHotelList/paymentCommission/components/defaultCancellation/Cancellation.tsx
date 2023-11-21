import React, { ChangeEvent } from "react";
import "./Cancellation.css";

interface CancellationProps {
  selectedCancellation: string;
  refundPercentage: string;
  inputBoxValue: string;
  handleCancellationChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleRefundPercentageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleInputBoxChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Cancellation: React.FC<CancellationProps> = (CancellationProps) => {
  const {
    selectedCancellation,
    refundPercentage,
    handleCancellationChange,
    handleRefundPercentageChange,
  } = CancellationProps;

  return (
    <div className="discountOffer-container cancellation-container">
      <h1
      >
        Default cancellation policy
      </h1>
      <p>Cancellation policy options</p>
      <div className="requireDeposit-Card">
        <span className="cancellationWindow">
          *A cancellation window is the period in which the customer cancels a booking, and no fee or penalty is charged.
        </span>
        <div className="paymentInfo-radio cancellation-flex">
          <div className="cancellation-radioContainers cancellation-radioTop">
            {/* Radio button for 24 hours */}
            <div className="cancellation-radioContainers">
              <input
                type="radio"
                name="cancellationOption"
                value="24"
                id="radio24"
                checked={selectedCancellation === "24"}
                onChange={handleCancellationChange}
              />
              <label htmlFor="radio24">24 hour cancellation window</label>
            </div>
          </div>
          {selectedCancellation === "24" && (
            <p>
              How many{" "}
              <input
                type="text"
                // value={inputBoxValue}
                // onChange={handleInputBoxChange}
                value={refundPercentage}
                onChange={handleRefundPercentageChange}
              />
              % do you refund in the case the customer fails to cancel before
              the cancellation window expires?
            </p>
          )}

          {/* Radio button for 48 hours */}
          <div>
            <div className="cancellation-radioContainers">
              <input
                type="radio"
                name="cancellationOption"
                value="48"
                id="radio48"
                checked={selectedCancellation === "48"}
                onChange={handleCancellationChange}
              />
              <label htmlFor="radio48">48 hour cancellation window</label>
            </div>
          </div>
          {selectedCancellation === "48" && (
            <p>
              How many{" "}
              <input
                type="text"
                value={refundPercentage}
                onChange={handleRefundPercentageChange}
              />
              % do you refund in the case the customer fails to cancel before
              the cancellation window expires?
            </p>
          )}

          {/* Radio button for 72 hours */}
          <div>
            <div className="cancellation-radioContainers">
              <input
                type="radio"
                name="cancellationOption"
                value="72"
                id="radio72"
                checked={selectedCancellation === "72"}
                onChange={handleCancellationChange}
              />
              <label htmlFor="radio72">72 hour cancellation window</label>
            </div>
          </div>
          {selectedCancellation === "72" && (
            <p>
              How many{" "}
              <input
                type="text"
                value={refundPercentage}
                onChange={handleRefundPercentageChange}
              />
              % do you refund in the case the customer fails to cancel before
              the cancellation window expires?
            </p>
          )}

          {/* Radio button for no cancellation */}
          <div className="cancellation-radioContainers">
            <input
              type="radio"
              name="cancellationOption"
              value="Cancel"
              id="radioCancel"
              checked={selectedCancellation === "Cancel"}
              onChange={handleCancellationChange}
            />
            <label htmlFor="radioCancel">
              No cancellation - once the booking has been confirmed, payment is
              non-refundable
            </label>
          </div>
        </div>
        {(selectedCancellation === "24" ||
          selectedCancellation === "48" ||
          selectedCancellation === "72") && (
          <p className="cancellation-redNotice">
            <span>Note</span> - If you ticked any of those, it means you won’t
            charge any fees if the customer cancels reservations{" "}
            <span id="cancellation-time">
              {selectedCancellation === "24" && "24"}
              {selectedCancellation === "48" && "48"}
              {selectedCancellation === "72" && "72"}
            </span>{" "}
            hours before the cancellation window and check-in time.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cancellation;
