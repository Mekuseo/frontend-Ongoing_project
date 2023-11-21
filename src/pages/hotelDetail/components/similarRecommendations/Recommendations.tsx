import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  FaPlaneDeparture,
  FaHotel,
  FaTaxi,
  FaShoppingBag,
  BiFoodMenu,
  FiWind,
  IoIosArrowBack,
  IoIosArrowForward,
} from "./icons";
import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
  slide16,
  slide17,
  slide18,
} from "./images";
import roomsData from "./Recommendations.json";
import HorizontalScroll from "react-scroll-horizontal";
import "./Recommendations.css";

const Recommendations = () => {
  const slides = [
    [slide1, slide2, slide3],
    [slide4, slide5, slide6],
    [slide7, slide8, slide9],
    [slide10, slide11, slide12],
    [slide13, slide14, slide15],
    [slide18, slide17, slide16],
    // Add more cards here if needed
  ];

  const [currentSlides, setCurrentSlides] = useState([0, 0, 0, 0, 0, 0]);
  const [selectLike, setSelectLike] = useState(
    Array(roomsData.recommendations.length).fill(false)
  );

  const nairaCurrency = (text: string) => {
    return text.replace("N", "₦");
  };

  const handleNextSlide = (index: number) => {
    setCurrentSlides((prevSlides) =>
      prevSlides.map((slide, idx) =>
        idx === index ? (slide + 1) % slides[index].length : slide
      )
    );
  };

  const handleHeartIcon = (index: number) => {
    setSelectLike((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  };

  const handlePrevSlide = (index: number) => {
    setCurrentSlides((prevSlides) =>
      prevSlides.map((slide, idx) =>
        idx === index
          ? slide === 0
            ? slides[index].length - 1
            : slide - 1
          : slide
      )
    );
  };

  return (
    <div className="recommendations-container">
      <h1 className="rooms-title">Similar properties recommended for you</h1>
      <div className="rooms-flex-cards">
        <HorizontalScroll
          reverseScroll={true}
          style={{
            height: "100%",
            width: "100%",
            overflowX: "scroll",
            touchAction: "pan-y",
          }}
        >
          <div className="recommendedCards-container">
            {roomsData.recommendations.map((room, index) => (
              <div key={index} className="rooms-container">
                <div className="rooms-card-container">
                  <div className="recommend-imgContainer">
                    <img
                      src={slides[index][currentSlides[index]]}
                      alt="rooms"
                      className="room-img"
                      style={{ transition: "all 1s easein" }}
                    />
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`heart-icon ${
                        selectLike[index] ? "liked" : ""
                      }`}
                      onClick={() => handleHeartIcon(index)}
                    />
                    <div
                      className="recommend-arrow-button recommend-arrow-left"
                      onClick={() => handlePrevSlide(index)}
                    >
                      <IoIosArrowBack />
                    </div>
                    <div
                      className="recommend-arrow-button recommend-arrow-right"
                      onClick={() => handleNextSlide(index)}
                    >
                      <IoIosArrowForward />
                    </div>
                  </div>
                  <div className="rooms-card-details">
                    <p className="rooms-card-title">{room.title}</p>
                    <p className="rooms-card-subtitle">{room.subtitle}</p>
                    <hr />

                    <ul className="rooms-featureList">
                      {room.features.map((item, index) => (
                        <li key={index}>
                          {item.icon === "FaTaxi" && <FaTaxi />}
                          {item.icon === "FiWind" && <FiWind />}
                          {item.icon === "FaHotel" && <FaHotel />}
                          {item.icon === "FaShoppingBag" && <FaShoppingBag />}
                          {item.icon === "FaPlaneDeparture" && (
                            <FaPlaneDeparture />
                          )}
                          {item.icon === "BiFoodMenu" && <BiFoodMenu />}
                          {item.text}
                        </li>
                      ))}
                    </ul>
                    <hr />

                    <div className="recommendations-reviews">
                      {room.reviews.map((option, index) => (
                        <p key={index}>{option}</p>
                      ))}
                    </div>
                  </div>

                  <div className="rooms-price-container">
                    <div className="recommendation-price">
                      <h2>{nairaCurrency(room.price)}</h2>
                      <div className="rooms-discount">
                        <p>{nairaCurrency(room.formerPrice)}</p>
                      </div>
                    </div>
                    <div>
                      <button className="recommendation-btn">Reserve</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </HorizontalScroll>
      </div>
    </div>
  );
};

export default Recommendations;
