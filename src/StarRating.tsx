import React from "react";
import { Star } from "./Star";

type Props = {
  totalStars?: number;
  selectedStars: number;
  style?: { [key: string]: string | number };
  onRate: (rating: number) => void;
};

const StarRating: React.FC<Props> = ({
  totalStars = 5,
  selectedStars = 0,
  style,
  onRate,
}) => {
  return (
    <div style={{ padding: "5px", ...style }}>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={i < selectedStars}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

export { StarRating };
