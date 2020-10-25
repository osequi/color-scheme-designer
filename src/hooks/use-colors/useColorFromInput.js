import chroma from "chroma-js";

const createColorFromInput = (input, space) => {
  if (!input || !space) return null;

  return "Invalid input. Please check https://gka.github.io/chroma.js/#chroma for the syntax.";
};

const useColorFromInput = (input, space) => {
  return createColorFromInput(input, space);
};

export { useColorFromInput, createColorFromInput };
