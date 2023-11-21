import "./TrendingEvents.css";
import {
  greenDot,
  dateIcon,
  locationIcon2,
} from "../DestinationDescriptionIcons";
import { inspiredEvents, trendingEvents } from "./EventsData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const TrendingEvents = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);

  const scrollLeft = () => {
    setScrollPosition(scrollPosition - 1);
  };

  const scrollLeft2 = () => {
    setScrollPosition2(scrollPosition2 - 1);
  };

  const scrollRight = () => {
    setScrollPosition(scrollPosition + 1);
  };

  const scrollRight2 = () => {
    setScrollPosition2(scrollPosition2 + 1);
  };

  return (
    <div className="trendingContainer">
      <div className="trendingTitle">
        <h1>Trending Events Happening in Abuja</h1>
        <div className="trendingImg-arrows">
          <button
            className="trendingLeftArrow"
            onClick={scrollLeft}
            disabled={scrollPosition === 0}
          >
            <div>
              <FaChevronLeft />
            </div>
          </button>
          <button
            className="trendingRightArrow"
            onClick={scrollRight}
            disabled={scrollPosition >= trendingEvents.length - 2}
          >
            <div>
              <FaChevronRight />
            </div>
          </button>
        </div>
      </div>
      <div
        className="trendingCard-container"
>
        {trendingEvents
          .slice(scrollPosition, scrollPosition + 2)
          .map((event, index) => {
            return (
              <div key={index} className="inspiredEvents">
                <img src={event.image} alt="party" className="trendingImage" />
                <div className="trendingDetails">
                  <p>{event.name}</p>
                  <p>
                    {dateIcon()} {event.date}
                  </p>
                  <p>
                    {locationIcon2()} {event.location}
                  </p>
                  <p>{event.price}</p>
                  <p>
                    {greenDot()} {event.type}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="trendingTitle">
        <h1>Get Inspired for your trip to Abuja</h1>
        <div className="trendingImg-arrows inspiredArrows">
          <button
            className="trendingLeftArrow"
            onClick={scrollLeft2}
            disabled={scrollPosition2 === 0}
          >
            <div>
              <FaChevronLeft />
            </div>
          </button>
          <button
            className="trendingRightArrow"
            onClick={scrollRight2}
            disabled={scrollPosition2 >= trendingEvents.length - 4}
          >
            <div>
              <FaChevronRight />
            </div>
          </button>
        </div>
      </div>

      <div className="inspiredSlide-container">
        {inspiredEvents
          .slice(scrollPosition2, scrollPosition2 + 4)
          .map((event) => {
            return (
              <div key={event.id} className="inspiredCard-container">
                <div>
                  <img
                    src={event.img}
                    alt={event.name}
                    className="inspiredImages"
                  />
                </div>
                <div className="inspiredEvent-title">
                  <p>Things to do</p>
                  <div>
                    {greenDot()}{" "}
                    <span
                      style={{ color: `${event.color}` }}
                      className="eventType"
                    >
                      {event.type}
                    </span>{" "}
                  </div>
                </div>
                <div className="trendingEvent-place">
                  <p>{event.name}</p>
                  <p>
                    <span className="TrendingEntryfee">Entry fee</span>{" "}
                    {event.fee}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TrendingEvents;
