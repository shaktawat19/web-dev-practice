import { useState } from "react";

export default function StarRatingComponent({ starCount = 5 }) {
  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  // Helper function to determine the className for stars
  const getStarClass = (idx) => {
    return idx < (hoverValue || starValue) ? "gold" : "";
  };

  return (
    <div>
      {Array.from({ length: starCount }, (_, idx) => (
        <span
          key={idx}
          className={getStarClass(idx)}
          onClick={() => setStarValue(idx + 1)}
          onMouseEnter={() => setHoverValue(idx + 1)}
          onMouseLeave={() => setHoverValue(0)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}
