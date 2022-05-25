import React, { useState } from "react";

export const useInput = (
  initialInput: string
  // 返り値の型を指定しないとバグる
): [
  {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  },
  () => void
] => {
  const [value, setValue] = useState(initialInput);
  return [
    {
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value),
    },
    () => setValue(initialInput),
  ];
};
