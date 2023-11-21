import React from 'react';
import './navbar.css';
import "./navbar.css"

interface MobileHeaderProps {
  selectedItem: number;
  pageLinks: string[];
  pageNames: { [key: string]: string };
  handlePreviousClick: () => void;
  handleNextClick: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  selectedItem,
  pageLinks,
  pageNames,
  handlePreviousClick,
  handleNextClick,
}) => {
  const isMobile = window.innerWidth <= 768;
  const currentLink = pageLinks[selectedItem - 1];
  const pageName = pageNames[currentLink];

  return isMobile ? (
    <div className="mobile-header">
      {selectedItem > 1 && (
        <button
          onClick={handlePreviousClick}
          className="previousMobileButton"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 18 13" fill="none">
            <path d="M17 6.33325H1L6.33333 11.6666" stroke="#6E9E76" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 6.33333L6.33333 1" stroke="#6E9E76" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      )}
      <span className="headerExtranetTwonamemobile">{pageName}</span>
      {selectedItem < pageLinks.length && (
        <button
          onClick={handleNextClick}
          className="nextMobileButton"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 18 13" fill="none">
            <path d="M1 6.66675L17 6.66675L11.6667 1.33341" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 6.66667L11.6667 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  ) : null;
};
 
export default MobileHeader;
