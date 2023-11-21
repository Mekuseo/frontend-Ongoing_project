/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import ".//toDo.css";
import mainImage from "../../../assets/pics/Frame2215.png"
import axios from 'axios';

interface Country {
  id: number;
  name: string;
}

const ImageHeader: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        height: '300px',
    };
    
    const imageStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };
    
    const textStyle: React.CSSProperties = {
        position: 'absolute',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        padding: '10px',
        width: '70%',
        margin: 'auto'
    };

    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  
    useEffect(() => {
      axios.get<Country[]>('./countries.json').then((response) => {
        setCountries(response.data);
      });
    }, []);
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      setSelectedCountry(inputValue);
  
      const filtered = countries.filter((country) =>
        country.name.toLowerCase().includes(inputValue.toLowerCase())
      );
  
      setFilteredCountries(filtered);
      setIsDropdownOpen(true);
    };
  
    const handleCountryClick = (countryName: string) => {
      setSelectedCountry(countryName);
      setIsDropdownOpen(false);
    };
  

  return (
    <>
        <div style={containerStyle}>
            <img
                src={mainImage}
                style={imageStyle}
            />
            <div style={textStyle}>
                <form className="toDoDestinationForm" action="/">
                    <div className="textOutline">
                        <div className="inputFieldContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 17" fill="none">
                                <path d="M14.7888 5.5561C13.9014 1.72488 10.4958 0 7.50423 0C7.50423 0 7.50422 0 7.49577 0C4.51267 0 1.09858 1.71658 0.21125 5.5478C-0.777485 9.82683 1.89294 13.4507 4.30985 15.7312C5.20563 16.5771 6.35493 17 7.50423 17C8.65352 17 9.80282 16.5771 10.6901 15.7312C13.1071 13.4507 15.7775 9.83512 14.7888 5.5561ZM7.50423 9.71073C6.0338 9.71073 4.84225 8.54146 4.84225 7.09854C4.84225 5.65561 6.0338 4.48634 7.50423 4.48634C8.97465 4.48634 10.1662 5.65561 10.1662 7.09854C10.1662 8.54146 8.97465 9.71073 7.50423 9.71073Z" fill="#263238"/>
                            </svg>
                            <input
                                type="text"
                                placeholder="Search a destination"
                                value={selectedCountry}
                                onChange={handleInputChange}
                            /> 
                        </div>
                    </div>
                
                    <button type="submit">
                        Search
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 30" fill="none">
                            <path d="M27.1023 28.5462L22.3295 23.926L19.9432 21.6159L17.5568 19.3058C16.7045 19.9659 15.7244 20.4884 14.6165 20.8734C13.5085 21.2584 12.3295 21.4509 11.0795 21.4509C7.98295 21.4509 5.3625 20.413 3.21818 18.3372C1.07273 16.2604 0 13.7231 0 10.7255C0 7.72783 1.07273 5.19057 3.21818 3.11368C5.3625 1.03789 7.98295 0 11.0795 0C14.1761 0 16.7972 1.03789 18.9426 3.11368C21.0869 5.19057 22.1591 7.72783 22.1591 10.7255C22.1591 11.9355 21.9602 13.0768 21.5625 14.1494C21.1648 15.2219 20.625 16.1707 19.9432 16.9957L22.3402 19.3161L24.7372 21.6366L29.5312 26.2774C29.8438 26.5799 30 26.9512 30 27.3912C30 27.8312 29.8295 28.2162 29.4886 28.5462C29.1761 28.8487 28.7784 29 28.2955 29C27.8125 29 27.4148 28.8487 27.1023 28.5462ZM11.0795 18.1508C13.2102 18.1508 15.0216 17.4292 16.5136 15.9859C18.0045 14.5415 18.75 12.7881 18.75 10.7255C18.75 8.66287 18.0045 6.9094 16.5136 5.46503C15.0216 4.02177 13.2102 3.30014 11.0795 3.30014C8.94886 3.30014 7.1375 4.02177 5.64545 5.46503C4.15454 6.9094 3.40909 8.66287 3.40909 10.7255C3.40909 12.7881 4.15454 14.5415 5.64545 15.9859C7.1375 17.4292 8.94886 18.1508 11.0795 18.1508Z" fill="white"/>
                        </svg>
                    </button>
                </form>
            </div>
            {isDropdownOpen && (
                <div className="autocomplete-dropdown">
                {filteredCountries.map((country) => (
                    <div
                    key={country.id}
                    className="autocomplete-option"
                    onClick={() => handleCountryClick(country.name)}
                    >
                    {country.name}
                    </div>
                ))}
                </div>
            )}
        </div>
    </>
  );
};

export default ImageHeader;