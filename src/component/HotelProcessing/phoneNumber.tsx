import { useState, ChangeEvent } from "react";
import { phoneNumberAutoFormat } from ".//number";

interface PhoneNumberProps {
  placeholder: string;
  value: string;
}

const PhoneNumber = ({ placeholder }: PhoneNumberProps) => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = phoneNumberAutoFormat(e.target.value);
    setValue(targetValue);
  };

  return (
    <>
      <div className="formNomarl">
        <input
          type="tel"
          value={value}
          onChange={onChange}
          maxLength={12}
          className="input phonenumberinputextranettwo"
          placeholder={placeholder}
        />
      </div>

      {/* <div>{value}</div> */}
    </>
  );
};

export default PhoneNumber;