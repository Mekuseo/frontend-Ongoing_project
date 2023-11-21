import "./TokenPage.css";
import { useState, useEffect } from 'react';
import ModalNavigations from "../utils/ModalNavigations";
import VerificationSent from "../verificationSent/VerificationSent";

interface TokenPageProps {
  onCancel: () => void;
}

const TokenPage: React.FC<TokenPageProps> = ({ onCancel }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(60);
  const [showVerificationSent, setShowVerificationSent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).classList.contains('tokenPage-overlay')) {
      onCancel();
    }
  };

  const handleVerifyClick = () => {
    setShowVerificationSent(true);
  };

  const handleLeftArrowClick = () => {
    onCancel();
  };

  return (
    <div className={`tokenPage-overlay ${showVerificationSent  ? 'open' : ''}`} onClick={handleClickOutside}>
      {showVerificationSent ? (
        <VerificationSent onCancel={onCancel} />
      ) : (
        <div className={`tokenPage-modal ${showVerificationSent  ? 'open' : ''}`}>
          <ModalNavigations onBack={handleLeftArrowClick} />
          <div className='tokenPage-title'>
            <h2>You're almost there!</h2>
            <p>Please check your inbox for the verification code sent to you</p>
            <small>Enter Code</small>
          </div>

          <form>
            <div className="verification-input-container">
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
            </div>
            <small className='tokenPage-timer'>Resend code in {secondsRemaining} secs</small>

            <button className='tokenPage-btn' onClick={handleVerifyClick}>verify</button>
            <small className='tokenPage-btn-message'>Can't find it? Check your spam folder</small>
          </form>
        </div>
      )}
    </div>
  );
};

export default TokenPage;
