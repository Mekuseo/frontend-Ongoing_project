import { useState, useRef, useEffect } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import hotelData from "../HotelData.json";
import "./LateNightDeals.css";

import homepage1 from "../../../assets/pics/homepage1.jpeg";
import homepage2 from "../../../assets/pics/homepage2.jpeg";
import homepage3 from "../../../assets/pics/homepage3.jpeg";
import homepage4 from "../../../assets/pics/homepage4.jpeg";
import homepage5 from "../../../assets/pics/homepage5.jpeg";

const imageImports = [homepage1, homepage2, homepage3, homepage4, homepage5];

const FindOffers = () => {
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

        const leftArrow = document.getElementById("leftArrow3");
        const rightArrow = document.getElementById("rightArrow3");

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        cardContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? hotelData.length - 1 : prevIndex - 1
    );
    scrollToCard(currentCardIndex - 1);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === hotelData.length - 1 ? 0 : prevIndex + 1
    );
    scrollToCard(currentCardIndex + 1);
  };

  const scrollToCard = (index: number) => {
    if (cardContainerRef.current) {
      const cardWidth = cardContainerRef.current.offsetWidth;
      cardContainerRef.current.scrollLeft = index * cardWidth;
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
          Find offers
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div
              id="leftArrow3"
              className="arrow-container"
              onClick={handlePrevCard}
              style={{background:"#D9D9D9"}}
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
              id="rightArrow3"
              className="arrow-container"
              onClick={handleNextCard}
              style={{background:"#D9D9D9"}}
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
        ref={cardContainerRef}
        style={{
          display: "flex",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          margin: "20px 0 20px 45px",
        }}
      >
        {hotelData.map((hotel, index) => (
          <Card
            key={index}
            variant="soft"
            sx={{
              width: 240,
              height: 224,
              background: "white",
              margin: "0 20px 32px 0",
              paddingBottom: "32px",
              borderRadius: "20px",
              flex: "0 0 auto",
            }}
          >
            <AspectRatio>
              <img
                src={imageImports[index]}
                loading="lazy"
                alt={hotel.alt}
                style={{
                  width:"218px",
                  height:"181px"
                }}
              />
            </AspectRatio>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "25px",
                    fontWeight: "700",
                    fontFamily: "Raleway, sans-serif",
                  }}
                >
                  {hotel.hotelTypes}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Box>
  );
};

export default FindOffers;
