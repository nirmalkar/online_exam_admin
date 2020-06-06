import { useState } from "react";

export const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (val) => {
    setValue(val);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
