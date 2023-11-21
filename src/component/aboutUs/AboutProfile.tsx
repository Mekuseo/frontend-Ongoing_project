import { useState, useRef } from "react";
import "./AboutProfile.css";
import aboutProfileData from "./AboutUsProfileData";
import { arrowRightIcon } from "./AboutUsProfileData";
import ProfileModal from "./ProfileModal";

const AboutProfile = () => {
  const [clickedMenu, setClickedMenu] = useState("our-people");
  const [open, setOpen] = useState<boolean>(false);
  const [, setSelectedProfile] = useState<null | any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const aboutUsRef = useRef(null);

  const handleMenu = (menuId: any) => {
    setClickedMenu(menuId);
    const section = document.getElementById(menuId + "-section");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleProfileClick = (profile: any, index: number) => {
    setSelectedProfile(profile);
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleNextProfile = () => {
    const nextIndex = (currentIndex + 1) % aboutProfileData.length;
    setSelectedProfile(aboutProfileData[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePreviousProfile = () => {
    const previousIndex =
      (currentIndex - 1 + aboutProfileData.length) % aboutProfileData.length;
    setSelectedProfile(aboutProfileData[previousIndex]);
    setCurrentIndex(previousIndex);
  };

  return (
    <div className="aboutUs-container" ref={aboutUsRef}>
      <ul className="aboutUs-menu">
        <li
          id="our-people"
          onClick={() => handleMenu("our-people")}
          style={{ fontWeight: clickedMenu === "our-people" ? 700 : 500 }}
        >
          Our People
        </li>
        <li
          id="story"
          onClick={() => handleMenu("story")}
          style={{ fontWeight: clickedMenu === "story" ? 700 : 500 }}
        >
          Story
        </li>
        <li
          id="core-values"
          onClick={() => handleMenu("core-values")}
          style={{ fontWeight: clickedMenu === "core-values" ? 700 : 500 }}
        >
          Core Values
        </li>
        <li
          id="vision"
          onClick={() => handleMenu("vision")}
          style={{ fontWeight: clickedMenu === "vision" ? 700 : 500 }}
        >
          Vision and Mission
        </li>
      </ul>
      <h2>
        At the heart of our company are passionate individuals driven by a
        shared <br />
        vision. Get to know the team behind our mission
      </h2>
      <div className="aboutUs-profileContainer">
        {aboutProfileData.map((profile, index) => {
          return (
            <div key={index}>
              <div className="aboutUs-profile">
                <div className="aboutUs-profile-image">
                  <img src={profile.image} alt={profile.name} />
                </div>
                <div className="aboutUs-profile-info">
                  <div>
                    <h3 className="aboutUs-profile-name">{profile.name}</h3>
                  </div>
                  <div>
                    <h4 className="aboutUs-profile-position">
                      {profile.position}
                    </h4>
                  </div>
                </div>
                <div
                  className="expandProfile-btn"
                  onClick={() => handleProfileClick(profile, index)}
                >
                  {arrowRightIcon()}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="aboutUs-hr"></div>

      <div className="aboutUs-info">
        <h3 id="story-section" className="aboutUs-infoTitle">
          Story
        </h3>
        <p className="aboutUs-desc">
          "Our story is defined by passion, hard work, and unwavering
          dedication. We're committed to ensuring safe and enjoyable travels
          with our trusted guides. But what truly sets us apart is our
          exceptional team – we're not just colleagues; we're a tightly-knit
          family, and our remarkable bond ignites our passion for what we do.
          Join us as we share unforgettable moments in this beautiful place."
        </p>
        <h3 id="core-values-section" className="aboutUs-infoTitle">
          Core Values
        </h3>
        <p className="aboutUs-desc">
          "Diversity, Growth, Inclusivity, Teamwork, Customer Value, Empathy,
          Excellence, Discipline.."
        </p>
        <h3 id="vision-section" className="aboutUs-infoTitle">
          Vision and Mission
        </h3>
        <p className="aboutUs-desc">
          "Our vision is to provide you with the benefits of travel throughout
          your journey. Ensuring your satisfaction and happiness is not just a
          priority but also a genuine commitment to you." "Our mission is to
          create unforgettable journeys because we believe each adventure is a
          unique experience."
        </p>
      </div>

      <ProfileModal
        open={open}
        setOpen={setOpen}
        profiles={aboutProfileData}
        currentIndex={currentIndex}
        onNext={handleNextProfile}
        onPrevious={handlePreviousProfile}
      />
    </div>
  );
};

export default AboutProfile;
