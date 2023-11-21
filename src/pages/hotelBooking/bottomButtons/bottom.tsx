import React from 'react';
import "../../../pages/hotelBooking/bottomButtons/bottom.css"

interface PreviousNextButtonsProps {
  currentPage: string;
  pageLinks: string[];
}

const BottomButton: React.FC<PreviousNextButtonsProps> = ({
    currentPage,
    pageLinks,
  }) => {
    const currentIndex = pageLinks.indexOf(currentPage);
  
    const previousPage = currentIndex > 0 ? pageLinks[currentIndex - 1] : null;
    const nextPage =
      currentIndex < pageLinks.length - 1 ? pageLinks[currentIndex + 1] : null;
  
    return (
      <div className="bottombuttons">
        <a href="/" className="main">
          save and exit
        </a>
        <div className="bottombuttons-right">
          {previousPage && (
            <a href={previousPage} className="previous">
              Previous
            </a>
          )}
          {nextPage && (
            <a href={nextPage} className="next">
              Next
            </a>
          )}
        </div>
      </div>
    );
  };
  

export default BottomButton