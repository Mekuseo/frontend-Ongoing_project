import ButtonGroup from "./buttons";
import "./hotelListBody.css";
import Slideshow from "./slideshow/slideshow";
import Comment from "./comments/comment";
import IconsHL from "./icons/icon";
import Badge from "./Badge/badge";
// import PopupModal from "./PriceModal/modal";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  noticeIcon,
  propertyStarIcon,
  reserveIcon,
  thumbsUp,
} from "./PropertyIcons";
// import testImage from "../../../../assets/pics/unsplash6.jpg";
// import StarIcon from "../../../../svgs/StarIcon";

interface HotelListingBodyProps {
  hotels: any[];
  hotelsCity: string;
  roomCount: number;
  hotelSearchString: string;
  checkinDate: Date | null;
  checkoutDate: Date | null;
  adultCount: number;
  childCount: number;
  numberOfNight: number;
}

const HotelListBody: React.FC<HotelListingBodyProps> = ({
  hotels,
  hotelsCity,
  roomCount,
  hotelSearchString,
  checkinDate,
  checkoutDate,
  adultCount,
  childCount,
  numberOfNight,
}) => {
  const navigate = useNavigate();
  // const [, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  // const handleMouseEnter = () => {
  //   openModal();
  // };

  const handleDetailPage = async (clickedHotelId: number) => {
    try {
      try {
        navigate(
          `/HotelDetail?&searchString=${hotelSearchString}&CheckIn=${checkinDate}&CheckOut=${checkoutDate}&numberOfRoom=${roomCount}&adultCount=${adultCount}&childCount=${childCount}&hotelId=${clickedHotelId}&numberOfNight=${numberOfNight}`
        );
      } catch (error) {
        console.log("Error navigating to hotel detail:", error);
      }
      // navigate(`/HotelDetail/${clickedHotelId}`);
    } catch (error) {
      console.log("Error navigating to hotel detail:", error);
    }
  };

  return (
    <>
      <div className="filterMain">
        <ButtonGroup />
        <h1>
          {hotelsCity}: {hotels.length} properties found
        </h1>

        {hotels.map((hotel) => {
          return (
            <div className="propertyCard">
              <div
                style={{ width: "100%", height: "100%", flex: "1" }}
                className="hotelListingImage"
              >
                <Slideshow images={hotel.main_photo} />
              </div>
              <div
                className="propertyCard-right"
                onClick={() => handleDetailPage(hotel.id)}
              >
                <div>
                  <span className="propertyReview">
                    <Comment />
                  </span>
                </div>
                <div className="propertyCard-rightFlex">
                  <div className="propertyDescription-container">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        height: "20px",
                      }}
                    >
                      <span className="propertyName">{hotel.hotel_name}</span>
                      <div>
                        <Badge />
                      </div>
                    </div>
                    <div className="starArray">
                      {Array.from({ length: hotel.rating }, (_, index) => (
                        <React.Fragment key={index}>
                          {propertyStarIcon()}
                          {/* <label htmlFor={index.toString()}>☆</label> */}
                        </React.Fragment>
                      ))}
                    </div>
                    <span className="propertyLocation">
                      {hotel.location_city}, {hotel.location_state}
                    </span>
                    <div className="propertySubamenity-container">
                      {hotel.amenities.length > 0 && (
                        <span className="propertySubamenity">
                          {hotel.amenities[0].subItem}
                        </span>
                      )}
                      {hotel.amenities.length > 0 && (
                        <span className="propertySubamenity">
                          {hotel.amenities[1].subItem}
                        </span>
                      )}
                      <span className="propertySubamenity">
                        {Math.max(0, hotel.amenities.length - 2)}
                      </span>
                    </div>
                    <div className="propertyState-container">
                      {thumbsUp()}
                      <span className="propertyState-desc">
                        Property was recently booked
                      </span>
                    </div>
                    <div className="propertyPaymentState">
                      {reserveIcon()}
                      <span className="propertyPaymentState-desc">
                        Pay at hotel
                      </span>
                    </div>

                    <div style={{ marginTop: "-20px" }}>
                      <IconsHL hotels={hotels} />{" "}
                    </div>
                    <span className="propertyNotification">
                      Two rooms left at this price on our site
                    </span>
                  </div>

                  <div className="propertyDesc-right-container">
                    <div className="propertyDesc-right">
                      <div className="propertyDesc-right-reviewScore">
                        <span className="propertyDesc-right-textScore">
                          Very good
                        </span>
                        <span className="propertyDesc-right-numScore">9.5</span>
                      </div>
                      <span className="propertyDesc-reviewnum">201 views</span>
                    </div>

                    <div className="propertyDesc-right-bottom">
                      <span className="propertyDesc-roomdesc">
                        {numberOfNight} night, {roomCount} room
                      </span>
                      <div className="propertyDesc-priceContainer">
                        <span className="propertyDesc-priceDesc">
                          <p>
                            {noticeIcon()} ₦
                            {(Math.min(
                              ...(hotel.room_night_rates_of_room_type || [])
                            ) -
                              (Math.min(
                                ...(hotel.room_night_rates_of_room_type || [])
                              ) *
                                Math.min(
                                  ...(hotel.room_weekly_rates_off_of_room_type ||
                                    [])
                                )) /
                                100) *
                              roomCount *
                              numberOfNight}
                          </p>
                        </span>
                      </div>
                      <div className="propertyDesc-discount">
                        <span className="propertyDesc-discountPrice">
                          ₦{" "}
                          {Math.min(
                            ...(hotel.room_night_rates_of_room_type || [])
                          ) *
                            roomCount *
                            numberOfNight}
                        </span>
                        <span className="propertyDesc-discountPercent">
                          {Math.min(
                            ...(hotel.room_weekly_rates_off_of_room_type || [])
                          )}
                          % OFF TODAY
                        </span>
                      </div>
                      <span className="propertyDesc-discountNotice">
                        This includes taxes and fees
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HotelListBody;
