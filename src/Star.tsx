import { FaStar } from "react-icons/fa";

type Props = {
  selected: boolean;
  onSelect: () => void;
};
export const Star: React.FC<Props> = ({ selected = false, onSelect }) => {
  return (
    <FaStar
      color={selected === true ? "red" : "gray"}
      onClick={() => onSelect()}
    />
  );
};
