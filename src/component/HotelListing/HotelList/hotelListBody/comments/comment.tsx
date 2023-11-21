import React, { useState } from 'react';
import './Comment.css';

const texts = [
    '“This property is awesome” - Ahmed Modee', 
    '“This property is beautiful - Adetorera Marcus', 
    '“Amazing staff” - Gbenga Daniel', 
    '“Friendly staff” - Ahmed Modee'
];

const Comment: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseEnter = () => {
    setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div
      className="commentSlideshow"
      onMouseEnter={handleMouseEnter}
    >
      <div className="commentHL active">
        {texts[currentIndex]}
      </div>
    </div>
  );
};

export default Comment;
