
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useRef } from 'react';
import { phoneNumberAutoFormat } from "../HotelProcessing/number";
import { ChangeEvent, useState } from "react";
import AutocompleteCountry from "./country";

interface Country {
    name: string;
    code: string;
  }
  
  const countryData: Country[] = [
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
  
interface PhoneNumberProps {
    onPhoneNumberChange: (phoneNumber: string) => void;
}

const EventsForm: React.FC<PhoneNumberProps> = ({ onPhoneNumberChange }) => {
    const [value, setValue] = useState<string>("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const targetValue = phoneNumberAutoFormat(e.target.value);
        setValue(targetValue);
        onPhoneNumberChange(targetValue);
    };

    const [inputValue, setInputValue] = useState<string>('');
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleInputChange = (value: string) => {
        setInputValue(value);
        const filtered = countryData.filter((country) =>
        country.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCountries(filtered);
        setIsDropdownOpen(true);
    };

    const handleSelectCountry = (country: Country) => {
        setInputValue(country.name + '' + '(' + country.code + ')');
        setSelectedCountry(country);
        setIsDropdownOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
        <>
            <div className="formContainerMakePayment">
                <form action="" className="nameContainerBox">
                    <div className="nameContainer">
                        <label htmlFor="">
                            First name
                            <input type="text" name="" id="" />
                        </label>
                        
                        <label htmlFor="">
                            Last name
                            <span>
                                /Surname
                            </span>
                            <input type="text" name="" id="" />
                        </label>
                    </div>

                    <label htmlFor="">
                        Email address
                    </label>
                    
                    <input type="email" name="" id="" />

                    <div className="nameContainer">
                        <div className="autocomplete-container" ref={inputRef}>
                            <label htmlFor="">
                                Country code  
                                <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => handleInputChange(e.target.value)}
                                placeholder="Nigeria(+234)"
                                />
                            </label>
                            {isDropdownOpen && (
                                <ul className="autocomplete-list">
                                    {filteredCountries.map((country) => (
                                    <li
                                        key={country.code}
                                        onClick={() => handleSelectCountry(country)}
                                    >
                                        {country.name} ({country.code})
                                    </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        
                        <label htmlFor="">
                            Telephone number 
                            <input
                                type="tel"
                                value={value}
                                onChange={onChange}
                                maxLength={12}
                                className="input"
                                placeholder="123-4567-8901"
                            />
                        </label>
                    </div>
                </form>

                <label className="formOptionsContainer">
                    Keep me updated on more events from this organizer
                    <input type="checkbox" />
                    <span className="formOptionCheckmark"></span>
                </label>
                
                <label className="formOptionsContainer">
                    Keep me updated on events happening in this city
                    <input type="checkbox" />
                    <span className="formOptionCheckmark"></span>
                </label>
            </div>
           
        </>
    );
};

export default EventsForm;