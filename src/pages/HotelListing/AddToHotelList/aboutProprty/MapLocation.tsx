// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import MapPoint from "./mappiont";

interface MapLocationProps {
  propertyBuildingNumber: string;
  setPropertyBuildingNumber: (value: string) => void;
  propertyStreetAddress: string;
  setPropertyStreetAddress: (value: string) => void;
  location: {
    lat: number;
    lng: number;
  } | null;
  setLocation: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    } | null>
  >;
  locationTimeZone: string;
  setLocationTimeZone: (value: string) => void;
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
  selectedState: string;
  setSelectedState: (value: string) => void;
  selectedCity: string;
  setSelectedCity: (value: string) => void;
  postalCode: string;
  setPostalCode: (value: string) => void;
  plotNumber: string;
  setPlotNumber: (value: string) => void;
}

const MapLocation: React.FC<MapLocationProps> = ({
  propertyBuildingNumber,
  setPropertyBuildingNumber,
  propertyStreetAddress,
  setPropertyStreetAddress,
  location,
  setLocation,
  locationTimeZone,
  setLocationTimeZone,
  selectedCountry,
  setSelectedCountry,
  selectedState,
  setSelectedState,
  selectedCity,
  setSelectedCity,
  postalCode,
  setPostalCode,
  // plotNumber,
  // setPlotNumber,
}) => {
  // const option = {
  //   Coordinates: {},
  // };
  // const mapRef = useRef<google.maps.places.Autocomplete | null>();

  return (
    <div>
      <p className="subheadTworeuse propertyName-title locationmapmobile">Location</p>

      <div className="containerSeven">
        <label className="location">Custom Address</label>
        <div className="location-rowFlex">
          <div className="colAddress">
            {/* <input
              type="string"
              placeholder="Plot 49"
              className="locationNumber"
              value={plotNumber}
              onChange={(e) => setPlotNumber(e.target.value)}
            /> */}
            <input
              type="string"
              placeholder="Plot 5, Thomas Sankara drive. Wuse district, Abuja"
              className="locationAddress"
              value={propertyBuildingNumber}
              onChange={(e) => setPropertyBuildingNumber(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="content-container">
          <MapPoint
            userLocation={location}
            setUserLocation={setLocation}
            propertyStreetAddress={propertyStreetAddress}
            setPropertyStreetAddress={setPropertyStreetAddress}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            postalCode={postalCode}
            setPostalCode={setPostalCode}
            locationTimeZone={locationTimeZone}
            setLocationTimeZone={setLocationTimeZone}
          />
        </div>
      </div>
    </div>
  );
};

export default MapLocation;
