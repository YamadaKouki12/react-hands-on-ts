import { useColors } from "./ColorProvider";
import { Color } from "./Color";

export const ColorList = () => {
  const { colors } = useColors();
  if (colors.length === 0) return <p>No Colors</p>;
  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...{ ...color }} />
      ))}
    </div>
  );
};
