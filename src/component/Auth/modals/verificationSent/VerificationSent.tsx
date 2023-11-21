// VerificationSent.tsx
import "./VerificationSent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { BiLock } from "react-icons/bi";
import { useState } from "react";
import Congratulation from "../congratulations/Congratulations";
import TokenPage from "../tokenPage/TokenPage";
import { AiOutlineClose } from "react-icons/ai";

interface VerificationSentProps {
  onCancel: () => void;
}

const VerificationSent: React.FC<VerificationSentProps> = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [userPassword1, setUserPassword1] = useState("");
  const [userPassword2, setUserPassword2] = useState("");
  const [showCongratulation, setShowCongratulation] = useState(false);
  const [showTokenPage, setShowTokenPage] = useState(false); // Add this state variable

  const togglePasswordVisibility1 = (): void =>
    setShowPassword1(!showPassword1);
  const togglePasswordVisibility2 = (): void =>
    setShowPassword2(!showPassword2);

  const handleContinueClick = () => {
    setShowCongratulation(true);
  };

  return (
    <div
      className={`verificationSent-overlay ${showCongratulation ? "open" : ""}`}
    >
      {showCongratulation ? (
        <Congratulation />
      ) : (
        <div
          className={`verificationSent-modal ${
            showCongratulation ? "open" : ""
          }`}
        >
          <a href="./login" className="close-btn">
            <AiOutlineClose />
          </a>
          <div className="verificationSent-title">
            <h2>One final step!</h2>
            <p>
              Your password has almost been reset. Please input new password
            </p>
            <small>Enter new password</small>
          </div>

          <form id="Login" className="input-group-verificationSent">
            <div className="verificationSent-input-wrapper">
              <div className="input-icon">
                <BiLock size={30} />
              </div>
              <input
                type={showPassword1 ? "text" : "password"}
                placeholder="Password"
                id="password1"
                name="password1"
                value={userPassword1}
                onChange={(e) => setUserPassword1(e.target.value)}
              />
              <FontAwesomeIcon
                icon={showPassword1 ? faEye : faEyeSlash}
                className="suffix"
                onClick={togglePasswordVisibility1}
              />
            </div>

            <div className="verificationSent-input-wrapper">
              <div className="input-icon">
                <BiLock size={30} />
              </div>
              <input
                type={showPassword2 ? "text" : "password"}
                placeholder="Confirm Password"
                id="password2"
                name="password2"
                value={userPassword2}
                onChange={(e) => setUserPassword2(e.target.value)}
              />
              <FontAwesomeIcon
                icon={showPassword2 ? faEye : faEyeSlash}
                className="suffix"
                onClick={togglePasswordVisibility2}
              />
            </div>

            <button
              type="button"
              className="submit-btn"
              id="submit-btn"
              onClick={handleContinueClick}
            >
              continue
            </button>
          </form>
        </div>
      )}
      {showTokenPage && <TokenPage onCancel={() => setShowTokenPage(false)} />}
    </div>
  );
};

export default VerificationSent;
