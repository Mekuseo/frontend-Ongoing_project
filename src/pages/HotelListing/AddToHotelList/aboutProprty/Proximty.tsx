import React, { Dispatch, SetStateAction, useState } from "react";

interface ProximityProps {
  propertyProxy: string[];
  setPropertyProxy: Dispatch<SetStateAction<string[]>>;
}

const Proximity: React.FC<ProximityProps> = ({
  propertyProxy,
  setPropertyProxy,
}) => {
  const [inputs, setInputs] = useState<string[]>(propertyProxy);

  const addInput = () => {
    console.log(propertyProxy);
    if (inputs.length < 5) {
      setInputs([...inputs, ""]);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    setPropertyProxy(newInputs);
  };

  const removeInput = (index: number) => {
    let maxRemovals = 0;

    if (inputs.length === 5) {
      maxRemovals = 2;
    } else if (inputs.length === 4) {
      maxRemovals = 1;
    }

    if (maxRemovals > 0) {
      const newInputs = [...inputs];
      newInputs.splice(index, 1);
      setInputs(newInputs);
    }
  };

  return (
    <>
      <p className="subheadTworeuse">Proximity to major attractions</p>
      <p className="subheadreused">A minimum of 3 and a maximum of 5 places.</p>

      <div>
        {inputs.map((input, index) => (
          <div key={index} className="proximitytomajorattractions">
            {inputs.length > 3 && (
              <button
                onClick={() => removeInput(index)}
                className="removeproximityfromlist"
              >
                Remove
              </button>
            )}
            <input
              type="text"
              value={input}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder="Example: 5 minute walk to the spa or store"
              required
            />
          </div>
        ))}

        {inputs.length < 5 && (
          <button onClick={addInput} className="addproximitytolist">
            Add Item
          </button>
        )}
      </div>
    </>
  );
};

export default Proximity;
