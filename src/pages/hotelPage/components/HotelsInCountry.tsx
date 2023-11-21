import { useState, useRef, useEffect } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import hotelData from "../HotelData.json";
import "./LateNightDeals.css";

import homepage1 from "../../../assets/pics/homepage1.jpeg";
import homepage2 from "../../../assets/pics/homepage2.jpeg";
import homepage3 from "../../../assets/pics/homepage3.jpeg";
import homepage4 from "../../../assets/pics/homepage4.jpeg";
import homepage5 from "../../../assets/pics/homepage5.jpeg";

const imageImports = [homepage1, homepage2, homepage3, homepage4, homepage5];


const HotelsInCountry = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardContainerRef.current) {
        const maxScrollLeft =
          cardContainerRef.current.scrollWidth -
          cardContainerRef.current.clientWidth;
        const scrollLeft = cardContainerRef.current.scrollLeft;

        const hasMoreImagesLeft = scrollLeft > 0;

        const hasMoreImagesRight = scrollLeft < maxScrollLeft;

        const leftArrow = document.getElementById("leftArrow4");
        const rightArrow = document.getElementById("rightArrow4");

        if (leftArrow) {
          leftArrow.style.backgroundColor = hasMoreImagesLeft
            ? "#5F5E5E"
            : "#D9D9D9";
        }

        if (rightArrow) {
          rightArrow.style.backgroundColor = hasMoreImagesRight
            ? "#5F5E5E"
            : "#D9D9D9";
        }
      }
    };

    if (cardContainerRef.current) {
      cardContainerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (cardContainerRef.current) {
        cardContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handlePrevCard = () => {
    if (cardContainerRef.current) {
      const cardWidth = cardContainerRef.current.offsetWidth;
      const newIndex = currentCardIndex === 0 ? hotelData.length - 1 : currentCardIndex - 1;
      cardContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
      setCurrentCardIndex(newIndex);
    }
  };

  const handleNextCard = () => {
    if (cardContainerRef.current) {
      const cardWidth = cardContainerRef.current.offsetWidth;
      const newIndex = currentCardIndex === hotelData.length - 1 ? 0 : currentCardIndex + 1;
      cardContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
      setCurrentCardIndex(newIndex);
    }
  };



  return (
    <Box>
      <Box>
        <Typography
          style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "30px",
            fontWeight: "700",
            color: "#263238",
            display: "flex",
            justifyContent: "space-between",
            margin: "0 45px",
          }}
        >
          Hotels in countries we currently operate
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div
              id="leftArrow4"
              className="arrow-container"
              onClick={handlePrevCard}
              style={{ background: "#D9D9D9" }}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{
                  color: "#ffffff",
                }}
                size="2xs"
              />
            </div>
            <div
              id="rightArrow4"
              className="arrow-container"
              onClick={handleNextCard}
              style={{ background: "#D9D9D9" }}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{
                  color: "#ffffff",
                }}
                size="2xs"
              />
            </div>
          </Box>
        </Typography>
      </Box>

      <div
        style={{
          display: "flex",
          overflowX: "hidden",
          margin: "20px 0 20px 45px",
          scrollBehavior: "smooth",
        }}
        ref={cardContainerRef}
      >
        {hotelData.map((hotel, index) => (
          <Card
            key={index}
            sx={{
              height: "259px",
              width: 266,
              marginBottom: "30px",
              position: "relative",
              margin: "0 20px 32px 0",
              paddingBottom: "32px",
              borderRadius: "20px",
              flex: "0 0 auto",
            }}
          >
            <CardCover
              sx={{
                boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img src={imageImports[index]} loading="lazy" alt={hotel.alt} />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: "800",
                  textColor: "black",
                  background:
                    "linear-gradient(90deg, #FFF 0%, #FFF 100%)",
                  textAlign: "center",
                  width: "163px",
                  position: "absolute",
                  bottom: "-13px",
                  right: "50px",
                  borderRadius: "5px",
                  boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.5)",
                }}
              >
                {hotel.country}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Box>
  );
};

export default HotelsInCountry;
