import "./Location.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface LocationProps {
  proximity_to_major_attractions: string[];
  location: {
    lat: number;
    lng: number;
  } | null;
}

const Location: React.FC<LocationProps> = ({
  location,
  proximity_to_major_attractions,
}) => {
  const google_key = import.meta.env.VITE_google_map_api_key;
  const containerStyle = {
    width: "1020px",
    height: "450px",
  };
  return (
    <div className="location-body">
      <h1>Location</h1>
      <div className="location-background">
        <div className="location-container">
          <div className="locationMap-info">
            <LoadScript googleMapsApiKey={google_key} libraries={["places"]}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={location ? location : { lat: 9.0764785, lng: 7.398574 }}
                zoom={15}
              >
                {location && <Marker position={location} />}
              </GoogleMap>
            </LoadScript>

            <small>
              Plot 7, Yakubu Gowon way, Asokoro, Abuja.{" "}
              <span className="location-red">
                View in a map <FaMapMarkerAlt style={{ color: "red" }} />
              </span>
            </small>
          </div>
          <p className="location-subtitle">
            Major attractions nearby <FaMapMarkerAlt />
          </p>
          <div className="location-features">
            <ul className="locationFeature-list">
              {proximity_to_major_attractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>

            {/* <ul className="locationFeature-list">
              <li>
                Play lounge is a good place to relax. 5 minutes drive from here
              </li>
              <li>Close to City gate</li>
              <li>20 minutes drive to central mosque</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
