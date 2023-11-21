import { useState, useEffect } from "react";
import CountdownTimer from "./CountdownTimer";
import "./CompleteBookingPop.css";
import RoomUnavailable from "../../RoomUnavailable";
import { baseURL } from "../../../../severs/auth";
import axios from "axios";

interface CompleteBookingPopProps {
  userEmail: string;
  totalRoomPrice: string;
}

const CompleteBookingPop: React.FC<CompleteBookingPopProps> = ({
  userEmail,
  totalRoomPrice,
}) => {
  const [countdownCompleted, setCountdownCompleted] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [popupWindow, setPopupWindow] = useState<Window | null>(null);

  const handleCountdownComplete = async () => {
    setCountdownCompleted(true);
    setShowPopup(false);
    const parsedRoomPrice = parseInt(totalRoomPrice, 10);

    try {
      const requestData = {
        amount: parsedRoomPrice,
        email: userEmail,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${baseURL}payments/deposit/`,
        requestData,
        config
      );

      if (response.status === 200) {
        const { authorization_url } = response.data.data;

        // Open the authorization URL in a popup after a successful response
        const popup = window.open(
          authorization_url,
          "_blank",
          "width=600,height=600"
        );
        if (!popup || popup.closed || typeof popup.closed === "undefined") {
          console.log("The popup window has been blocked by the browser.");
          // Handle the situation where the popup is blocked
        } else {
          // Save the reference to the popup window
          // setPopupWindow(popup);
        }
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    // Close the popup window after 5 seconds (adjust duration as needed)
    if (popupWindow) {
      setTimeout(() => {
        popupWindow.close();
      }, 5000); // Close after 5 seconds
    }
  }, [popupWindow]);

  return (
    <div className="popup-background">
      {showPopup && (
        <div className="CompleteBookingPop-container">
          <h1>
            Confirming
            <br />
            Availability
          </h1>
          <p style={{ textAlign: "center" }}>
            Please do not refresh or leave this page.
            <br />
            We are confirming your booking.
          </p>
          <div className="timer-wrapper">
            <CountdownTimer
              seconds={5}
              size={120}
              strokeBgColor="green"
              strokeColor="#C4C4C4"
              strokeWidth={5}
              onCountdownComplete={handleCountdownComplete}
            />
          </div>
        </div>
      )}
      {/* {countdownCompleted && <RoomUnavailable />} */}
    </div>
  );
};

export default CompleteBookingPop;
