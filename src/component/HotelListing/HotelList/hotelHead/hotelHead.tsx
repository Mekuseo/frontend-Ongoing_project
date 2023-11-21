import React, { MouseEventHandler, useState } from "react";
import ModalMapContent from "./modalContent";
import map from "../../../../assets/pics/map2.png";
import dealsImage from "../../../../assets/pics/LNDMain.png";
import "./hotelHead.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface ModalProps {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const location = { lat: 9.0764785, lng: 7.398574 };

  if (!isOpen) return null;
  const google_key = import.meta.env.VITE_google_map_api_key;
  const containerStyle = {
    width: "1020px",
    height: "450px",
  };

  return (
    <div className="mapmodalbg">
      <div className="mapmodal">
        <div onClick={onClose} className="closemapmodal">
          &times;
        </div>
        <div className="mapmodalside">
          <ModalMapContent />
        </div>
        <div className="mapmodalcontent">
          <LoadScript googleMapsApiKey={google_key} libraries={["places"]}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={location ? location : { lat: 9.0764785, lng: 7.398574 }}
              zoom={15}
            >
              {location && <Marker position={location} />}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

const HotelHead = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="row">
        <div className="listcolumn mapList">
          <div className="mapSearchBox">
            <img src={map} alt="" onClick={openModal} />
            <div className="mapSearchBar">Show on map</div>
          </div>
        </div>

        <div className="listcolumn dealsImage">
          <img src={dealsImage} alt="" />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default HotelHead;
