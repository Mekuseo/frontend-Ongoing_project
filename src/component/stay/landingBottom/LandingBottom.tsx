import "./landingBottom.css";
import money from "../../../assets/money.png";
import gud from "../../../assets/gud.png";
import group from "../../../assets/group.png";

const LandingBottom = () => {
  return (
    <div className="backgroundD">
      <div className="bodyD">
        <div>
          <img src={money} alt="" />
          <section className="secTOP">Make more sales</section>
          <section className="secDn">
            Norem ipsum dolor sit amet, consectetur adipiscing elit.
          </section>
        </div>
        <div>
          <img src={gud} alt="" />
          <section className="secTOP">Attract your ideal guests</section>
          <section className="secDn">
            Norem ipsum dolor sit amet, consectetur adipiscing elit.
          </section>
        </div>
        <div>
          <img src={group} alt="" />
          <section className="secTOP">
            Open your business to bigger opportunities
          </section>
          <section className="secDn">
            Norem ipsum dolor sit amet, consectetur adipiscing elit.
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingBottom;
