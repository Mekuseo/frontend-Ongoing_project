// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import './HomeDisplay.css';

const SearchButtons: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const MySVG1 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 24" fill="none">
        <g clip-path="url(#clip0_6780_10251)">
            <path d="M8.5 18L10.5 5L12.5 3L14.5 5L16.5 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.5 21V18H19.5V21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.5 21H21.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_6780_10251">
            <rect width="24" height="24" transform="translate(0.5)"/>
            </clipPath>
        </defs>
    </svg>
  );

  const MySVG2 = () => (
    <svg xmlns="http://w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 24" fill="none">
        <g clip-path="url(#clip0_6780_10225)">
            <path d="M3.5 21H10.5V18C10.5 17.4696 10.7107 16.9609 11.0858 16.5858C11.4609 16.2107 11.9696 16 12.5 16C13.0304 16 13.5391 16.2107 13.9142 16.5858C14.2893 16.9609 14.5 17.4696 14.5 18V21H21.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.5 21V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.5 21V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.5 12H18.5C19.2956 12 20.0587 11.6839 20.6213 11.1213C21.1839 10.5587 21.5 9.79565 21.5 9C19.4562 9.05748 17.4513 8.49459 15.8154 7.404C14.1795 6.31342 13.0102 4.76016 12.5 3C11.9898 4.76016 10.8205 6.31342 9.18463 7.404C7.54875 8.49459 5.54383 9.05748 3.5 9C3.5 9.79565 3.81607 10.5587 4.37868 11.1213C4.94129 11.6839 5.70435 12 6.5 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_6780_10225">
            <rect width="24" height="24" transform="translate(0.5)"/>
            </clipPath>
        </defs>
    </svg>
  );

  const MySVG3 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_6780_10232)">
            <path d="M4 11H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 6.5C12 7.5 7 11 4 11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 6.5C12 7.5 17 11 20 11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 11C5.667 16.333 5 19.667 4 21H8C9 21 12 17 12 12V11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 11C18.333 16.333 19 19.667 20 21H16C15 21 12 17 12 12V11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 7V3L14 4H12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_6780_10232">
            <rect width="24" height="24"/>
            </clipPath>
        </defs>
    </svg>
  );

  const MySVG4 = () => (
    <svg xmlns="http://w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_6780_10241)">
            <path d="M5 17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19C7.53043 19 8.03914 18.7893 8.41421 18.4142C8.78929 18.0391 9 17.5304 9 17C9 16.4696 8.78929 15.9609 8.41421 15.5858C8.03914 15.2107 7.53043 15 7 15C6.46957 15 5.96086 15.2107 5.58579 15.5858C5.21071 15.9609 5 16.4696 5 17Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 17C16 17.5304 16.2107 18.0391 16.5858 18.4142C16.9609 18.7893 17.4696 19 18 19C18.5304 19 19.0391 18.7893 19.4142 18.4142C19.7893 18.0391 20 17.5304 20 17C20 16.4696 19.7893 15.9609 19.4142 15.5858C19.0391 15.2107 18.5304 15 18 15C17.4696 15 16.9609 15.2107 16.5858 15.5858C16.2107 15.9609 16 16.4696 16 17Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 9L7 5H14.438C14.884 5.00007 15.3172 5.1492 15.6687 5.42371C16.0202 5.69821 16.2698 6.08232 16.378 6.515L17 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 9V5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 7V11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.0001 14.001C21.5348 13.3792 20.9308 12.8746 20.2363 12.5272C19.5417 12.1799 18.7757 11.9993 17.9991 12C17.2228 11.9994 16.457 12.1798 15.7626 12.527C15.0682 12.8742 14.4644 13.3786 13.9991 14H10.9991C10.5334 13.3783 9.92926 12.8736 9.23453 12.5261C8.5398 12.1787 7.77363 11.9979 6.99684 11.9982C6.22005 11.9985 5.45403 12.1798 4.75956 12.5278C4.06509 12.8758 3.46129 13.3809 2.99609 14.003" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 12V9H18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_6780_10241">
            <rect width="24" height="24" />
            </clipPath>
        </defs>
    </svg>
  );

  const buttons = [
    { label: 'Places to visit', icon: <MySVG1 /> },
    { label: 'Happening this weekend', icon: <MySVG2 /> },
    { label: 'Apartments', icon: <MySVG3 /> },
    { label: 'Car rides', icon: <MySVG4 /> },
  ];

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <div className="homebutton-group">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`button ${selectedButton === index ? 'active' : ''}`}
          onClick={() => handleButtonClick(index)}
        >
            {button.icon}
            {button.label}
        </button>
      ))}
    </div>
  );
};

export default SearchButtons;
