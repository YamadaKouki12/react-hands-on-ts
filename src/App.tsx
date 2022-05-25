import { useState } from "react";
import colorData from "./color-data.json";
import { ColorList } from "./ColorList";
import { AddColorForm } from "./AddColorForm";
import { v4 } from "uuid";

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
  const onNewColor = (title: string, color: string) => {
    const newColors = [...colors, { id: v4(), rating: 0, title, color }];
    setColors(newColors);
  };

  return (
    <>
      <AddColorForm {...{ onNewColor }} />
      <ColorList {...{ colors, onRemove, onRate }} />
    </>
  );
};

export default App;
