import { createContext, useContext, useState, ReactNode } from "react";
import { v4 } from "uuid";
import colorData from "./color-data.json";
import { TypeOfColor } from "./TypeOfColor";

type Props = {
  children?: ReactNode;
};

type ContextType = {
  colors: TypeOfColor[];
  addColor: (title: string, color: string) => void;
  rateColor: (id: string, rating: number) => void;
  removeColor: (id: string) => void;
};

const ColorContext = createContext<ContextType | undefined>(undefined);

export const useColors = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("error");
  }
  return context;
};

export const ColorProvider: React.FC<Props> = ({ children }) => {
  const [colors, setColors] = useState(colorData);
  const addColor = (title: string, color: string) => {
    setColors([...colors, { id: v4(), title: title, color: color, rating: 0 }]);
  };
  const rateColor = (id: string, rating: number) => {
    setColors(
      colors.map((color) => {
        return color.id === id ? { ...color, rating } : color;
      })
    );
  };
  const removeColor = (id: string) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
};
