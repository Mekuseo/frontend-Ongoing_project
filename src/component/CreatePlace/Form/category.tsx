// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import "./form.css"
import AboutPlace from '../About/about';

const svgIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
    <path d="M1 1L7.1336 7.60542C7.33142 7.81845 7.66858 7.81845 7.8664 7.60542L14 1" fill="white" />
    <path
      d="M1 1L7.1336 7.60542C7.33142 7.81845 7.66858 7.81845 7.8664 7.60542L14 1"
      stroke="#263238"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const items: DropdownItem[] = [
  {
    value: '1',
    label: 'Nightlife',
  },

  {
    value: '2',
    label: 'Restaurant',
  },

  {
    value: '3',
    label: 'Arts and gallery',
  },

  {
    value: '4',
    label: 'Exhibition centre',
  },

  {
    value: '5',
    label: 'Recreational parks',
  },

  {
    value: '6',
    label: 'Wildlife park',
  },

  {
    value: '7',
    label: 'Garden',
  },

  {
    value: '8',
    label: 'Sport',
  },

  {
    value: '9',
    label: 'Library & book store',
  },

  {
    value: '10',
    label: 'Workspace',
  },

  {
    value: '11',
    label: 'Adventure',
  },

  {
    value: '12',
    label: 'Car racing ',
  },

  {
    value: '13',
    label: 'Others(Specify)',
  },
];

interface DropdownItem {
  value: string;
  label: string;
  subcategories?: DropdownItem[];
}

interface CategoryProps {
  setSelectedItem: (category: string) => void;
  setPlaceName: (name: string) => void;
  placeName: string;
}

const Category: React.FC<CategoryProps> = ({
  setSelectedItem,
  setPlaceName,
  placeName,
}) => {
  const [selectedItem, setSelectedItemState] = useState<string>('');
  const [selectedSubitem, setSelectedSubitem] = useState<string>('');
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [subDropdownVisible, setSubDropdownVisible] = useState<boolean>(false);
  const [currentSubcategories, setCurrentSubcategories] = useState<DropdownItem[]>([]);
  const [isEditingNonProfit, setIsEditingNonProfit] = useState<boolean>(false);
  const [editableNonProfitValue, setEditableNonProfitValue] = useState<string>('');
  const [isOthersSpecifySelected, setIsOthersSpecifySelected] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleSubDropdown = () => {
    setSubDropdownVisible(!subDropdownVisible);
  };

  const handleItemClick = (value: string, label: string, subcategories?: DropdownItem[]) => {
    setDropdownVisible(false);
    setSelectedItemState(label);
    setSelectedItem(label);
    setCurrentSubcategories(subcategories || []);
    if (subcategories && subcategories.length > 0) {
      setSelectedSubitem('');
      toggleSubDropdown();
    } else {
      setSelectedSubitem('');
    }

    if (value === '13') {
      setIsEditingNonProfit(true);
    } else {
      setIsEditingNonProfit(false);
    }

    setIsOthersSpecifySelected(value === '13');
  };

  const handleEditableNonProfitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableNonProfitValue(e.target.value);
  };

  const handleEditableNonProfitBlur = () => {
    setIsEditingNonProfit(false);
    items.find((item) => item.value === '13')!.label = editableNonProfitValue;
    setSelectedItem(editableNonProfitValue);
  };

  return (
    <>
      <form action="" className='newPlace'>
        <label htmlFor="">
          Name of place
        </label>

        <input
          type="text"
          placeholder='Enter the name of the place '
          name="placeName"
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
        />
      </form>

      <div className="categoryDropdownCont">
        <div className="select-dropdown">
          <button
            onClick={toggleDropdown}
            role="button"
            data-value={selectedItem}
            className="select-dropdown__button"
          >
            <span>{selectedItem || 'Category of place'}</span>
            <div>{svgIcon}</div>
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
        {isOthersSpecifySelected && isEditingNonProfit && (
          <input
            type="text"
            value={editableNonProfitValue}
            onChange={handleEditableNonProfitChange}
            onBlur={handleEditableNonProfitBlur}
            className='othersSelection'
            placeholder='Add Other activities'
          />
        )}
      </div>
    </>
  );
};

export default Category;
