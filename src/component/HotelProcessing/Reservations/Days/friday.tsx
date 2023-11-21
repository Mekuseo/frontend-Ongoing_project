// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import ".//days.css"
import React, { useState } from 'react';
import ClassicNumber from "./ChangeNumber/classicNumber";
import StandardNumber from "./ChangeNumber/standardNumber";
import PresidentialNumber from "./ChangeNumber/PresidentialNumber";

const Friday = () => {
  const [activeDiv, setActiveDiv] = useState(null);

  const handleDivClick = (divId) => {
    setActiveDiv(divId === activeDiv ? null : divId);
  };

  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredDiv(index);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  const divs = [
    '07',
    '13',
  ];


  return (
    <div>
      <div
        className={`toggle-div headTab ${activeDiv === 1 ? 'active' : ''}`}
        onClick={() => handleDivClick(1)}
      >
        <h1>
        Friday
        </h1>
      </div>
      <div>
      {divs.map((content, index) => (
        <div
          key={index}
          className={`toggle-div ${hoveredDiv === index ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
           <h2>
              {content}
          </h2>
        
          {hoveredDiv === index && 
            <div className="daysReservationClicked">
                <p>
                    Adjust room availability 
                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                        <path d="M3.3917 4.60427H2.60003C2.48337 4.60427 2.2292 4.56885 2.09378 4.43343L1.46253 3.94593L1.6542 3.69802L2.30003 4.19802C2.35212 4.24802 2.48337 4.28968 2.60003 4.28968H3.3917C3.5792 4.28968 3.78128 4.13968 3.82295 3.97093L4.32712 2.43968C4.36045 2.34802 4.3542 2.26468 4.31045 2.20427C4.26462 2.13968 4.18128 2.10218 4.0792 2.10218H3.24587C3.13753 2.10218 3.03753 2.05635 2.96878 1.97718C2.89795 1.89593 2.8667 1.7876 2.88337 1.6751L2.98753 1.00635C3.01253 0.889683 2.93337 0.758433 2.82087 0.720933C2.71878 0.683433 2.58753 0.7376 2.5417 0.804266L1.68753 2.0751L1.4292 1.90218L2.28337 0.63135C2.41462 0.435516 2.70212 0.341766 2.92712 0.427183C3.18753 0.5126 3.3542 0.8001 3.29587 1.06677L3.19378 1.72302C3.1917 1.7376 3.1917 1.75843 3.20628 1.7751C3.2167 1.78552 3.23128 1.79177 3.24795 1.79177H4.08128C4.28545 1.79177 4.46253 1.87718 4.5667 2.0251C4.66878 2.16885 4.68962 2.35843 4.62295 2.54177L4.12503 4.05843C4.04795 4.36052 3.72712 4.60427 3.3917 4.60427Z" fill="#263238"/>
                        <path d="M1.12085 4.37533H0.912516C0.5271 4.37533 0.3396 4.19408 0.3396 3.82324V1.78158C0.3396 1.41074 0.5271 1.22949 0.912516 1.22949H1.12085C1.50627 1.22949 1.69377 1.41074 1.69377 1.78158V3.82324C1.69377 4.19408 1.50627 4.37533 1.12085 4.37533ZM0.912516 1.54199C0.685433 1.54199 0.6521 1.59616 0.6521 1.78158V3.82324C0.6521 4.00866 0.685433 4.06283 0.912516 4.06283H1.12085C1.34793 4.06283 1.38127 4.00866 1.38127 3.82324V1.78158C1.38127 1.59616 1.34793 1.54199 1.12085 1.54199H0.912516Z" fill="#263238"/>
                    </svg>
                </p>

                <ClassicNumber />
                <StandardNumber />
                <PresidentialNumber />
            </div>
        }
        </div>
      ))}
      </div>
    </div>
  );
};

export default Friday;