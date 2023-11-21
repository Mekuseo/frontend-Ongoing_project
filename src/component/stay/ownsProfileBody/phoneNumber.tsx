import { ChangeEvent } from "react";
import { phoneNumberAutoFormat } from "../../../utils/number";

interface PhoneNumberProps {
  onPhoneNumberChange: (phoneNumber: string) => void;
  phoneNumber: string;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({
  onPhoneNumberChange,
  phoneNumber,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = phoneNumberAutoFormat(e.target.value);
    onPhoneNumberChange(targetValue);
  };

  return (
    <>
      <div className="formNomarl">
        <input
          type="tel"
          value={phoneNumber}
          onChange={onChange}
          maxLength={12}
          className="input"
          placeholder="123-4567-8901"
        />
      </div>
    </>
  );
};

export default PhoneNumber;
