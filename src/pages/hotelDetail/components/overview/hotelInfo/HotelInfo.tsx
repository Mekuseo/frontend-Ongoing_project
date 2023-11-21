import "./HotelInfo.css";
// import Star from "../../../../../assets/pics/star.svg";
import Map from "../../../../../assets/pics/overview map.png";

interface HotelInfoProps {
  hotelName: string;
  propertyDescription: string;
  propertyLocation: string;
  number_of_room_type: number;
  checkedAmenities: {
    amenity: string;
    subItem: string;
    icon: string;
  }[];
}

const HotelInfo: React.FC<HotelInfoProps> = ({
  hotelName,
  propertyDescription,
  propertyLocation,
  // number_of_room_type,
  checkedAmenities,
}) => {
  function shuffleArray(array: { name: string; icon: string }[]) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  // const StarIcon = ({
  //   selected,
  //   onClick,
  // }: {
  //   selected: boolean;
  //   onClick: () => void;
  // }) => {
  //   return (
  //     <img
  //       src={Star}
  //       alt="star"
  //       onClick={onClick}
  //       style={{ cursor: "pointer", opacity: selected ? 1 : 0.3 }}
  //     />
  //   );
  // };

  const shuffledAmenities = shuffleArray(
    checkedAmenities.map((amenity) => ({
      name: amenity.amenity,
      icon: amenity.icon,
    }))
  );

  // const handleStarClick = (starIndex: number) => {
  //   console.log(starIndex)
  //   // setSelectedStars(starIndex + 1);
  // };

  return (
    <div className="overview-detailBody">
      <div>
        <div className="overviewDetails-card">
          <div className="overview-hotelName">
            <h1>{hotelName}</h1>
            <div className="overview-stars">
              <img src={`{StarIcon}*5`} alt="starIcon" />
            </div>
          </div>
          <p className="overview-hotelAddress">{propertyLocation}</p>
          <small className="overview-hotelMap">Show location on map</small>
        </div>

        <div className="overviewDetails-card">
          <h3>Property description</h3>
          <p className="overviewDetails-description">{propertyDescription}</p>
        </div>

        <div className="overviewDetails-card">
          <h3>Highlights</h3>
          <div className="overview-highlights">
            {shuffledAmenities.slice(0, 6).map((item, index) => (
              <div className="overview-highlights-items" key={index}>
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{ width: "30px" }}
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overviewDetails-card">
          <h3>Facilities</h3>
          <div className="overview-highlights">
            {shuffleArray(
              checkedAmenities.map((item) => ({
                name: item.subItem,
                icon: item.icon,
              }))
            )
              .slice(0, 14)
              .map((item, index) => (
                <div className="overview-highlights-items" key={index}>
                  <img
                    src={item.icon}
                    alt={item.name}
                    style={{ width: "30px" }}
                  />
                  <p>
                    <p>{item.name}</p>
                    {/* {item.name.length > 9
                      ? item.name.slice(0, 12) + ".."
                      : item.name} */}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="overview-leftCard">
        <div className="overview-scoreFlex">
          <div className="overview-score">9.5</div>
          <div className="overview-score-text">
            <h4>Very good</h4>
            <small>20 views</small>
          </div>
        </div>

        <div className="overview-leftCard-bottom">
          <img src={Map} alt="hotel map" className="overview-leftCard-map" />
          <div>
            <h3>Places nearby</h3>
            <ul className="overview-leftCard-list">
              <li>Central Park</li>
              <li>Jabi lake mall</li>
              <li>Trust car wash</li>
              <li>24 dry cleaning service</li>
            </ul>
          </div>
          <div>
            <h3>Popular Landmarks</h3>
            <ul className="overview-leftCard-list">
              <li>City gate</li>
              <li>Magic land</li>
              <li>Airport</li>
              <li>AA Rano filling station</li>
            </ul>
          </div>
          <div>
            <h3>Things to do</h3>
            <ul className="overview-leftCard-list">
              <li>Horse Riding</li>
              <li>Walk in the park</li>
              <li>Paint ball</li>
              <li>Archery</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
