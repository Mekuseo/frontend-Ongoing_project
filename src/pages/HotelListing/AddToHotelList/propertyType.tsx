// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Navbar from "../../../component/HomePage/header/header";
import Footer from "../../../component/HomePage/footer/Footer";
import "../../../component/stay/ownsProfileBody/propertyAxis.css";
import PropatiyTypeRDetals from "./proptrytype/PropatiyTypeRDetals";
import RoomNumber from "./proptrytype/RoomNumber";
import RoomType from "./proptrytype/__RoomType";
import Roomcatigory from "./proptrytype/Roomcatigory";
import RoomClass from "./proptrytype/RoomClass";
import RoomRate from "./proptrytype/RoomRate";
import LateNight from "./proptrytype/LateNight";
import TypeBed from "./proptrytype/TypeBed";

function PropertyType() {
  return (
    <div>
      <Navbar />

      <div className="content">
        <h1 className="headText">Property Axis</h1>

        <center>
          <div className="myDIV">
            <a href="/aboutProperty">
              <button className="btn">1</button>
            </a>

            <a href="/Amenities">
              <button className="btn">2</button>
            </a>

            <a href="/propertyType">
              <button className="btn clicked">3</button>
            </a>

            <a href="/PropertyPolicy">
              <button className="btn">4</button>
            </a>

            <a href="/commision">
              <button className="btn">5</button>
            </a>

            <a href="/photos">
              <button className="btn">6</button>
            </a>

            <a href="/contract">
              <button className="btn">7</button>
            </a>
          </div>
        </center>

        <br />

        <p className="header">Select property type</p>

        <PropatiyTypeRDetals />
        <RoomNumber />
        <RoomType />
        {/* <RoomCapacity /> */}
        <Roomcatigory />
        <RoomClass />
        <RoomRate />
        <LateNight />
        <TypeBed />

        <div className="bottombuttons">
          <a href="#" className="main">
            save and exit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z"
                stroke="#6E9E76"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.59003 11L11.09 12.5L15.09 8.5"
                stroke="#6E9E76"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <div className="bottombuttons-right">
            <a href="/Amenities" className="main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill="none"
              >
                <path
                  d="M23 7H2L9 14"
                  stroke="#6E9E76"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              previous
            </a>
            <a href="/PropertyPolicy" className="a">
              next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="18"
                viewBox="0 0 25 18"
                fill="none"
              >
                <path
                  d="M2 9L23 9L16 2"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23 9L16 16"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default PropertyType;
