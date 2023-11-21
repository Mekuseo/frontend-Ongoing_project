import "./DestinationsHero.css";
import GeoIcon from "./LocationIcon";

const DestinationsHero = () => {
  return (
    <div className="destinationsbody">
      <div className="heroBackground">
        <h1>Abuja</h1>
        <div>
          <GeoIcon />
          <p> Jabi Lake, Abuja</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationsHero;
