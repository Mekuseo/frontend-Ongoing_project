import React from 'react';

interface CustomAlertProps {
  onClose: () => void;
}

const SentAlert: React.FC<CustomAlertProps> = ({ onClose }) => {
  const handleOkClick = () => {
    onClose();
    window.location.reload(); // Refresh the page
  };

  return (
    <div className="custom-alert">
      <div className="custom-alert-content">
        <p>
            Notification successful. We will send an alert to your email address
        </p>

        <button className="custom-alert-ok-button" onClick={handleOkClick}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default SentAlert;
