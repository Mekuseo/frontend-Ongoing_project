import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 0, // Replace with your desired latitude
  lng: 0, // Replace with your desired longitude
};

function MyMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAVwk4zQLre_39WeAvbdDjbpI9W6mlQEAY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* You can add markers, polygons, and other map components here */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;
