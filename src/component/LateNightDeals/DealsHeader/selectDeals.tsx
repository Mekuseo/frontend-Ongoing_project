// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from 'react';
import data from './select.json';
import ".//dealsHeader.css"

const SelectDeals: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // New state for dropdown visibility

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setSelectedItem('');
    setIsDropdownOpen(true); // Open the dropdown when input changes
  };

  const handleItemClick = (item: string) => {
    setInputValue(item);
    setSelectedItem(item);
    setIsDropdownOpen(false); // Close the dropdown when an option is selected
  };

  return (
    <div className="autocomplete-dropdown">
      <div className="borderAutocompleteDropDownLate">
         <p>
          Where: 
        </p>
        
        <input
          type="text"
          placeholder="City, neighbourhood, property name"
          value={inputValue}
          onChange={handleInputChange}
        />
        {isDropdownOpen && inputValue.length > 0 && (
          <div className="dropdown-container">
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
     
    </div>
  );
};

export default SelectDeals;
