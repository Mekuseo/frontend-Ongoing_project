import "./RoomDetails.css";
import DoubleArrowSmall from "../../../../svgs/DoubleArrowSmall";
import { BiDoorOpen } from "react-icons/bi";
import Wifi from "../../../../svgs/Wifi";
import Fan from "../../../../svgs/Fan";
import AC from "../../../../svgs/AC";
import Users from "../../../../svgs/Users";

const RoomDetails = () => {
  return (
    <div className="roomDetails-container">
      <h2>Room details</h2>
      <div className="roomDetails-features">
        <div
          style={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          <DoubleArrowSmall />
          <BiDoorOpen />
          <p>Classic Room</p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "2px",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          <DoubleArrowSmall />
          <BiDoorOpen />
          <p>Single Room</p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "2px",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          <DoubleArrowSmall />
          <BiDoorOpen />
          <p>King sized bed</p>
        </div>
      </div>

      <div
        className="roomDetails-features"
        style={{ marginTop: "-5px", justifyContent: "center", gap: "45px" }}
      >
        <div>
          <Wifi />
          <p>Wi-Fi</p>
        </div>
        <div>
          <Fan />
          <p>Fan</p>
        </div>
        <div>
          <AC />
          <p>AC</p>
        </div>
        <div>
          <AC />
          <p>Bathroom</p>
        </div>
      </div>

      <div className="roomDetails-persons" style={{marginBottom:"25px"}}>
        <DoubleArrowSmall />
        <Users />
        <h3 style={{fontSize:"20px", fontFamily:"Raleway, sans-serif"}}>2 people max in the room</h3>
      </div>

      <div className="roomDetails-input" style={{marginBottom:"10px"}}>
        <h3 style={{fontSize:"15px", fontWeight:"600"}}>Customer preference</h3>
        <input type="text" placeholder=".Quiet room .Balcony .Add more" />
      </div>

      <div className="roomDetails-input">
        <h3 style={{fontSize:"15px", fontWeight:"600"}}>Any special request?</h3>
        <input type="text" />
      </div>
    </div>
  );
};

export default RoomDetails;
