/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import "./searchForm.css";
import React, { useState } from 'react';
import data from '../../../LateNightDeals/DealsHeader/select.json';
import "../../../LateNightDeals/DealsHeader/dealsHeader.css"

const searchForm: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setSelectedItem('');
        setIsDropdownOpen(true); 
    };

    const handleItemClick = (item: string) => {
        setInputValue(item);
        setSelectedItem(item);
        setIsDropdownOpen(false);
    };

    const navigateTo = () => push('/deals');

    return(
        <>
            <div className="dealsContentSearchForminput">
                <div className="dealsContentSearchForminputContainer">
                    <form action="">
                        <div className="row">
                            <div className="dealsContentSearchFormContent inputDealsContent">
                                <div className="formContainer">
                                    <div className="dealsContainerBorder">
                                        <label>
                                            Where:
                                        </label>
                                        <div className="dealsFormContainerInput">
                                            <input type="text" placeholder="City, neighbourhood, property name" value={inputValue} onChange={handleInputChange}/>
                                                {isDropdownOpen && inputValue.length > 0 && (
                                                    <div className="dropdownMain-container">
                                                        {data.categories.map(category => (
                                                            <div key={category.name} className="category-container">
                                                            <div className="category-header">{category.name}</div>
                                                            <div className="category-items">
                                                                {category.items
                                                                .filter(item =>
                                                                    item.toLowerCase().includes(inputValue.toLowerCase())
                                                                )
                                                                .map(item => (
                                                                    <div
                                                                    key={item}
                                                                    className={`item ${selectedItem === item ? 'selected' : ''}`}
                                                                    onClick={() => handleItemClick(item)}
                                                                    >
                                                                    {item}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                        </div>
                                        <div className="dealsFormContainerLine"></div>
                                        <div className="dealsFormContainerLineRight"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="dealsContentSearchFormContent inputDealsContent">
                                <div className="formContainer">
                                    <div className="dealsContainerBorder">
                                        <label>
                                            When:
                                        </label>
                                        <div className="dealsFormContainerInput">
                                            <span className="tonightDealsHome">
                                                Tonight
                                            </span>
                                        </div>
                                        <div className="dealsFormContainerLineTonight"></div>
                                        <div className="dealsFormContainerLineRightTonight"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="dealsContentSearchFormContent submitDealsContent">
                                <a href="/deals" className="sumbitDealsButton">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="27" viewBox="0 0 41 27" fill="none">
                                        <g clip-path="url(#clip0_4412_2353)">
                                            <path d="M28.4173 24.5691L25.834 22.3505M14.8548 23.4598C16.4662 23.4598 18.0619 23.1872 19.5507 22.6576C21.0394 22.128 22.3922 21.3517 23.5316 20.3731C24.6711 19.3945 25.5749 18.2328 26.1916 16.9542C26.8083 15.6756 27.1257 14.3052 27.1257 12.9213C27.1257 11.5374 26.8083 10.167 26.1916 8.88839C25.5749 7.6098 24.6711 6.44805 23.5316 5.46946C22.3922 4.49087 21.0394 3.71461 19.5507 3.18501C18.0619 2.6554 16.4662 2.38281 14.8548 2.38281C11.6004 2.38281 8.47926 3.49311 6.17803 5.46946C3.8768 7.44581 2.58398 10.1263 2.58398 12.9213C2.58398 15.7163 3.8768 18.3968 6.17803 20.3731C8.47926 22.3495 11.6004 23.4598 14.8548 23.4598V23.4598Z" stroke="#263238" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4412_2353">
                                            <rect width="41" height="26.6235" fill="white" transform="translate(0 0.164062)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default searchForm;
