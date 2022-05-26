import { StarRating } from "./StarRating";
import { FaTrash } from "react-icons/fa";
import { useColors } from "./ColorProvider";

type Props = {
  id: string;
  title: string;
  color: string;
  rating: number;
};

export const Color: React.FC<Props> = ({ id, title, color, rating }) => {
  const { rateColor, removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button
        onClick={() => {
          removeColor(id);
        }}
      >
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rate: number) => rateColor(id, rate)}
      />
    </section>
  );
};
