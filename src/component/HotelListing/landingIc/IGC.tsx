import "./igc.css";
import house from "../../../assets/pics/Buying a house.png";

const IGC = () => {
  return (
    <div className="igc">
      <div className="igcBody">
        <section>
          Enlist your property and we get you clients. It’s that easy!
        </section>
        <img src={house} alt="" />
      </div>
    </div>
  );
};

export default IGC;
