import "./phoneEmail.css";

interface EmailProps {
  emailAddress: string;
  setEmailAddress: (value: string) => void;
}

const Email: React.FC<EmailProps> = ({ emailAddress, setEmailAddress }) => {
  return (
    <>
      <p className="phoneemailabprophead">Email address</p>
      <div className="aboutpropertyemailbox">
        <input
          type="text"
          placeholder="janedoe@thetravelhunters.com"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
      </div>
    </>
  );
};

export default Email;
