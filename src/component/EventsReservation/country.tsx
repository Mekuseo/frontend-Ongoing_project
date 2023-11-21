// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from "react";

// Sample country data (replace with your data)
const countries = [
    { name: "Afghanistan", code: "+93" },
    { name: "Albania", code: "+355" },
    { name: "Algeria", code: "+213" },
    { name: "Andorra", code: "+376" },
    { name: "Angola", code: "+244" },
    { name: "Antigua and Barbuda", code: "+1" },
    { name: "Argentina", code: "+54" },
    { name: "Armenia", code: "+374" },
    { name: "Australia", code: "+61" },
    { name: "Austria", code: "+43" },
];

// Function to get suggestions based on user input
const getSuggestions = (value: string) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : countries.filter(
        (country) =>
          country.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// Render suggestion item
const renderSuggestion = (suggestion: any) => (
  <div>
    {suggestion.name} ({suggestion.code})
  </div>
);

interface AutocompleteCountryProps {
  onSelectCode: (code: string) => void;
}

const AutocompleteCountry: React.FC<AutocompleteCountryProps> = ({
  onSelectCode,
}) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const onSuggestionsFetchRequested = ({ value }: any) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (
    event: any,
    { suggestionValue }: any
  ) => {
    // Handle the selection here
    onSelectCode(suggestionValue);
  };

  const inputProps = {
    placeholder: "Enter a country",
    value,
    onChange: (e: any, { newValue }: any) => {
      setValue(newValue);
    },
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={(suggestion) => suggestion.name}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default AutocompleteCountry;
