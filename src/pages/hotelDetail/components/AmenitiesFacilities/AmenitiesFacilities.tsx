import React from "react";
import "./AmenitiesFacilities.css";

interface AmenitiesFacilitiesProps {
  checkedAmenities: {
    amenity: string;
    subItem: string;
  }[];
}

const AmenitiesFacilities: React.FC<AmenitiesFacilitiesProps> = ({
  checkedAmenities,
}) => {
  // Create a map to group amenities by name
  const amenityGroups = new Map<
    string,
    { amenity: string; subItems: string[] }
  >();

  checkedAmenities.forEach((amenity) => {
    const { amenity: name, subItem } = amenity;
    if (amenityGroups.has(name)) {
      amenityGroups.get(name)!.subItems.push(subItem);
    } else {
      amenityGroups.set(name, { amenity: name, subItems: [subItem] });
    }
  });

  return (
    <div className="amenities-body">
      <h1>Amenities and Facilities</h1>
      <div className="amenities-list">
        {Array.from(amenityGroups.values()).map((group, index) => {
          return (
            <div className="amenities-flex-column" key={index}>
              <h4>
                {group.amenity}
                <ul>
                  {group.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
                </ul>
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AmenitiesFacilities;
