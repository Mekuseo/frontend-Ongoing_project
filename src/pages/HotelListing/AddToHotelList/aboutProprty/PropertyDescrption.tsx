import React, { useState, useRef, useEffect } from 'react';

interface PropertyDescriptionProps {
  propertyDescription: string;
  setPropertyDescription: (propertyDescription: string) => void;
}

const PropertyDescription: React.FC<PropertyDescriptionProps> = ({
  setPropertyDescription,
  propertyDescription,
}) => {
  const maxCharacterCount = 5000;
  const [error, setError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;
    if (newValue.trim() !== "") {
      setPropertyDescription(newValue);
      setError(null);

      if (newValue.length > maxCharacterCount) {
        setError(`Character limit exceeded (${maxCharacterCount} characters max)`);
      }
    } else {
      setError("Please provide a non-empty description of your property");
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [propertyDescription]);

  return (
    <div>
      <p className="subheadTworeuse propertyDescription-margin">
        Describe your property
      </p>

      <p className="subheadreused">
        Why should a traveler stay at your property?
      </p>

      <div className="propertydescriptionspacing">
        <form action="">
          <textarea
            ref={textareaRef}
            id="subject"
            name="subject"
            placeholder="Ex: Safe haven"
            className="textarea2 mobiletextarea"
            onChange={handleDescriptionChange}
            value={propertyDescription}
            maxLength={maxCharacterCount}
            required
          ></textarea>

          <div className="errormessage">
            {error ? (
              <p className="active">{error}</p>
            ) : (
              <p className="split">
                {maxCharacterCount - (propertyDescription ? propertyDescription.length : 0)}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyDescription;