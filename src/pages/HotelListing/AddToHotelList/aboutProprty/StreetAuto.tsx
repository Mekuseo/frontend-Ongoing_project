import React, { useRef, useEffect } from "react";
import { Autocomplete, LoadScript } from "@react-google-maps/api";

interface StreetAutoProps {
  propertyStreetAddress: string;
  setPropertyStreetAddress: (value: string) => void;
  onLocationChange: (coordinates: { lat: number; lng: number }) => void;
}

const StreetAuto: React.FC<StreetAutoProps> = ({
  propertyStreetAddress,
  setPropertyStreetAddress,
  // onLocationChange,
}) => {
  const mapRef = useRef<google.maps.places.Autocomplete | null>();

  // Callback function when the selected place changes
  const handlePlaceChanged = () => {
    if (mapRef.current) {
      const place = mapRef.current.getPlace();

      // Check if place and place.geometry are defined
      if (place && place.geometry) {
        // Extracting coordinates from the selected place
        const location = {
          lat: place.geometry.location?.lat(),
          lng: place.geometry.location?.lng(),
        };

        // Log the formatted address and coordinates
        console.log("Formatted Address:", place.formatted_address);
        console.log("Location Coordinates:", location);

        // Set the street address in the state
        // setPropertyStreetAddress(place.formatted_address);

        // Notify the parent component about the location change
        // onLocationChange({
        //   lat: place.geometry.location?.lat(),
        //   lng: place.geometry.location?.lng(),
        // });
      }
    }
  };

  useEffect(() => {
    // Additional checks or actions when the component mounts, if needed
  }, []);

  return (
    <div>
      <div className="colAddress right">
        <p className="streetlocation">Street address</p>
        <br/>
        <LoadScript
          googleMapsApiKey="AIzaSyAVwk4zQLre_39WeAvbdDjbpI9W6mlQEAY"
          libraries={["places"]}
        >
          <Autocomplete
            className="location"
            onLoad={(autocomplete) => {
              mapRef.current = autocomplete;
            }}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              placeholder="Thomas Sankara drive"
              className="location"
              value={propertyStreetAddress}
              onChange={(e) => setPropertyStreetAddress(e.target.value)}
              required
            />
          </Autocomplete>
        </LoadScript>
      </div>
    </div>
  );
};

export default StreetAuto;
