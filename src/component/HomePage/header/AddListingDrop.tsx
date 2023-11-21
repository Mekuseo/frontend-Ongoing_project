import PropertyIcon from "../../../svgs/PropertyIcon";
import RightArrowIcon from "../../../svgs/RightArrowIcon";
import addListing1 from "../../../assets/pics/addlisting1.jpeg";
import addListing2 from "../../../assets/pics/addlisting2.jpeg";
import addListing3 from "../../../assets/pics/addlisting3.jpeg";
import "./AddListing.css";

const AddListingDrop = () => {
  
  const handleHover = (event: React.MouseEvent) => {
    const imgDescription = event.currentTarget.querySelector(".imgDescription");
    if (imgDescription) {
      imgDescription.classList.add("hovered");
    }
  };
  
  const handleMouseLeave = (event: React.MouseEvent) => {
    const imgDescription = event.currentTarget.querySelector(".imgDescription");
    if (imgDescription) {
      imgDescription.classList.remove("hovered");
    }
  };

  return (
    <div className="dropContainer">
      <hr />
      <div className="dropFlex">
        <div
          className="addListingImgSection"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <img src={addListing1} alt="addlisting" />
          <div className="imgDescription">
            <PropertyIcon />
            <p>List my Property</p>
            <div className="arrowIcon">
              <RightArrowIcon />
            </div>          </div>
        </div>
        <div
          className="addListingImgSection"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <img src={addListing1} alt="addlisting" />
          <div className="imgDescription">
            <PropertyIcon />
            <p>List my Property</p>
            <div className="arrowIcon">
              <RightArrowIcon />
            </div>          </div>
        </div>
        <div
          className="addListingImgSection"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <img src={addListing2} alt="addlisting" />
          <div className="imgDescription">
            <PropertyIcon />
            <p>List my Property</p>
            <div className="arrowIcon">
              <RightArrowIcon />
            </div>          </div>
        </div>
        <div
          className="addListingImgSection"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <img src={addListing3} alt="addlisting" />
          <div className="imgDescription">
            <PropertyIcon />
            <p>List my Property</p>
            <div className="arrowIcon">
              <RightArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddListingDrop;
