import "./icons.css";

interface IconsHLProps {
  hotels: any[];
}

const IconsHL: React.FC<IconsHLProps> = ({ hotels }) => {
  const getRandomIcons = () => {
    const amenities = hotels.flatMap((hotel) => hotel.amenities);
    const uniqueIcons = Array.from(
      new Set(amenities.map((amenity) => amenity.icon))
    );
    const randomIcons = [];

    while (randomIcons.length < 5 && uniqueIcons.length > 0) {
      const randomIndex = Math.floor(Math.random() * uniqueIcons.length);
      randomIcons.push(uniqueIcons.splice(randomIndex, 1)[0]);
    }

    return randomIcons;
  };

  const randomIcons = getRandomIcons();

  return (
    <div className="icons-container">
      {randomIcons.map((icon, index) => (
        <div key={index} className="moreInfotooltip">
          <img src={icon} className="jpg_icons" />
        </div>
      ))}
    </div>
  );
};

export default IconsHL;
