import { Carousel } from "react-responsive-carousel";
import "./carousel.css";
import hotel1 from "../../../../assets/pics/ice-351381-93021446-767883.jpg";
import hotel2 from "../../../../assets/pics/8bebc3fc-jpg.jpg.webp";
import hotel3 from "../../../../assets/pics/Bellagio-Hotel-Casino-Las-Vegas.jpg.webp";
import sprite from "../../../../sprite.svg";
import "./imageSlide.css"

const slideImages = [
    {
        url: hotel1,
        caption: 'Slide 1'
    },
    {
        url: hotel2,
        caption: 'Slide 2'
    },
    {
        url: hotel3,
        caption: 'Slide 3'
    },
];


const imagesSlide = () => {
    return(
        <div className="box">
            <Carousel
                showIndicators
                renderArrowNext={(clickHandler, hasNext) => {
                return (
                    hasNext && (
                    <button className="nav_btn nav_btn_right" onClick={clickHandler}>
                        <svg>
                            <use xlinkHref={sprite + "#right"}></use>
                        </svg>
                    </button>
                    )
                );
                }}
                renderArrowPrev={(clickHandler, hasNext) => {
                return (
                    hasNext && (
                    <button onClick={clickHandler} className="nav_btn nav_btn_left">
                        <svg>
                        <use xlinkHref={sprite + "#left"}></use>
                        </svg>
                    </button>
                    )
                );
                }}
                renderIndicator={(clickHandler, isSelected, index) => {
                    return (
                      <li
                        onClick={clickHandler}
                        className={`ind ${isSelected ? "active" : ""}`}
                        key={index}
                        role="button"
                      />
                    );
                  }}
                  statusFormatter={(currentItem, total) => {
                    return `<div className="iconLike">
                              <Box
                                sx={{
                                  '& > legend': { mt: 1 },
                                }}
                              >
                                <StyledRating
                                  name="customized-color"
                                  defaultValue={1}
                                  max={1}
                                  icon={<FavoriteIcon fontSize="inherit" />}
                                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                />
                              </Box>
                            </div>
                            Current Item: ${currentItem} / Total: ${total}`;
                  }}
                  transitionTime={310}
                  swipeable={false}
            >
                {slideImages.map((URL, index) => (
                    <div className="slide">
                        <img alt=" " src={URL.url} key={index} className="slideImg"/>
                        
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default imagesSlide;