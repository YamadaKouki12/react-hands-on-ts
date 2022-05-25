import { Color } from "./Color";
import { TypeOfColor } from "./TypeOfColor";

type Props = {
  colors: TypeOfColor[];
  onRemove: (id: string) => void;
  onRate: (id: string, rate: number) => void;
};
export const ColorList: React.FC<Props> = ({ colors, onRemove, onRate }) => {
  if (colors.length === 0) return <p>No Colors</p>;
  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...{ ...color, onRemove, onRate }} />
      ))}
    </div>
  );
};
