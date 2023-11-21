import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";

type Option = {
  value: string;
  label: string;
};

type LocationSelectProps = {
  type: "country" | "state" | "city";
  countryCode?: string;
  stateCode?: string;
  onSelect: (value: string) => void;
};

const LocationSelect: React.FC<LocationSelectProps> = ({
  type,
  countryCode = "IN",
  stateCode = "MH",
  onSelect,
}) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    let data: Option[] = [];

    switch (type) {
      case "country":
        data = Country.getAllCountries().map((country) => ({
          value: country.isoCode,
          label: country.name,
        }));
        break;
      case "state":
        data = State.getStatesOfCountry(countryCode).map((state) => ({
          value: state.isoCode,
          label: state.name,
        }));
        break;
      case "city":
        data = City.getCitiesOfState(countryCode, stateCode).map((city) => ({
          value: city.name,
          label: city.name,
        }));
        break;
      default:
        break;
    }

    setOptions(data);
  }, [type, countryCode, stateCode]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <div className="form-control-inline">
      <select className="form-control" onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelect;
