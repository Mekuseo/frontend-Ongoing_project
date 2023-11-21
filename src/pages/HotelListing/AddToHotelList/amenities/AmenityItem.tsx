import React from "react";
import "./Amenities.css"

interface AmenityItemProps {
  index: number;
  amenityItem: any;
  selectedAmenities: any[];
  onCheckboxChange: (amenity: string, subItem: string) => void;
  showInputBox: boolean;
  onAddMoreClick: () => void;
  onAddClick: () => void;
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Checkbox: React.ComponentType<{ checked: boolean; onChange: () => void }>;
}

const AmenityItem: React.FC<AmenityItemProps> = ({
  amenityItem,
  selectedAmenities,
  onCheckboxChange,
  showInputBox,
  onAddMoreClick,
  onAddClick,
  inputValue,
  onInputChange,
  Checkbox,
}) => {
  return (
    <div className="amenitycontainer-full">
      <h3 className="amenity-title">{amenityItem.amenity}</h3>
      <p className="amenity-subtitle">{amenityItem["amenity-subtitle"]}</p>
      <div className="amenity-item-card">
        {amenityItem.subItems.map((subItem: string, subIndex: number) => (
          <label key={subIndex} className="containerAmenities">
            <Checkbox
              checked={selectedAmenities.some(
                (item) =>
                  item.amenity === amenityItem.amenity &&
                  item.subItem === subItem
              )}
              onChange={() => onCheckboxChange(amenityItem.amenity, subItem)}
            />
            {subItem}
          </label>
        ))}

        {showInputBox ? (
          <div className="addMoreBtn">
            <input
              type="text"
              placeholder="add more"
              value={inputValue}
              onChange={onInputChange}
            />
            <button
              className="addMoreBtn-btn"
              style={{ marginLeft: "5px" }}
              onClick={() => {
                onAddClick();
                if (inputValue.trim() !== "") {
                  onCheckboxChange(amenityItem.amenity, inputValue.trim());
                }
              }}
            >
              Add
            </button>
          </div>
        ) : (
          <div
            onClick={onAddMoreClick}
          >
            <button className="addMoreBtn-btn">+</button>
            <span>Add More</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AmenityItem;
