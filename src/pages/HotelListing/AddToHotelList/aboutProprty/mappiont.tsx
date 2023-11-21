import {
  Autocomplete,
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import axios from "axios";
import { useRef } from "react";
import "../../../../component/HotelListing/ownsProfileBody/propertyAxisMobile.css"
// import value from '../../../../../types/ChatBody';

interface MapProps {
  userLocation: {
    lat: number;
    lng: number;
  } | null;
  setUserLocation: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    } | null>
  >;
  propertyStreetAddress: string;
  setPropertyStreetAddress: (value: string) => void;
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
  selectedState: string;
  setSelectedState: (value: string) => void;
  selectedCity: string;
  setSelectedCity: (value: string) => void;
  postalCode: string;
  setPostalCode: (value: string) => void;
  locationTimeZone: string;
  setLocationTimeZone: (value: string) => void;
}

const MapPoint: React.FC<MapProps> = ({
  userLocation,
  setUserLocation,
  propertyStreetAddress,
  setPropertyStreetAddress,
  selectedCountry,
  setSelectedCountry,
  selectedState,
  setSelectedState,
  selectedCity,
  setSelectedCity,
  // postalCode,
  setPostalCode,
  locationTimeZone,
  setLocationTimeZone,
}) => {
  const google_key = import.meta.env.VITE_google_map_api_key || "";

  const containerStyle = {
    width: "138%",
    height: "450px",
  };

  // Function to handle marker click
  const handleMarkerClick = async (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      setUserLocation({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
      console.log(userLocation);

      // Use the Geocoder service to get the address based on the clicked coordinates
      const geocoder = new google.maps.Geocoder();
      const latLng = new google.maps.LatLng(
        event.latLng.lat(),
        event.latLng.lng()
      );
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();

      setUserLocation({ lat, lng });

      // Use the reverse geocode function to get the address
      const apiKey = google_key;
      const address = await reverseGeocode(lat, lng, apiKey);

      setPropertyStreetAddress(address);

      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === "OK" && results?.length) {
          console.log(results);
          const formattedAddress = results[0].address_components;
          console.log(formattedAddress);
          // setPropertyStreetAddress(formattedAddress);
        } else {
          console.error(
            "Geocode was not successful for the following reason:",
            status
          );
        }
      });
    }
  };

  const reverseGeocode = async (lat: number, lng: number, apiKey: string) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
      );

      if (response.data.results.length > 0) {
        const addressComponents = response.data.results[0].address_components;
        const formattedAddress = response.data.results[0].formatted_address;

        // Extracting state, country, and city from address components
        let state = "";
        let country = "";
        let city = "";
        let postalCode = "";

        for (const component of addressComponents) {
          const types = component.types;

          if (types.includes("administrative_area_level_1")) {
            state = component.long_name;
          } else if (types.includes("country")) {
            country = component.long_name;
          } else if (types.includes("locality")) {
            city = component.long_name;
          } else if (types.includes("postal_code")) {
            postalCode = component.long_name;
          }
        }
        setSelectedCountry(country);
        setSelectedState(state);
        setSelectedCity(city);
        setPostalCode(postalCode);

        // Fetch time zone information using another API (e.g., Google Time Zone API)
        const timeZoneResponse = await axios.get(
          `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${Math.floor(
            Date.now() / 1000
          )}&key=${apiKey}`
        );

        if (timeZoneResponse.data.status === "OK") {
          const timeZoneId = timeZoneResponse.data.timeZoneId;
          console.log(timeZoneResponse.data);
          console.log("Time Zone ID:", timeZoneId);
          setLocationTimeZone(timeZoneId);

          // You can set the time zone ID in your state or use it as needed
          return formattedAddress;
        } else {
          console.error(
            "Error fetching time zone:",
            timeZoneResponse.data.status
          );
          return "Error fetching time zone";
        }
      } else {
        return "Address not found";
      }
    } catch (error) {
      console.error("Error in reverse geocoding:", error);
      return "Error fetching address";
    }
  };

  const mapRef = useRef<google.maps.places.Autocomplete | null>();

  // Callback function when the selected place changes
  const handlePlaceChanged = async () => {
    if (mapRef.current) {
      const place = mapRef.current.getPlace();

      // Check if place and place.geometry are defined
      if (place && place.geometry) {
        // Extracting coordinates from the selected place
        const location = {
          lat: place.geometry.location?.lat() ?? 0,
          lng: place.geometry.location?.lng() ?? 0,
        };

        // Log the formatted address and coordinates
        console.log("Formatted Address:", place.formatted_address);
        console.log("Location Coordinates:", location);
        setUserLocation({
          lat: location.lat,
          lng: location.lng,
        });

        // Set the street address in the state
        setPropertyStreetAddress(place?.formatted_address ?? "abuja");

        try {
          const apiKey = google_key;
          const timeZoneResponse = await axios.get(
            `https://maps.googleapis.com/maps/api/timezone/json?location=${
              location.lat
            },${location.lng}&timestamp=${Math.floor(
              Date.now() / 1000
            )}&key=${apiKey}`
          );

          if (timeZoneResponse.data.status === "OK") {
            const timeZoneId = timeZoneResponse.data.timeZoneId;
            setLocationTimeZone(timeZoneId);
            console.log("Time Zone ID:", timeZoneId);

            // You can set the time zone ID in your state or use it as needed
          } else {
            console.error(
              "Error fetching time zone:",
              timeZoneResponse.data.status
            );
          }
        } catch (error) {
          console.error("Error fetching time zone:", error);
        }

        // Extracting state, country, and city from address components
        const addressComponents = place.address_components || [];
        let state = "";
        let country = "";
        let city = "";
        let postalCode = "";

        for (const component of addressComponents) {
          const types = component.types;

          if (types.includes("administrative_area_level_1")) {
            state = component.long_name;
          } else if (types.includes("country")) {
            country = component.long_name;
          } else if (types.includes("locality")) {
            city = component.long_name;
          } else if (types.includes("postal_code")) {
            postalCode = component.long_name;
          }
        }

        setSelectedCountry(country);
        setSelectedState(state);
        setSelectedCity(city);
        setPostalCode(postalCode);
      }
    }
  };

  return (
    <div>
      <label className="location">Select location on map</label>
      <LoadScript googleMapsApiKey={google_key} libraries={["places"]}>
        <div className="locationMapInputs">
          <Autocomplete
            onLoad={(autocomplete) => {
              mapRef.current = autocomplete;
            }}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              placeholder="Thomas Sankara drive"
              value={propertyStreetAddress}
              onChange={(e) => setPropertyStreetAddress(e.target.value)}
            />
          </Autocomplete>

          <input
            type="text"
            placeholder="Ikeja"
            value={selectedCity}
            readOnly
          />
          <input
            type="text"
            placeholder="Lagos"
            value={selectedState}
            readOnly
          />
          <input
            type="text"
            placeholder="Nigeria"
            value={selectedCountry}
            readOnly
          />
        </div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={
            userLocation ? userLocation : { lat: 9.0764785, lng: 7.398574 }
          }
          zoom={15}
          onClick={handleMarkerClick}
        >
          {userLocation && <Marker position={userLocation} />}
        </GoogleMap>
        <div className="timezone">
          <p className="location timezonemobile">
            Property time zone
          </p>
          <p className="subheadreuseA">
            This will be updated automatically from country’s location.
          </p>

          <input
            type="text"
            placeholder="Africa/Lagos"
            className="timezoneabproperty"
            value={locationTimeZone}
            readOnly
          />
        </div>
      </LoadScript>
    </div>
  );
};

export default MapPoint;