import Character from "../../../../assets/pics/character.png";
import { AiOutlineClose } from "react-icons/ai";
import "./Congratulations.css";

const Congratulation = () => {
  return (
    <div className="congrats-overlay">
      <div className="congrats-modal">
        <a href="./login" className="close-btn">
          <AiOutlineClose />
        </a>
        <h3 className="congrats-title">Congratulations</h3>
        <img src={Character} alt="character" />
        <p>Your password has been reset. Kindly go back to log in.</p>
        <button className="congrats-btn">
          <a href="./login">Continue</a>
        </button>
      </div>
    </div>
  );
};

export default Congratulation;
