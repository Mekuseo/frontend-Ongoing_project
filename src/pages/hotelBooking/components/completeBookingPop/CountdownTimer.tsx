import React, { useState, useEffect } from "react";

type CountdownTimerProps = {
  seconds: number;
  size: number;
  strokeBgColor: string;
  strokeColor: string;
  strokeWidth: number;
  onCountdownComplete: () => void;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  seconds,
  size,
  strokeBgColor,
  strokeColor,
  strokeWidth,
  onCountdownComplete,
}) => {
  const [countdown, setCountdown] = useState(seconds);

  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    } else {
      onCountdownComplete();
    }
  }, [countdown, onCountdownComplete]);

  const radius = size / 2;
  const circumference = size * Math.PI;
  const strokeDashoffset =
    countdown === seconds ? 0 : (countdown / seconds) * circumference;

  const countdownSizeStyles = {
    height: size,
    width: size,
  };

  return (
    <div style={{ ...countdownSizeStyles, position: "relative" }}>
      <p
        style={{
          fontFamily: "volkhov, sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize:"45px",
          marginTop:"25px"
        }}
        className="timerStyling"
      >
        {countdown}s
      </p>
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transform: "rotateY(-180deg) rotateZ(-90deg)",
          overflow: "visible",
        }}
      >
        <circle
          cx={radius}
          cy={radius}
          r={radius}
          fill="none"
          stroke={strokeBgColor}
          strokeWidth={strokeWidth}
        />
      </svg>
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transform: "rotateY(-180deg) rotateZ(-90deg)",
          overflow: "visible",
        }}
      >
        <circle
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={radius}
          cx={radius}
          cy={radius}
          fill="none"
          strokeLinecap="round"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
};

export default CountdownTimer;
