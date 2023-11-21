import { FaMapMarkerAlt, FaCalculator, FaUsers } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import "./SearchTop.css";

const SearchTop = () => {
  return (
    <div>
      <form>
        <div className="input-container">
          <FaMapMarkerAlt className="location-icon" size={20} />
          <input type="text" placeholder="Enter destination name or property name" />
        </div>
        <div className="input-container">
          <FaCalculator className="location-icon" size={20} />
          <input type="text" placeholder="Check in" />
        </div>
        <div className="input-container">
          <FaCalculator className="location-icon" size={20} />
          <input type="text" placeholder="Check out" />
        </div>
        <div className="input-container">
          <FaUsers className="location-icon" size={20} />
          <input type="text" placeholder="2 guests - 1 room" />
        </div>
        <button>
          Search <FiSearch size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchTop;
