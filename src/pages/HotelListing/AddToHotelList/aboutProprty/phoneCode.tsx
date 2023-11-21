import React, { ChangeEvent, useState } from "react";
import "./phoneEmail.css";
import { phoneNumberAutoFormat } from "../../../../component/HotelProcessing/number";

interface PhoneCode {
  name: string;
  dial_code: string;
}

interface PhoneCodeAutocompleteProps {
  options: PhoneCode[];
  onSelect: (dial_code: string) => void;
  onPhoneNumberChange: (phoneNumber: string) => void;
  phoneNumberOneCode: string;
  setPhoneNumberOneCode: (phoneNumberOneCode: string) => void;
  phoneNumberOne: string;
  setPhoneNumberOne: (phoneNumberOne: string) => void;
  phoneNumberTwoCode: string;
  setPhoneNumberTwoCode: (phoneNumberTwoCode: string) => void;
  phoneNumberTwo: string;
  setPhoneNumberTwo: (phoneNumberTwo: string) => void;
}

const PhoneCodeAutocomplete: React.FC<PhoneCodeAutocompleteProps> = ({
  options,
  onSelect,
  onPhoneNumberChange,
  phoneNumberOneCode,
  setPhoneNumberOneCode,
  phoneNumberOne,
  setPhoneNumberOne,
  phoneNumberTwoCode,
  setPhoneNumberTwoCode,
  phoneNumberTwo,
  setPhoneNumberTwo,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownTwo, setShowDropdownTwo] = useState(false);

  const handleInputChange = () => {
    setShowDropdown(true);
  };

  const handleInputTwoChange = () => {
    setShowDropdownTwo(true);
  };

  const handleOptionSelect = (dial_code: string) => {
    setPhoneNumberOneCode(dial_code);
    setShowDropdown(false);
    onSelect(dial_code);
  };

  const handleOptionTwoSelect = (dial_code: string) => {
    setPhoneNumberTwoCode(dial_code);
    setShowDropdownTwo(false);
    onSelect(dial_code);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = phoneNumberAutoFormat(e.target.value);
    setPhoneNumberOne(targetValue);
    onPhoneNumberChange(targetValue);
  };

  const onChangeSecond = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = phoneNumberAutoFormat(e.target.value);
    setPhoneNumberTwo(targetValue);
    onPhoneNumberChange(targetValue);
  };

  const filterOptions = (input: string) => {
    return options.filter(
      (option) =>
        option.name.toLowerCase().includes(input.toLowerCase()) ||
        option.dial_code.includes(input)
    );
  };

  return (
    <>
      <div className="phoneextranetspacing">
        <div className="country-phone-code-autocomplete">
          <p className="phoneemailabprophead">Property phone number 1</p>
          <input
            type="text"
            value={phoneNumberOneCode}
            onClick={handleInputChange}
            onChange={(e) => {
              handleInputChange();
              setPhoneNumberOneCode(e.target.value);
            }}
            placeholder="+234"
            className="countrycodeabproperty"
          />

          <input
            type="text"
            className="phonenumberabproperty"
            value={phoneNumberOne}
            onChange={onChange}
            maxLength={13}
            placeholder="080 1234 5678"
          />
        </div>

        {showDropdown && (
          <ul className="phonecodedropdownaboutprop">
            {filterOptions(phoneNumberOneCode).map((option) => (
              <li
                key={option.name}
                onClick={() => handleOptionSelect(option.dial_code)}
              >
                {option.name} ({option.dial_code})
              </li>
            ))}
          </ul>
        )}

        <div className="country-phone-code-two-autocomplete">
          <p className="phoneemailabprophead">Property phone number 2</p>
          <input
            type="text"
            value={phoneNumberTwoCode}
            onClick={handleInputTwoChange}
            onChange={(e) => {
              handleInputTwoChange();
              setPhoneNumberTwoCode(e.target.value);
            }}
            placeholder="+234"
            className="countrycodeabproperty"
          />
          <input
            type="text"
            className="phonenumberabproperty"
            value={phoneNumberTwo}
            onChange={onChangeSecond}
            maxLength={13}
            placeholder="080 1234 5678"
          />
        </div>

        {showDropdownTwo && (
          <ul className="phonecodedropdownaboutpropTwo">
            {filterOptions(phoneNumberTwoCode).map((option) => (
              <li
                key={option.name}
                onClick={() => handleOptionTwoSelect(option.dial_code)}
              >
                {option.name} ({option.dial_code})
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default PhoneCodeAutocomplete;
