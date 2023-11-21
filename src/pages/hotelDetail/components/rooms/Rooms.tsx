import "./Rooms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import {
//   FaAngleDoubleRight,
//   FaDoorOpen,
//   FaBed,
//   FaBath,
//   FaWifi,
//   FaBriefcase,
// } from "react-icons/fa";
// import { TiWarning } from "react-icons/ti";
// import { BiSpa, BiFoodMenu, BiBed } from "react-icons/bi";
// import { FiWind } from "react-icons/fi";
// import { IoSnowOutline } from "react-icons/io5";
// import { HiUsers } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import roomsData from "./roomsData.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleDoubleRight, FaBriefcase } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

interface RoomsProps {
  number_of_room_type: number;
  numberBedrooms: number;
  roomTypeName: string[];
  images: string[];
  pricePerNight: string[];
  selectedRoomTypeAmenities: { [key: number]: any[] };
  type_of_room: string[];
  room_class_of_room_type: string[];
  room_type_capacity: number[];
  selectedPaymentMethods: string[];
  roomDiscount: string[];
  hotelId: number;
  checkinDate: Date | null;
  checkoutDate: Date | null;
  roomCount: number;
  numberOfNight: number;
}

const Rooms: React.FC<RoomsProps> = ({
  number_of_room_type,
  numberBedrooms,
  roomTypeName,
  images,
  pricePerNight,
  selectedRoomTypeAmenities,
  type_of_room,
  room_class_of_room_type,
  room_type_capacity,
  selectedPaymentMethods,
  roomDiscount,
  hotelId,
  checkinDate,
  checkoutDate,
  roomCount,
  numberOfNight,
}) => {
  const navigate = useNavigate();
  const [currentSlides, setCurrentSlides] = useState([0, 0, 0]);
  const [selectLike, setSelectLike] = useState(
    Array(roomsData.rooms.length).fill(false)
  );

  // const nairaCurrency = (text: string) => {
  //   return text.replace("N", "₦");
  // };

  const handleNextSlide = (index: number) => {
    setCurrentSlides((prevSlides) =>
      prevSlides.map((slide, idx) =>
        idx === index ? (slide + 1) % images[index].length : slide
      )
    );
  };

  const handlePrevSlide = (index: number) => {
    console.log(images);
    setCurrentSlides((prevSlides) =>
      prevSlides.map((slide, idx) =>
        idx === index
          ? slide === 0
            ? images[index].length - 1
            : slide - 1
          : slide
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

  const handleHotelBooking = (index: number) => {
    try {
      const totalRoomPrice =
        (roomCount *
          numberOfNight *
          (parseFloat(pricePerNight[index]) *
            parseFloat(roomDiscount[index]))) /
        100;
      console.log(totalRoomPrice);
      navigate(
        `/HotelBooking?hotelId=${hotelId}&CheckIn=${checkinDate}&CheckOut=${checkoutDate}&roomNumber=%${roomCount}&RoomCount=${roomCount}&numberOfNight=${numberOfNight}&roomTypeName=${roomTypeName[index]}&totalRoomPrice=${totalRoomPrice}`
      );
    } catch (error) {
      console.log("Error navigating to hotel detail:", error);
    }
  };

  return (
    <div className="rooms-body">
      <h1 className="rooms-title">
        {number_of_room_type} room types/{numberBedrooms} rooms
      </h1>
      <div className="rooms-flex-cards">
        {Array.from({ length: number_of_room_type }).map((_, index) => (
          <div key={index} className="rooms-container">
            <div className="rooms-card-container">
              <div className="rooms-img-container">
                <img
                  src={images[index] && images[index][currentSlides[index]]}
                  alt="rooms"
                  className="room-img"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = ""; // Set src to an empty string to show nothing
                  }}
                />
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`heart-icon ${selectLike[index] ? "liked" : ""}`}
                  onClick={() => handleHeartIcon(index)}
                />
                <div
                  className="arrow-button arrow-left"
                  onClick={() => handlePrevSlide(index)}
                >
                  <IoIosArrowBack />
                </div>
                <div
                  className="arrow-button arrow-right"
                  onClick={() => handleNextSlide(index)}
                >
                  <IoIosArrowForward />
                </div>
              </div>
              <div className="rooms-card-details">
                <p className="rooms-card-title">{roomTypeName[index]}</p>
                <ul className="rooms-detail-list">
                  <p>
                    <FaAngleDoubleRight /> {type_of_room[index]}
                  </p>
                  <p>
                    <FaAngleDoubleRight /> {room_class_of_room_type[index]}
                  </p>
                  <p>
                    <FaAngleDoubleRight /> Accommodates{" "}
                    <span style={{ marginRight: "12px" }}>
                      <HiUsers />
                    </span>
                    {room_type_capacity[index]}
                  </p>
                </ul>
                <hr />

                <ul className="rooms-featureList">
                  {selectedRoomTypeAmenities[index]?.map((amenity, index) => (
                    <li key={index}>{amenity.subItem}</li>
                  ))}
                </ul>
                <hr />

                <p className="rooms-refundable">
                  Fully refundable until 5th August.{" "}
                  <span>
                    <a href="#">See more</a>
                  </span>
                </p>
                <div className="rooms-paymentOptions">
                  <ul>
                    {selectedPaymentMethods.map((paymentMethod, index) => (
                      <li key={index}>
                        <FaBriefcase /> {paymentMethod}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rooms-price-container">
                <div className="rooms-price">
                  <h2>
                    N{" "}
                    {(
                      (roomCount *
                        numberOfNight *
                        (parseFloat(pricePerNight[index]) *
                          parseFloat(roomDiscount[index]))) /
                      100
                    ).toFixed(2)}
                  </h2>
                  <div className="rooms-discount">
                    <p>{pricePerNight[index]}</p>
                    <p>{roomDiscount[index]} OFF TODAY</p>
                  </div>
                </div>
                <div className="rooms-reserve-container">
                  <small>includes taxes and fees</small>
                  <button onClick={() => handleHotelBooking(index)}>
                    Reserve
                  </button>
                  <small>
                    5 rooms left
                    {/* <TiWarning /> */}
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
