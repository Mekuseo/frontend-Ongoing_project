import React, { useState, useRef, useEffect } from 'react';

interface PropertyDescriptionProps {
  propertyPolicy: string;
  setPropertyPolicy: (propertyDescription: string) => void;
}

const Policy: React.FC<PropertyDescriptionProps> = ({
  setPropertyPolicy,
  propertyPolicy,
}) => {
  const maxCharacterCount = 5000;
  const [error, setError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;
    if (newValue.trim() !== "") {
      setPropertyPolicy(newValue);
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
  }, [propertyPolicy]);

  return (
    <div>
      <p className="subheadTworeuse propertyDescription-margin">
        Property policy
      </p>

      <p className="subheadreused">
        Let guests know what rules to abide by at your property.
      </p>

      <div className="propertydescriptionspacing">
        <form action="">
          <textarea
            ref={textareaRef}
            id="subject"
            name="subject"
            placeholder="Example: no parties or group gatherings"
            className="textarea2 mobiletextarea"
            onChange={handleDescriptionChange}
            value={propertyPolicy}
            maxLength={maxCharacterCount}
            required
          ></textarea>

          <div className="errormessage">
            {error ? (
              <p className="active">{error}</p>
            ) : (
              <p className="split">
                {maxCharacterCount - (propertyPolicy ? propertyPolicy.length : 0)}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Policy;
