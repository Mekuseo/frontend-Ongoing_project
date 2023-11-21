import { ReactEventHandler } from "react";
import PhoneNumber from "../phoneNumber";

interface ContactDProps {
  setPhoneNumber: (phoneNumber: string) => void;
  setPhoneNumberCountry: (phoneNumberCountry: string) => void;
  phoneNumberCountry: string;
  phoneNumber: string;
}

const ContactD: React.FC<ContactDProps> = ({
  setPhoneNumber,
  setPhoneNumberCountry,
  phoneNumberCountry,
  phoneNumber,
}) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handlePhoneNumberChange = (value: string) => {
    const newValue = value.replace(/\s+/g, "");
    setPhoneNumber(newValue);
  };
  const changeHandling: ReactEventHandler<HTMLSelectElement> = (event) => {
    const selectedValue = event.currentTarget.value;
    setPhoneNumberCountry(selectedValue);
  };

  return (
    <div className="FNDetails">
      <h1 className="reusedH1">Contact details</h1>
      <div className="CNBody">
        <span className="topOPB">Mobile Phone Number</span>

        <div className="row">
          <div className="contactColumn">
            <select
              className="form-control"
              value={phoneNumberCountry}
              onChange={changeHandling}
            >
              <option value="+234">Nigeria(+234)</option>
              <option value="+233">Ghana (+233)</option>
              <option value="+27">South Africa (+27)</option>
              <option value="+249">Sudan (+249)</option>
            </select>
          </div>

          <div className="contactColumn">
            <div className="formNomarl">
              <PhoneNumber
                onPhoneNumberChange={handlePhoneNumberChange}
                phoneNumber={phoneNumber}
              />
            </div>
          </div>
        </div>

        <h2>Email Address</h2>
        <span className="Pga">
          We will send you a link to verify your email
        </span>

        <div className="formNomarl">
          <input
            type="text"
            id="text"
            name="Email"
            placeholder={user.email || ""}
            className="input"
            readOnly // Add readOnly attribute
          />
        </div>
      </div>
    </div>
  );
};

export default ContactD;
