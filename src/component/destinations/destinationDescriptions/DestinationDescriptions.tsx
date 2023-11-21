import { useState } from "react";
import "./DestinationDescription.css";
import {
  highlightData,
  HistoryData,
  placesData,
  emergencyData,
  foodData,
  gettingAroundData,
} from "./DestinationDescriptionData";

import {
  highlight,
  history,
  places,
  emergency,
  food,
  gettingAround,
  dotIcon,
  arrowDown,
  arrowUp,
  currencyIcon,
  languageIcon,
  capitalCityIcon,
} from "../DestinationDescriptionIcons";

const DestinationDescriptions = () => {
  const [activeSection, setActiveSection] = useState("highlight");
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleFullDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      // setActiveSection("");
      setShowFullDescription(false);
    } else {
      setActiveSection(section);
      setShowFullDescription(false);
    }
  };

  const renderDescription = () => {
    if (activeSection === "highlight") {
      const { title, description } = highlightData[0];
      if (showFullDescription) {
        return (
          <div className="descriptionSection">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        );
      } else {
        const words = description.split(" ");
        const shortDescription = words.slice(0, 30).join(" ");
        return (
          <div className="descriptionSection">
            <h3>{title}</h3>
            <p>{shortDescription}...</p>
          </div>
        );
      }
    } else if (activeSection === "history") {
      const { title, description } = HistoryData[0];
      if (showFullDescription) {
        return (
          <div className="descriptionSection">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        );
      } else {
        const words = description.split(" ");
        const shortDescription = words.slice(0, 30).join(" ");
        return (
          <div className="descriptionSection">
            <h3>{title}</h3>
            <p>{shortDescription}...</p>
          </div>
        );
      }
    } else if (activeSection === "places") {
      const { title, description } = placesData[0];
      return (
        <div className="descriptionSection">
          <h3>{title}</h3>
          <ul className="descPlace">
            <>
              {description.map((place, index) => {
                return (
                  <div key={index} className="descPlace-list">
                    <li>
                      {dotIcon()} {place.place}
                    </li>
                  </div>
                );
              })}
            </>
          </ul>
        </div>
      );
    } else if (activeSection === "emergency") {
      const { title, description } = emergencyData[0];
      return (
        <div className="descriptionSection">
          <h3>{title}</h3>
          <div className="descriptionSection-grid">
            {description.map((item, index) => {
              return (
                <div key={index} className="DescriptionSection-list">
                  <p>{item.description}</p>
                  <p>{item.badge}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else if (activeSection === "food") {
      const { title, description } = foodData[0];
      if (showFullDescription) {
        return (
          <div className="descriptionSection">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        );
      } else {
        const words = description.split(" ");
        const shortDescription = words.slice(0, 30).join(" ");
        return (
          <div className="descriptionSection">
            <h3>{title}</h3>
            <p>{shortDescription}...</p>
          </div>
        );
      }
    } else if (activeSection === "gettingAround") {
      const { title, description } = gettingAroundData[0];
      if (showFullDescription) {
        return (
          <div className="descriptionSection">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        );
      } else {
        const words = description.split(" ");
        const shortDescription = words.slice(0, 30).join(" ");
        return (
          <div className="descriptionSection">
            <h3>{title}</h3>
            <p>{shortDescription}...</p>
          </div>
        );
      }
    }
    return null; // No active section
  };

  const readButtonText = showFullDescription ? "See less" : "Keep reading";

  return (
    <div className="descriptionContainer">
      <div className="descriptionsSubtitle">
        <div className="descFlex" onClick={() => toggleSection("highlight")}>
          {highlight("#263238")}
          <p>Highlight</p>
        </div>
        <div className="descFlex" onClick={() => toggleSection("history")}>
          {history("#263238")}
          <p>History & Culture</p>
        </div>
        <div className="descFlex" onClick={() => toggleSection("places")}>
          {places("#263238")}
          <p>Places to Visit</p>
        </div>
        <div className="descFlex" onClick={() => toggleSection("emergency")}>
          {emergency("#263238")}
          <p>Emergency Services</p>
        </div>
        <div className="descFlex" onClick={() => toggleSection("food")}>
          {food("#263238")}
          <p>Food & Drinks</p>
        </div>
        <div
          className="descFlex"
          onClick={() => toggleSection("gettingAround")}
        >
          {gettingAround("#263238")}
          <p>Getting Around</p>
        </div>
      </div>
      <div className="descriptionContent">{renderDescription()}</div>
      <div className="descRead" onClick={toggleFullDescription}>
        {activeSection !== "places" && activeSection !== "emergency" && (
          <span>
            {readButtonText} {showFullDescription ? arrowUp() : arrowDown()}
          </span>
        )}
      </div>
      {activeSection === "highlight" ? (
        <div className="descValues-container">
          <div className="descValues">
            <div className="descValue-text">
              <p>Currency</p>
              <p>Naira</p>
            </div>
            {currencyIcon()}
          </div>
          <div className="descValues">
            <div className="descValue-text">
              <p>Capital City</p>
              <p>Abuja</p>
            </div>
            {capitalCityIcon()}
          </div>
          <div className="descValues">
            <div className="descValue-text">
              <p>Language</p>
              <p>English, Yoruba</p>
            </div>
            {languageIcon()}
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default DestinationDescriptions;
