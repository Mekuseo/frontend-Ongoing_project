import "./ImportantDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faMedal,
  faEye,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons"; // Import specific icon from font-awesome
import Wifi from "../../../../svgs/Wifi";
import Fan from "../../../../svgs/Fan";
import AC from "../../../../svgs/AC";
import FreeSpa from "../../../../svgs/FreeSpa";
import FreeLunch from "../../../../svgs/FreeLunch";
import RoomService from "../../../../svgs/RoomService";
import CheckOutSmall from "./CheckOutSmall";
import CheckInSmall from "./CheckInSmall";
import { FaCheck } from "react-icons/fa";

interface ImportantDetailsProps {
  hotelName: string;
  propertyDescription: string;
  mainPictures: string[];
  checkedAmenities: {
    amenity: string;
    subItem: string;
  }[];
  checkinDate: Date | null;
  checkoutDate: Date | null;
  checkInTime: string;
  checkOutTime: string;
  roomCount: number;
  numberOfNight: number;
  roomRoomType: string;
  totalRoomPrice: string;
}

const ImportantDetails: React.FC<ImportantDetailsProps> = ({
  hotelName,
  propertyDescription,
  mainPictures,
  checkedAmenities,
  checkinDate,
  checkoutDate,
  checkInTime,
  checkOutTime,
  roomCount,
  numberOfNight,
  roomRoomType,
  totalRoomPrice,
}) => {
  const renderStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          fade
          style={{ color: "#f0b500" }}
        />
      );
    }
    return stars;
  };

  const allowedAmenities = checkedAmenities.filter(
    (item) => item.amenity === ""
  );

  return (
    <div className="importantDetails-container">
      <div className="importantDetails-leftCard">
        <h3 className="importantDetails-leftCard-title">Important Details</h3>
        <div className="importantDetails-leftCard-border">
          <div className="importantDetails-hotelTitle">
            <img src={mainPictures[0]} alt="transcorp" />
            <div className="importantDetails-hotelTitle-Section">
              <h3>
                {hotelName} <span>{renderStars(5)}</span>
              </h3>
              <small>{propertyDescription}</small>
              <small>
                <a href="#">Show location on map</a>
              </small>
            </div>
          </div>

          <div className="importantDetails-score">
            <h3 className="importantDetails-score-number">9.8</h3>
            <FontAwesomeIcon
              icon={faMedal}
              beatFade
              style={{ color: "#6e9e76" }}
            />
            <h3>Great</h3>
          </div>

          <div className="importantDetails-score1">
            <FontAwesomeIcon icon={faEye} />
            <p className="importantDetails-score-seeMore">
              200 reviews{" "}
              <span>
                see more <FontAwesomeIcon icon={faAnglesRight} size="xs" />
              </span>
            </p>
          </div>
          <hr />

          <div className="importantDetails-features">
            <small>
              <Wifi /> Wi-Fi
            </small>
            <small>
              <Fan /> Fan
            </small>
            <small>
              <AC /> AC
            </small>
            <small>
              <AC /> Bathroom
            </small>
            <small>
              <FreeSpa /> Free Spa
            </small>
            <small>
              <FreeLunch /> Free Lunch
            </small>
            <small>
              <RoomService /> Room Service
            </small>
          </div>
          <hr />

          <div
            className="importantDetails-features2"
            style={{ marginBottom: "22px" }}
          >
            <ul>
              {allowedAmenities.map((item, index) => (
                <li key={index}>
                  <FaCheck style={{ color: "green", marginRight: "2" }} />{" "}
                  {item.subItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="importantDetails-rightCard">
        <h3 className="importantDetails-leftCard-title">Booking Summary</h3>

        <div className="importantDetails-leftCard-border importantDetails-rightCard-container">
          <h3
            className="importantDetails-rightCard-subtitle"
            style={{ fontSize: "20px", fontWeight: "700" }}
          >
            Your Booking Details
          </h3>
          <div className="importantDetails-checkIn">
            <div className="importantDetails-checkIn-Details">
              <p>
                Check In <CheckInSmall />{" "}
              </p>
              <p style={{ fontWeight: "700", fontSize: "13px" }}>
                {checkinDate && (
                  <p>
                    {checkinDate.toLocaleDateString("en-US", {
                      weekday: "short",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
              </p>
              <p style={{ fontSize: "12px" }}>{checkInTime}</p>
            </div>
            <div className="importantDetails-checkIn-Details">
              <p>
                Check In <CheckOutSmall />{" "}
              </p>
              <p style={{ fontWeight: "700", fontSize: "13px" }}>
                {checkoutDate && (
                  <p>
                    {checkoutDate.toLocaleDateString("en-US", {
                      weekday: "short",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
              </p>
              <p style={{ fontSize: "12px" }}>{checkOutTime}</p>
            </div>
          </div>

          <div className="importantDetails-lengthOfNight">
            <p>
              Length of stay:{" "}
              <span style={{ fontWeight: "700" }}>
                {numberOfNight} night(s)
              </span>
            </p>
            <p>
              Number of rooms:{" "}
              <span style={{ fontWeight: "700" }}>{roomCount}</span>
            </p>
          </div>

          <div className="importantDetails-roomType">
            <div>
              <p>Room type</p>
              <small style={{ fontWeight: "700", fontSize: "10px" }}>
                {roomRoomType}
              </small>
            </div>
            <div>
              <p>Bed type</p>
              <small style={{ fontWeight: "700", fontSize: "10px" }}>
                Single bed
              </small>
            </div>
            <div>
              <p>Room class</p>
              <small style={{ fontWeight: "700", fontSize: "10px" }}>
                Classic
              </small>
            </div>
          </div>

          <a href="#" style={{ fontSize: "13px", fontWeight: "600" }}>
            Change selection
          </a>
          <p style={{ fontSize: "20px", fontWeight: "700" }}>Price Summary</p>

          <div
            className="importantDetails-priceDisplay"
            style={{ alignItems: "center" }}
          >
            <div>
              <p>
                {numberOfNight} Nightly rate x {roomCount} room:
              </p>
              <p>₦{totalRoomPrice}</p>
            </div>
            <div>
              <p>Taxes and fees (5%):</p>
              <p>₦300.00</p>
            </div>
            <div style={{ margin: "10px 0", gap: "30px" }}>
              <p style={{ fontSize: "15px", fontWeight: "400" }}>TOTAL PRICE</p>
              <p style={{ fontSize: "20px", fontWeight: "400" }}>
                ₦{totalRoomPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantDetails;
