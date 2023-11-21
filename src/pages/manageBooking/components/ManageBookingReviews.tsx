import Slider from "@mui/material/Slider";
import Navbar from "../../../component/HomePage/header/header";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Textarea from "@mui/joy/Textarea";

const CustomSlider = styled(Slider)(() => ({
  color: "#14BA6D",
  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      boxShadow: "none",
    },
  },
  "& .MuiSlider-track": {
    borderRadius: "4px",
  },
}));

const reviewOptions = [
  "Staff and services",
  "Comfort",
  "Cleanliness and hygiene",
  "Location",
  "Facilities",
  "Room Amenities",
  "Facilities & building condition",
];

const ManageBookingReviews = () => {
  const [sliderValues, setSliderValues] = useState<number[]>(
    Array(reviewOptions.length).fill(5)
  );
  const [averageRating, setAverageRating] = useState(7); // Initial average rating

  const handleSliderChange = (index: number, value: number) => {
    const updatedSliderValues = [...sliderValues];
    updatedSliderValues[index] = value;
    setSliderValues(updatedSliderValues);
  };

  useEffect(() => {
    // Calculate the average rating whenever the sliderValues change
    const totalRating = sliderValues.reduce((acc, value) => acc + value, 0);
    const average = totalRating / sliderValues.length;
    setAverageRating(average);
  }, [sliderValues]);

  return (
    <div>
      <div style={{ marginTop: "70px" }}>
        <Navbar />
      </div>
      <div className="reviewsTitle">Reviews</div>
      <div className="reviewbox-container">
        <div>Write a Review</div>
        <div>You are rating Transcorp Hilton Hotel, Abuja</div>
        <div className="MB-grid-container">
          {reviewOptions.map((review, index) => {
            return (
              <div className="reviewbox" key={index}>
                <div className="MB-reviews-flex">
                  <div>{review}</div>
                  <div>{sliderValues[index]}</div>
                </div>
                <div>
                  <CustomSlider
                    aria-label="Temperature"
                    value={sliderValues[index]}
                    onChange={(_event, value) =>
                      handleSliderChange(index, value as number)
                    }
                    valueLabelDisplay="auto"
                    step={0.5}
                    marks
                    min={1}
                    max={10}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            fontFamily: "raleway",
            fontSize: "20px",
            textAlign: "center",
            marginTop: "25px",
          }}
        >
          Your average rating for this property is{" "}
          <span
            style={{
              fontFamily: "raleway",
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            {averageRating.toFixed(1)}/10
          </span>{" "}
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <div className="reviews-inputBox">
            <Textarea
              minRows={4}
              placeholder="Share details of your experience at this property."
            />
          </div>
        </div>
        <div className="postReview">
          <button type="submit">POST</button>
        </div>
      </div>
    </div>
  );
};

export default ManageBookingReviews;
