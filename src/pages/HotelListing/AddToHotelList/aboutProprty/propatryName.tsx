// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import aboutimage from '../../../../assets/pics/bro.png';
import './propertyName.css';
import '../../../../component/HotelListing/ownsProfileBody/propertyAxis.css';

interface PropertyNameProps {
  propertyName: string;
  setPropertyName: (propertyName: string) => void;
}

const PropertyName: React.FC<PropertyNameProps> = ({
  setPropertyName,
  propertyName,
}) => {
  const maxCharacterCount = 50;
  const [error, setError] = useState<string | null>(null);

  const handlePropertyNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setPropertyName(newValue);

    if (newValue.length > maxCharacterCount) {
      setError(`Character limit exceeded (${maxCharacterCount} characters max)`);
      e.target.disabled = true;
    } else if (newValue.trim() === '') {
      setError('Please provide a name for your property');
      e.target.disabled = false;
    } else {
      setError(null);
      e.target.disabled = false;
    }
  };

  return (
    <div>
      <div className="row">
        <div className="AboutPropertyColumn">
          <p className="subheadTwo propertyName-title">Property name</p>
          <p className="subheadreuse">Give us an eye-catching name for your apartment</p>
        </div>
        <div className="AboutPropertyColumn">
          <img src={aboutimage} alt="" />
        </div>
      </div>
      <div>
        <form action="">
          <textarea
            id="subject"
            name="subject"
            placeholder="Ex: Safe heaven"
            className="textarea2 propertyName-input"
            required
            onChange={handlePropertyNameChange}
            value={propertyName}
          />

          <div className="errormessage mobileem">
            {error ? <p>{error}</p> : <p className='split'>{maxCharacterCount - propertyName.length}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyName;
