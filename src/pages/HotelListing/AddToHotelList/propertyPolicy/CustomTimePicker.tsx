import { SetStateAction, useState } from "react";

function CustomTimePicker() {
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const handleButtonClick = () => {
    setIsTimePickerOpen(!isTimePickerOpen);
  };

  const handleTimeChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedTime(event.target.value);
    setIsTimePickerOpen(false);
  };

  return (
    <div className="custom-time-picker">
      <button className="custom-time-picker-button" onClick={handleButtonClick}>
        {selectedTime || "Select Time"}
      </button>
      {isTimePickerOpen && (
        <input
          type="time"
          className="custom-time-picker-input"
          value={selectedTime}
          onChange={handleTimeChange}
        />
      )}
    </div>
  );
}

export default CustomTimePicker;
