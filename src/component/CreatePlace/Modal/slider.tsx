import { useState } from 'react';
import './modal.css';

const PlaceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardData = [
    [
      { image: 'image1.jpg', text: 'Card 1 Text' },
      { image: 'image2.jpg', text: 'Card 2 Text' },
      { image: 'image3.jpg', text: 'Card 3 Text' },
      { image: 'image4.jpg', text: 'Card 4 Text' },
      { image: 'image4.jpg', text: 'Card 4 Text' },
    ],
    [
      { image: 'image5.jpg', text: 'Card 5 Text' },
      { image: 'image6.jpg', text: 'Card 6 Text' },
      { image: 'image7.jpg', text: 'Card 7 Text' },
      { image: 'image8.jpg', text: 'Card 8 Text' },
      { image: 'image4.jpg', text: 'Card 4 Text' },
    ],
    [
      { image: 'image9.jpg', text: 'Card 9 Text' },
      { image: 'image10.jpg', text: 'Card 10 Text' },
      { image: 'image11.jpg', text: 'Card 11 Text' },
      { image: 'image12.jpg', text: 'Card 12 Text' },
      { image: 'image4.jpg', text: 'Card 4 Text' },
    ],
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  return (
    <div className="placeSlideshow">
      <div className="placeslide">
        {cardData[currentSlide].map((card, index) => (
            <div className="placeCol" key={index}>
                <div className="placeCard">
                    <img src={card.image} />
                    <p>{card.text}</p>
                </div>
            </div>
        ))}
      </div>

      <div className="navigation">
        <button onClick={prevSlide} disabled={currentSlide === 0} className='prev'>
          Previous
        </button>
        <button onClick={nextSlide} disabled={currentSlide === 2} className="next">
          Next
        </button>
      </div>
    </div>
  );
};

export default PlaceSlider;