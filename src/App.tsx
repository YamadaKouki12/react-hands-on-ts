import { useState } from "react";
import colorData from "./color-data.json";
import { ColorList } from "./ColorList";

const App = () => {
  const [colors, setColors] = useState(colorData);
  const onRemove = (id: string) => {
    const newColors = colors.filter((color) => {
      return color.id !== id;
    });
    setColors(newColors);
  };
  const onRate = (id: string, rating: number) => {
    const newColors = colors.map((color) => {
      return color.id === id ? { ...color, rating } : color;
    });
    setColors(newColors);
  };
  return (
    <>
      <ColorList {...{ colors, onRemove, onRate }} />
    </>
  );
};

export default App;
