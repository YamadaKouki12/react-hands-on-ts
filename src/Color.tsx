import { StarRating } from "./StarRating";
import { FaTrash } from "react-icons/fa";

type Props = {
  id: string;
  title: string;
  color: string;
  rating: number;
  onRemove: (id: string) => void;
  onRate: (id: string, rate: number) => void;
};

export const Color: React.FC<Props> = ({
  id,
  title,
  color,
  rating,
  onRemove,
  onRate,
}) => {
  return (
    <section>
      <h1>{title}</h1>
      <button
        onClick={() => {
          onRemove(id);
        }}
      >
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rate: number) => onRate(id, rate)}
      />
    </section>
  );
};
