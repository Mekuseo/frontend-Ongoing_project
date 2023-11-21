import React, { ChangeEvent } from 'react';

interface CCInputBoxProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const CountryCodeInputBox: React.FC<CCInputBoxProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default CountryCodeInputBox;
