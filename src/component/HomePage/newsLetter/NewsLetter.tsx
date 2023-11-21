import "./newsLetter.css";

const MailList = () => {
  return (
    <div className="deals_main">
      <div className="mailBody">
        <div className="mail">
          <div className="mailLeft">
            <h1 className="mailTitle">Stay updated always!</h1>
            <span className="mailDesc">
              Please spice up my inbox with special offers, new trips, travel
              tales and <br />
              lots more!
            </span>
          </div>
          <div className="mailInputContainer">
            <input type="text" placeholder="Enter your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailList;
