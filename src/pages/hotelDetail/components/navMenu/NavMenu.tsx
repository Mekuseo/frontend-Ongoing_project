import "./NavMenu.css";

interface NavMenuProps {
  pricePerNight: string[];
}

const NavMenu: React.FC<NavMenuProps> = ({ pricePerNight }) => {
  const handleViewDealClick = () => {
    const roomsSection = document.getElementById("rooms-section");
    if (roomsSection) {
      roomsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <div className="navMenu-container">
        <ul className="navMenu-list">
          <li>
            <a href="#overview-section">Overview</a>
          </li>
          <li>
            <a href="#location-section">Location</a>
          </li>
          <li>
            <a href="#amenities-section">Amenities</a>
          </li>
          <li>
            <a href="#rooms-section">Rooms</a>
          </li>
          <li>
            <a href="#policies-section">Policies</a>
          </li>
          <li>
            <a href="#reviews-section">Reviews</a>
          </li>
        </ul>

        <div className="navMenu-price">
          <small>From</small>
          <p>
            &#8358;
            {Math.min(...(pricePerNight.map(Number) || []))}
          </p>
          <button onClick={handleViewDealClick}>VIEW THIS DEAL</button>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
