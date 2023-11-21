/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import ".//change.css"

function StandardNumber() {
  const [number, setNumber] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const numberDivRef = useRef(null);

  const handleNumberClick = () => {
    setShowButtons(true);
  };

  const handleIncrement = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const handleDecrement = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleOutsideClick = (event: { target: any; }) => {
      if (numberDivRef.current && !numberDivRef.current.contains(event.target)) {
        setShowButtons(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div ref={numberDivRef} className='changeNumberinline'>
        <div className="row">
          <div className="changeNumberMainColumn">
             <p>
                Standard 
              </p>
          </div>

          <div className="changeNumberMainColumn">
            <div className="changeNumberThreeColumn">
              <div className="row">
                <div className="changeNumberColumn">
                  <button onClick={handleDecrement}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="5" viewBox="0 0 7 5" fill="none">
                        <path d="M5 2.5H2" stroke="#929292" stroke-width="0.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="0.1" y="0.1" width="6.8" height="4.8" rx="0.9" stroke="#929292" stroke-width="0.2"/>
                      </svg>
                  </button>
                </div>

                <div className="changeNumberColumn">
                  <span>
                    {number}
                  </span>
                </div>

                <div className="changeNumberColumn">
                  <button onClick={handleIncrement} className='increaseNumber'>
                    <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 2.5H2" stroke="#929292" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3.5 4V1" stroke="#929292" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                      <rect x="0.1" y="0.1" width="6.8" height="4.8" rx="0.9" stroke="#5F5E5E" stroke-width="0.2"/>
                    </svg>
                  </button>
                </div>
            </div>
            </div>
            
          </div>
        </div>
       

       
          
      </div>
    </div>
  );
}

export default StandardNumber;