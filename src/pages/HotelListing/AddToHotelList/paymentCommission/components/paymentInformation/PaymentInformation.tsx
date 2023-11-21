import "./PaymentInformation.css"
import React from "react";

interface PaymentInformationProps {
  paymentInfo: string[];
  selectedPaymentMethods: string[];
  handlePaymentMethodChange: (option: string) => void;
}

const PaymentInformation: React.FC<PaymentInformationProps> = (
  paymentInformationProps
) => {
  const { paymentInfo, selectedPaymentMethods, handlePaymentMethodChange } =
    paymentInformationProps;

  return (
    <div className="paymentinfomobile">
      <h1
      >
        Payment Information
      </h1>
      <div className="requireDeposit-Card">
        <p className="whatPayment">What payment method do you accept on your property?</p>
        <div className="paymentInfo-radio">
          {paymentInfo.map((option, index) => (
            <div className="requireDeposit-yesSection" key={index}>
              <input
                type="checkbox"
                name="paymentMethod"
                value={option}
                id={`checkbox${index}`}
                checked={selectedPaymentMethods.includes(option)}
                onChange={() => handlePaymentMethodChange(option)}
              />
              <label htmlFor={`checkbox${index}`}>{option}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
