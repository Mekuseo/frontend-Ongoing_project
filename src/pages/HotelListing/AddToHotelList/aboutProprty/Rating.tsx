import React, { useState } from "react";

interface PropertyRatingProps {
  propertyRating: string;
  setPropertyRating: (propertyRating: string) => void;
}

const Rating: React.FC<PropertyRatingProps> = ({
  propertyRating,
  setPropertyRating,
}) => {
  const [selectedRating, setSelectedRating] = useState<string>(propertyRating);

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRating = event.target.value;
    setSelectedRating(newRating);
    setPropertyRating(newRating);
  };

  return (
    <div>
      <p className="subheadTworeuse starratingsubheading starratingmobile">Star rating</p>
      <p className="subheadreused">
        Give your home rating to help set expectations for travelers stay.
      </p>
      <div className="containerSix">
        <div className="rating">
          {[5, 4, 3, 2, 1].map((rating) => (
            <React.Fragment key={rating}>
              <input
                type="radio"
                name="rating"
                value={rating.toString()}
                id={rating.toString()}
                checked={selectedRating === rating.toString()}
                onChange={handleRatingChange}
                required
              />
              <label htmlFor={rating.toString()}>☆</label>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
