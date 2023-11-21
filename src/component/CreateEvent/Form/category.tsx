import React, { useState } from 'react';
import './form.css';

  const svgIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
      <path d="M1 1L7.1336 7.60542C7.33142 7.81845 7.66858 7.81845 7.8664 7.60542L14 1" fill="white"/>
      <path d="M1 1L7.1336 7.60542C7.33142 7.81845 7.66858 7.81845 7.8664 7.60542L14 1" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  interface DropdownItem {
    value: string;
    label: string;
    subcategories?: DropdownItem[];
  }

  const items: DropdownItem[] = [
    { 
      value: '1', 
      label: 'Food', 
      subcategories: 
      [
        { 
          value: '2-1', 
          label: 'Eat' 
        }, 
        { value: '2-2', 
          label: 'Drink' 
        }, 
        { 
          value: '2-2', 
          label: 'Cook' 
        }
      ] 
    },

    { value: '2', 
      label: 'Sports', 
      subcategories: 
      [
        { value: '3-1', 
          label: 'Football' 
        },
        { value: '3-2', 
          label: 'Tennis' 
        },
        { value: '3-1', 
          label: 'Badminton' 
        }
      ] 
    },

    { value: '3', 
      label: 'Entertainment', 
      subcategories: 
      [
        { value: '4-1', 
          label: 'Musical' 
        },
        { value: '4-2', 
          label: 'Comedy' 
        },
        { value: '4-3', 
          label: 'Drama' 
        },
        { 
          value: '4-4', 
          label: 'Performance' 
        }
      ] 
    },

    { 
      value: '4', 
      label: 'Arts and exibition' 
    },

    { 
      value: '5', 
      label: 'Fashion' 
    },

    { 
      value: '6', 
      label: 'Culture' 
    },

    { 
      value: '7', 
      label: 'Health & wellness' 
    },

    { 
      value: '8', 
      label: 'Yoga' 
    },

    { 
      value: '9', 
      label: 'Children' 
    },

    { 
      value: '10', 
      label: 'Festivals & carnival' 
    },

    { 
      value: '11', 
      label: 'Weddings' 
    },

    { 
      value: '12', 
      label: 'Birthday parties' 
    },

    { 
      value: '13', 
      label: 'Non-profit' 
    },
  ];

  interface CategoryProps {
    onCategorySelect: (category: string, subcategory: string) => void;
  }
  
  const Category: React.FC<CategoryProps> = ({ onCategorySelect }) => {
    const [selectedItem, setSelectedItem] = useState<string>('');
    const [selectedSubitem, setSelectedSubitem] = useState<string>('');
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const [subDropdownVisible, setSubDropdownVisible] = useState<boolean>(false);
    const [currentSubcategories, setCurrentSubcategories] = useState<DropdownItem[]>([]);

    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };

    const toggleSubDropdown = () => {
      setSubDropdownVisible(!subDropdownVisible);
    };

    const handleItemClick = (value: string, label: string, subcategories?: DropdownItem[]) => {
      setSelectedItem(label);
      setDropdownVisible(false);
      setCurrentSubcategories(subcategories || []);
      if (subcategories && subcategories.length > 0) {
        setSelectedSubitem('');
        toggleSubDropdown();
        onCategorySelect(label, '');
      } else {
        setSelectedSubitem('');
        onCategorySelect(label, '');
      }
      console.log(value);
    };

    const handleSubItemClick = (value: string, label: string) => {
      setSelectedSubitem(label);
      setSubDropdownVisible(false);
      onCategorySelect(selectedItem, label);
      console.log(value);
    };

    return (
      <>
        <div className='categoryDropdownCont'>
          <div className="select-dropdown">
            <button
              onClick={toggleDropdown}
              role="button"
              data-value={selectedItem}
              className="select-dropdown__button"
            >
              <span>{selectedItem || 'Category of event'}</span>
              <div>
                {svgIcon}
              </div>
              
            </button>
            <ul className={`select-dropdown__list ${dropdownVisible ? 'active' : ''}`}>
              {items.map((item) => (
                <li
                  key={item.value}
                  data-value={item.value}
                  className="select-dropdown__list-item"
                  onClick={() => handleItemClick(item.value, item.label, item.subcategories)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <br/>
          {currentSubcategories.length > 0 && (
            <div className="select-dropdown">
              <button
                onClick={toggleSubDropdown}
                role="button"
                data-value={selectedSubitem}
                className="select-dropdown__button"
              >
                <span>{selectedSubitem || selectedItem}</span>
                <div>
                  {svgIcon}
                </div>
              </button>
              <ul className={`select-dropdown__list ${subDropdownVisible ? 'active' : ''}`}>
                {currentSubcategories.map((subitem) => (
                  <li
                    key={subitem.value}
                    data-value={subitem.value}
                    className="select-dropdown__list-item"
                    onClick={() => handleSubItemClick(subitem.value, subitem.label)}
                  >
                    {subitem.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    );
  };

export default Category;
