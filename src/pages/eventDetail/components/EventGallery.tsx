import { useState } from "react";
import styles from "./EventGallery.module.css";
import eventgallery1 from "../../../assets/pics/eventgallery1.png";
import eventgallery2 from "../../../assets/pics/eventgallery2.jpeg";
import eventgallery3 from "../../../assets/pics/eventgallery3.jpeg";
import eventgallery4 from "../../../assets/pics/eventgallery4.jpeg";
import {
  faImage,
  faShareNodes,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import EventPhotosModal from "./EventPhotosModal";

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1080,
  height: "80vh",
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EventGallery: React.FC = () => {
  const [isAddToCartClicked, setIsAddToCartClicked] = useState(false);
  const [isShareClicked, setIsShareClicked] = useState(false);
  const [displayPhotos, setDisplayPhotos] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleClickAddToCart = () => {
    setIsAddToCartClicked(!isAddToCartClicked);
  };

  const handleClickShare = () => {
    setIsShareClicked(!isShareClicked);
  };

  const handleDisplayPhotos = () => {
    setDisplayPhotos(!displayPhotos);
    handleOpen();
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.leftImage} style={{ position: "relative" }}>
          <Button
            style={{
              position: "absolute",
              bottom: "40px",
              right: "0",
              margin: "20px 40px 0 0",
              color: "black",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transform: displayPhotos ? "scale(1.05)" : "scale(1)",
              transition: "color 0.3s, transform 0.3s",
              cursor: "pointer",
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "5px",
              textTransform: "capitalize",
            }}
            onClick={handleDisplayPhotos}
          >
            <FontAwesomeIcon icon={faImage} />
            <p>Show all Photos</p>
          </Button>
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              margin: "20px 40px 0 0",
              color: isShareClicked ? "gold" : "white",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transform: isShareClicked ? "scale(1.05)" : "scale(1)",
              transition: "color 0.3s, transform 0.3s",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faShareNodes} onClick={handleClickShare} />
            <p>Share</p>
          </div>
          <img
            src={eventgallery1}
            alt="eventGallery1"
            className={styles.image}
          />
        </div>

        

        <div className={styles.rightImages} style={{ position: "relative" }}>
          <div>
            <Button
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                margin: "20px 40px 0 0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: isAddToCartClicked ? "red" : "white",
                padding: "5px 10px",
                borderRadius: "5px",
                color: isAddToCartClicked ? "white" : "black",
                transform: isAddToCartClicked ? "scale(1.05)" : "scale(1)",
                transition: "background-color 0.3s, color 0.3s, transform 0.3s",
              }}
              onClick={handleClickAddToCart}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
              <p>Add to Cart</p>
            </Button>
            <img
              src={eventgallery2}
              alt="eventGallery2"
              className={styles.rightImage}
            />
          </div>
          <img
            src={eventgallery3}
            alt="eventGallery3"
            className={styles.smallImage}
          />
          <img
            src={eventgallery4}
            alt="eventGallery4"
            className={styles.smallImage}
          />
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EventPhotosModal />
        </Box>
      </Modal>
    </div>
  );
};

export default EventGallery;
