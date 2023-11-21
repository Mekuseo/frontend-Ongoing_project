import React from 'react';

interface SelectCategoryProps {
  selectedItem: string;
  selectedSubitem: string;
}

const SelectCategory: React.FC<SelectCategoryProps> = ({ selectedItem, selectedSubitem }) => {
  return (
    <>
      <p>Selected Category: {selectedItem}</p>
      <p>Selected Subcategory: {selectedSubitem}</p>
    </>
  );
};

export default SelectCategory;