import { useState } from "react";
import "./GuestReview.css";
import GuestReviewModal from "./GuestReviewModal";

const GuestReview = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSeeMoreReviews = () => {
    setShowModal(true);
  };
  
  return (
    <div className="guest-body">
      <h1>Guests Review</h1>
      <div className="guestContainer-sections">
        <div className="guest-review">
          <div className="guest-reviewLeft">
            <h3>9.5</h3>
            <div className="guest-reviewLeft2">
              <p>Very good</p>
              <p>
                <span className="guest-bold">20 views</span> | 500 people liked
                this property
              </p>
            </div>
          </div>

          <div className="guest-reviewRight">
            <p>Dated 10th July, 2023</p>
            <p>"Great and lovely place"</p>
            <p>Verified by Hotels.com gueset review</p>
            <p>Ahmed, from Nigeria</p>
          </div>
        </div>

        <div className="guest-reviewBars">
          <div className="guest-reviewBarLeft">
            <div className="guest-reviewSingle">
              <div className="guest-reviewBar-title">
                <p>Staff and Services</p>
                <p>9.5</p>
              </div>
              <div className="guest-bar"></div>
            </div>
            <div className="guest-reviewSingle">
              <div className="guest-reviewBar-title">
                <p>Comfort</p>
                <p>9.5</p>
              </div>
              <div className="guest-bar"></div>
            </div>
            <div className="guest-reviewSingle">
              <div className="guest-reviewBar-title">
                <p>Cleanliness and Hygiene</p>
                <p>9.5</p>
              </div>
              <div className="guest-bar"></div>
            </div>
            <div className="guest-reviewSingle">
              <div className="guest-reviewBar-title">
                <p>Location</p>
                <p>9.5</p>
              </div>
              <div className="guest-bar"></div>
            </div>
          </div>

          <div className="guest-reviewBarRight">
            <div className="guest-reviewSingle">
              <div className="guest-reviewBar-title">
                <p>Facilities</p>
                <p>9.5</p>
              </div>
              <div className="guest-bar"></div>
            </div>
            <div className="guest-reviewSingle">
              <div className="guest-reviewBar-title">
                <p>Room amenities</p>
                <p>9.5</p>
              </div>
              <div className="guest-bar"></div>
            </div>
            <div className="guest-reviewSingle">
              <div className="guest-reviewBar-title">
                <p>Facilities & building condition</p>
                <p>9.5</p>
              </div>
              <div className="guest-bar"></div>
            </div>
          </div>
        </div>

        <button className="guest-reviewBtn" onClick={handleSeeMoreReviews}>See more reviews</button>
        {showModal && <GuestReviewModal closeModal={() => setShowModal(false)} />}
      </div>
    </div>
  );
};

export default GuestReview;
