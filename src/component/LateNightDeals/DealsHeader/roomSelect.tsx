import { useState } from 'react';
import ".//dealsHeader.css"

function Room() {
  const [countGuest, setCountGuest] = useState(0);

  const increaseGuest = () => {
    setCountGuest(countGuest + 1);
  };

  const decreaseGuest = () => {
    if (countGuest > 0) {
        setCountGuest(countGuest - 1);
    }
  };

  const [countRooms, setCountRooms] = useState(0);

  const increaseRooms = () => {
    setCountRooms(countRooms + 1);
  };

  const decreaseRooms = () => {
    if (countRooms > 0) {
        setCountRooms(countRooms - 1);
    }
  };

  const [countChildren, setCountChildren] = useState(0);

  const increaseChildren = () => {
    setCountChildren(countChildren + 1);
  };

  const decreaseChildren = () => {
    if (countChildren > 0) {
        setCountChildren(countChildren - 1);
    }
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>

        <div className="Guest-dropdown">
            <button onClick={toggleDropdown} className="guest-dropdown-button">
                {/* Guests: {countGuest} guests - {countChildren} children - {countRooms} rooms */}
                Guests: {countGuest + countChildren} guests - {countRooms} rooms 
            </button>
            {isDropdownOpen && (
            <div className="guest-options">
                 <div className="guest-option">
                    <div className="row">
                        <div className="guest-optionside nameCat">
                            <h1>
                                Rooms
                            </h1>
                        </div>

                        <div className="guest-optionside numberCat">
                            <div className='guestIncremenr'>
                                <button onClick={decreaseRooms} className='changeNumGuests dec'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                                        <path d="M13 7.5H6" stroke="#929292" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <rect x="0.5" y="1" width="19" height="12" rx="2.5" stroke="#929292"/>
                                    </svg>
                                </button>
                                <button className="numberDisplayDeals">
                                    {countRooms}
                                </button>
                                
                                <button onClick={increaseRooms} className='changeNumGuests'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
                                        <path d="M13 6H7" stroke="#929292" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10 9V3" stroke="#929292" stroke-linecap="round" stroke-linejoin="round"/>
                                        <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="#929292"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="guest-option">
                    <div className="row">
                        <div className="guest-optionside nameCat">
                            <h1>
                                Adults
                            </h1>
                            <p>
                                Ages 18 or above
                            </p>
                        </div>

                        <div className="guest-optionside numberCat">
                            <div className='guestIncremenr'>
                                <button onClick={decreaseGuest} className='changeNumGuests dec'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                                        <path d="M13 7.5H6" stroke="#929292" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <rect x="0.5" y="1" width="19" height="12" rx="2.5" stroke="#929292"/>
                                    </svg>
                                </button>
                                <button className="numberDisplayDeals">
                                    {countGuest}
                                </button>
                                
                                <button onClick={increaseGuest} className='changeNumGuests'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
                                        <path d="M13 6H7" stroke="#929292" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10 9V3" stroke="#929292" stroke-linecap="round" stroke-linejoin="round"/>
                                        <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="#929292"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="guest-option">
                    <div className="row">
                        <div className="guest-optionside nameCat">
                            <h1>
                                Children
                            </h1>

                            <p>
                                Ages 0-17
                            </p>
                        </div>

                        <div className="guest-optionside numberCat">
                            <div className='guestIncremenr'>
                                <button onClick={decreaseChildren} className='changeNumGuests'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                                        <path d="M13 7.5H6" stroke="#929292" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <rect x="0.5" y="1" width="19" height="12" rx="2.5" stroke="#929292"/>
                                    </svg>
                                </button>
                                <button className="numberDisplayDeals">
                                    {countChildren}
                                </button>
                                <button onClick={increaseChildren} className='changeNumGuests'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
                                        <path d="M13 6H7" stroke="#929292" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10 9V3" stroke="#929292" stroke-linecap="round" stroke-linejoin="round"/>
                                        <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="#929292"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    </div>
  );
}

export default Room
