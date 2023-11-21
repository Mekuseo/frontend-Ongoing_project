import React, { useState } from "react";
import "./form.css";
// import TimeDropdown from './timeDropdown';

interface TimeProps {
  onFormattedStartTimeChange: (formattedStartTime: string) => void;
  onDurationChange: (duration: string) => void;
}

const Time: React.FC<TimeProps> = ({
  onFormattedStartTimeChange,
  onDurationChange,
}) => {
  const [startHour, setStartHour] = useState<number>(8);
  const [startMinute, setStartMinute] = useState<number>(0);
  const [startAMPM, setStartAMPM] = useState<string>("AM");
  const formattedStartTime = `${startHour < 12 ? "0" : ""}${startHour}:${
    startMinute < 12 ? "0" : ""
  }${startMinute} ${startAMPM}`;

  const [endHour, setEndHour] = useState<number>(9);
  const [endMinute, setEndMinute] = useState<number>(0);
  const [endAMPM, setEndAMPM] = useState<string>("PM");

  const handleHourChange = (isStartTime: boolean, value: number) => {
    if (isStartTime) {
      setStartHour(value);
    } else {
      setEndHour(value);
    }
    updateStateChangeHandlers();
  };

  const handleMinuteChange = (isStartTime: boolean, value: number) => {
    if (isStartTime) {
      setStartMinute(value);
    } else {
      setEndMinute(value);
    }
    updateStateChangeHandlers();
  };

  const handleAMPMChange = (isStartTime: boolean, value: string) => {
    if (isStartTime) {
      setStartAMPM(value);
    } else {
      setEndAMPM(value);
    }
    updateStateChangeHandlers();
  };

  const updateStateChangeHandlers = () => {
    let start24Hour = startHour;
    let end24Hour = endHour;

    if (startAMPM === "PM" && startHour < 12) {
      start24Hour += 12;
    }
    if (endAMPM === "PM" && endHour < 12) {
      end24Hour += 12;
    }

    const startMinutes = start24Hour * 60 + startMinute;
    const endMinutes = end24Hour * 60 + endMinute;
    let durationMinutes = endMinutes - startMinutes;

    if (durationMinutes < 0) {
      durationMinutes += 24 * 60;
    }

    const durationHours = Math.floor(durationMinutes / 60);
    const remainingMinutes = durationMinutes % 60;
    const duration = `${durationHours} hours ${remainingMinutes} minutes`;

    onDurationChange(duration);

    onFormattedStartTimeChange(formattedStartTime);
  };

  return (
    <>
      <div className="time-range-picker">
        <label>Start time</label>
        <label>End time</label>
      </div>
      <div className="time-range-picker">
        <div className="time-input-group">
          <div className="custom-time-input">
            {/* Hour */}
            <div className="dropdown">
              <button className="dropdown-btn">
                {startHour < 10 ? `0${startHour}` : startHour}
              </button>
              <div className="dropdown-content">
                {Array.from({ length: 12 }, (_, i) => (
                  <span key={i} onClick={() => handleHourChange(true, i + 1)}>
                    {i < 9 ? `0${i + 1}` : i + 1}
                  </span>
                ))}
              </div>
            </div>
            <span>:</span>
            {/* Minute */}
            <div className="dropdown">
              <button className="dropdown-btn">
                {startMinute < 10 ? `0${startMinute}` : startMinute}
              </button>
              <div className="dropdown-content">
                {Array.from({ length: 60 }, (_, i) => (
                  <span key={i} onClick={() => handleMinuteChange(true, i)}>
                    {i < 10 ? `0${i}` : i}
                  </span>
                ))}
              </div>
            </div>
            {/* AM/PM */}
            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() =>
                  handleAMPMChange(true, startAMPM === "AM" ? "PM" : "AM")
                }
              >
                {startAMPM}
              </button>
              <div className="dropdown-content">
                <span onClick={() => handleAMPMChange(true, "AM")}>AM</span>
                <span onClick={() => handleAMPMChange(true, "PM")}>PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="time-input-group">
          <div className="custom-time-input">
            {/* Hour */}
            <div className="dropdown">
              <button className="dropdown-btn">
                {endHour < 10 ? `0${endHour}` : endHour}
              </button>
              <div className="dropdown-content">
                {Array.from({ length: 12 }, (_, i) => (
                  <span key={i} onClick={() => handleHourChange(false, i + 1)}>
                    {i < 9 ? `0${i + 1}` : i + 1}
                  </span>
                ))}
              </div>
            </div>
            <span>:</span>
            {/* Minute */}
            <div className="dropdown">
              <button className="dropdown-btn">
                {endMinute < 10 ? `0${endMinute}` : endMinute}
              </button>
              <div className="dropdown-content">
                {Array.from({ length: 60 }, (_, i) => (
                  <span key={i} onClick={() => handleMinuteChange(false, i)}>
                    {i < 10 ? `0${i}` : i}
                  </span>
                ))}
              </div>
            </div>
            {/* AM/PM */}
            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() =>
                  handleAMPMChange(false, endAMPM === "AM" ? "PM" : "AM")
                }
              >
                {endAMPM}
              </button>
              <div className="dropdown-content">
                <span onClick={() => handleAMPMChange(false, "AM")}>AM</span>
                <span onClick={() => handleAMPMChange(false, "PM")}>PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Time;
