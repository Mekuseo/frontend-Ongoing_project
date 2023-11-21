// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { SetStateAction, useState } from "react";
// import propertyType from "../propertyType.json";

const TypeBed = () => {
  const [selectedAmenities, setSelectedAmenities] = useState<any[]>([]); // Add the type for selectedAmenities

  // State to manage the input box visibility
  const [showInputBoxIndex, setShowInputBoxIndex] = useState<number>(-1); // Add the type for showInputBoxIndex

  // State to manage the input box value
  const [inputValue, setInputValue] = useState<string>(""); // Add the type for inputValue

  const handleCheckboxChange = (amenity: string, subItem: string) => {
    // Add the types for parameters
    const isSelected = selectedAmenities.some(
      (item) => item.amenity === amenity && item.subItem === subItem
    );

    if (isSelected) {
      setSelectedAmenities(
        selectedAmenities.filter(
          (item) => item.amenity !== amenity || item.subItem !== subItem
        )
      );
    } else {
      setSelectedAmenities([...selectedAmenities, { amenity, subItem }]);
    }
  };

  const handleAddMoreClick = (index: SetStateAction<number>) => {
    setShowInputBoxIndex(index);
    setInputValue(""); // Reset the input value whenever "Add More" is clicked
  };

  const handleAddClick = (index: number) => {
    // Add the type for index
    if (inputValue.trim() !== "") {
      // Create a new checkbox with the input value
      const updatedAmenitiesData = [...propertyType];
      updatedAmenitiesData[index].subItems.push(inputValue.trim());

      setSelectedAmenities((prevSelected) => [
        ...prevSelected,
        {
          amenity: updatedAmenitiesData[index].amenity,
          subItem: inputValue.trim(),
        },
      ]);
      setShowInputBoxIndex(-1);
      setInputValue("");
    }
  };
  return (
    <div>
      <div className="amenityContainer">
        <div className="row">
         {propertyType.map((propertyType, index) => (
            <div key={index} className="amenitycontainer-full">
              <h3 className="amenity-title">{propertyType.amenity}</h3>
              <p className="amenity-subtitle">
                {propertyType["amenity-subtitle"]}
              </p>
              <div className="amenity-item-card">
                {propertyType.subItems.map((subItem, subIndex) => (
                  <label key={subIndex} className="containerAmenities">
                    {subItem}
                    <input
                      type="checkbox"
                      checked={selectedAmenities.some(
                        (item) =>
                          item.amenity === propertyType.amenity &&
                          item.subItem === subItem
                      )}
                      onChange={() =>
                        handleCheckboxChange(propertyType.amenity, subItem)
                      }
                    />
                    <span className="tick"></span>
                  </label>
                ))}

                {/* Add the "Add More" button */}
                {showInputBoxIndex === index ? (
                  <div className="addMoreBtn">
                    <input
                      type="text"
                      placeholder="add more"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                      className="addMoreBtn-btn"
                      onClick={() => handleAddClick(index)}
                    >
                      Add
                    </button>
                  </div>
                ) : (
                  <div
                    className="addmore"
                    onClick={() => handleAddMoreClick(index)}
                  >
                    <button className="addMoreBtn-btn">+</button>
                    <span>Add More</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypeBed;
