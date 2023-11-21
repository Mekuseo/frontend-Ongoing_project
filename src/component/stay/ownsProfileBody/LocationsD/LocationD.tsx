import LocationSelect from "./locationSeletct";

interface LocationDProps {
  selectedCountry: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  selectedState: string;
  setSelectedState: React.Dispatch<React.SetStateAction<string>>;
  selectedCity: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  selectedCurrency: string; // Add selected currency prop
  setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>; // Add set selected currency prop
  selectedNationality: string; // Add selected nationality prop
  setSelectedNationality: React.Dispatch<React.SetStateAction<string>>;
}

const LocationD: React.FC<LocationDProps> = ({
  selectedCountry,
  setSelectedCountry,
  selectedState,
  setSelectedState,
  setSelectedCity,
  address, // Add the address prop
  setAddress,
  selectedCurrency,
  setSelectedCurrency,
  selectedNationality,
  setSelectedNationality,
}) => {
  const handleCountrySelect = (value: string) => {
    setSelectedCountry(value);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateSelect = (value: string) => {
    setSelectedState(value);
    setSelectedCity("");
  };

  return (
    <div className="FNDetails">
      <h1 className="reusedH1">Location details</h1>
      <div className="LTBody">
        <span className="topOPB">Where do you live?</span>
        <form action="" className="districtWrapper">
          <div className="input-wrapper">
            {/* Use LocationSelect for country */}
            <LocationSelect
              type="country"
              onSelect={handleCountrySelect}
              countryCode={selectedCountry}
            />

            {/* Use LocationSelect for state */}
            <LocationSelect
              type="state"
              countryCode={selectedCountry}
              onSelect={handleStateSelect}
              stateCode={selectedState}
            />

            {/* Use LocationSelect for city */}
            <LocationSelect
              type="city"
              countryCode={selectedCountry}
              stateCode={selectedState}
              onSelect={(value) => setSelectedCity(value)}
            />
          </div>
        </form>

        <div className="firstName">
          <h2>Full home address</h2>
          <div className="fullName">
            <input
              type="text"
              id="address"
              name="address"
              className="address"
              value={address} // Set the value of the address input
              onChange={(e) => setAddress(e.target.value)} // Handle address input change
            />
          </div>
        </div>

        <div className="headerFNB">
          <div className="firstName">
            <span className="topOPB">Nationality</span>
            <div className="input-wrapper">
              <select
                className="form-controldouble"
                value={selectedNationality} // Set the value of the selected nationality
                onChange={(e) => setSelectedNationality(e.target.value)} // Handle nationality select change
              >
                <option value="Nigerian">Nigerian</option>
                <option value="Ghanian">Ghanian</option>
                <option value="South African">South African</option>
                <option value="Sudanese">Sudanese</option>
                <option value="Somali">Somali</option>
                <option value="Mexican">Mexican</option>
                <option value="Korean">Korean</option>
                <option value="Ehiopian">Ehiopian</option>
                <option value="American">American</option>
                <option value="Arabian">Arabian</option>
              </select>
            </div>
          </div>

          <div className="LastName">
            <span className="topOPB">Currency</span>
            <div className="input-wrapper">
              <select
                className="form-controldouble"
                value={selectedCurrency} // Set the value of the selected currency
                onChange={(e) => setSelectedCurrency(e.target.value)} // Handle currency select change
              >
                <option value="Nigerian Naira">Nigerian Naira</option>
                <option value="Ghanian Cedi">Ghanian Cedi</option>
                <option value="South African Rand">South African Rand</option>
                <option value="Sudanese Pound">Sudanese Pound</option>
                <option value="Somali Shilling">Somali Shilling</option>
                <option value="Mexican Peso">Mexican Peso</option>
                <option value="Korean Won">Korean Won</option>
                <option value="Ehiopian Birr">Ehiopian Birr</option>
                <option value="American Dollar">American Dollar</option>
                <option value="Arabian Dirham">Arabian Dirham</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationD;
