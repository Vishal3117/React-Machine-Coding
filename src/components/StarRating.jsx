import React, { useState } from "react";

const StarRating = ({ starCount = 5 }) => {
  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div className="star-container">
      {new Array(starCount).fill(0).map((value, index) => (
        <span
          className={`${
            hoverValue == 0 && index < starValue ? "starSpan" : ""
          } ${index < hoverValue ? "starSpan" : ""}`}
          key={index}
          onClick={() => setStarValue(index + 1)}
          onMouseEnter={() => setHoverValue(index + 1)}
          onMouseLeave={() => setHoverValue(0)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
