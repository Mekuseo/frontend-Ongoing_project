import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import "../CountryDropdown.css"

interface CountryDropdownProps {
  countries: { label: string; code: string; phone: string }[];
  onSelect: (code: string) => void;
}

const CountryCode: React.FC<CountryDropdownProps> = ({
  countries,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setSelectedCountry] = useState(countries[0]);
  // const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
 
  const handleCountrySelect = (country: {
    label: string;
    code: string;
    phone: string;
  }) => {
    setSelectedCountry(country);
    setSearchQuery(`${country.label} (+${country.phone})`);
    onSelect(country.code);
    setIsOpen(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = countries.filter((country) =>
      country.label.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="country-dropdown" ref={dropdownRef}>
      <input
        className="country-input"
        type="text"
        placeholder="Country code"
        value={searchQuery}
        onChange={handleInputChange}
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="paycountrydropdown-list">
          {filteredCountries.map((country) => (
            <div
              key={country.code}
              className="paycountrydropdown-item"
              onClick={() => handleCountrySelect(country)}
            >
              {country.label} (+{country.phone})
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryCode;
