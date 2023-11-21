import "./GuestReviewModal.css";

const GuestReviewModal = ({ closeModal }: { closeModal: () => void }) => {
  const ratings = [
    { category: "Staff and Services", rating: 10 },
    { category: "Comfort", rating: 8 },
    { category: "Cleanliness and Hygiene", rating: 7 },
    { category: "Location", rating: 9 },
    { category: "Facilities", rating: 8.5 },
    { category: "Room amenities", rating: 10 },
    { category: "Facilities & building condition", rating: 5 },
  ];

  const maxRating = 10;

  return (
    <div className="guest-modal-container">
      <div className="guest-modal-content">
        <button onClick={closeModal} className="modal-closeBtn">x</button>
        <div className="modalCard-leftSide">
          <h1>Guests Review</h1>
          <div className="modal-subtitles">
            <p>2 reviews</p>
            <p>
              Very good <span>9.4</span>
            </p>
          </div>

          {ratings.map((item, index) => (
            <div className="modal-reviewSingle" key={index}>
              <div className="modal-reviewBar-title">
                <p>{item.category}</p>
                <p>{item.rating}</p>
              </div>
              <div className="modal-bar">
                <div
                  className="modal-bar-fill"
                  style={{ width: `${(item.rating / maxRating) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="modal-rightSide-flex">
          <div className="modal-rightSide">
            <p>
              Very good <span>9.4/10</span>
            </p>
            <div>
              <p className="modal-rightSide-subtitle">
                Jibril Adda <br /> October 2022
              </p>
              <div>
                <p>
                  The property is new and clean. The staff in the front desk are
                  really professional and well trained. The location is great as
                  well. I’d rate it a strong 7 out of 10. Amenities like seating
                  area, pool and outdoor are yet to be completed though.
                </p>
                <div className="modal-verifyText">
                  <small className="modal-smallText-bold">From America</small>
                  <small className="modal-smallText-blue">Verified by Hotels.com guests review</small>
                </div>
              </div>
            </div>
          </div>
          <hr className="modal-space"/>
          <div className="modal-rightSide">
            <p>
              Very good <span>9.4/10</span>
            </p>
            <div>
              <p className="modal-rightSide-subtitle">
                Jibril Adda <br /> October 2022
              </p>
              <div>
                <p>
                  The property is new and clean. The staff in the front desk are
                  really professional and well trained. The location is great as
                  well. I’d rate it a strong 7 out of 10. Amenities like seating
                  area, pool and outdoor are yet to be completed though.
                </p>
                <div className="modal-verifyText">
                  <small className="modal-smallText-bold">From America</small>
                  <small className="modal-smallText-blue">Verified by Hotels.com guests review</small>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default GuestReviewModal;
