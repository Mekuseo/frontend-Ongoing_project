import AddPhoto from "../addPhoto";
import "../OPbpdy.css";

interface OwnsDetailProps {
  // Other props...
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  dateOfBirth: string;
  setDateOfBirth: (dateOfBirth: string) => void;
}

const OwnsDetail: React.FC<OwnsDetailProps> = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  dateOfBirth,
  setDateOfBirth,
}) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return (
    <div className="FNDetails">
      <h1 className="reusedH1">Full name details</h1>
      <div className="FNDBody">
        <div className="headerFNB">
          <div className="firstNameDetails">
            <h2>First name</h2>
            <div className="formNomarl">
              <input
                type="text"
                placeholder="Jane"
                id="username"
                name="First Name"
                className="input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>

          <div className="LastNameDetails">
            <h2>Last name</h2>
            <div className="formNomarl">
              <input
                type="text"
                placeholder="Doe"
                id="username"
                name="Last Name"
                className="input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>

        <h2>Username</h2>
        <span className="Pga">This is your profile name.</span>

        <div className="formNomarl">
          <input
            type="text"
            id="text"
            name="Email"
            placeholder={user.username || ""}
            className="input"
            readOnly // Add readOnly attribute
          />
        </div>
        <h2>Means of identification</h2>
        <span className="Pga">
          Please upload any clear means of identification.
          <span className="noteId">
            *National ID, NIN, Drivers License, Voters card etc.
          </span>
        </span>

        <AddPhoto />

        <span className="topOPB">Date of birth</span>

        <div className="input-wrapper">
          <div className="select">
            <input
              type="date"
              className="selectdate"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnsDetail;
