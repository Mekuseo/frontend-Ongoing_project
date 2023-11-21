// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from 'react';
import ".//table.css"

function Confirmation({ options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="confirmationStatusDrop">
      <div className="confirmationStatusText" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : 'Confirmation status'}
        <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="5" height="4" viewBox="0 0 5 4" fill="none">
            <path d="M0.5 1L2.5 3L4.5 1" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
      {isOpen && (
        <div className='confirmationStatusOption tabs'>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              // className={` ${
              //   selectedOption === option ? 'selected' : ''
              // }`}
              className='confirmationStatusOption tabs'
            >
              <div className="confirmationStatusOption tabs">
                <p>
                   {option.label}
                </p>
               
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const options = [
    { value: 'option1', label: 'Pending' },
    { value: 'option2', label: 'Completed' },
    { value: 'option3', label: 'Denied' },
  ];

  const handleOptionSelect = (option) => {
    console.log('Confirmation status:', option);
  };

  return (
    <div className="">
      <Confirmation options={options} onSelect={handleOptionSelect} />
    </div>
  );
}

export default App;
