import chroma from "chroma-js";

const createColorByName = (name) => {
  if (!name) return null;

  return chroma.valid(name)
    ? chroma(name)
    : "Invalid color. Please check https://gka.github.io/chroma.js/#chroma for the syntax.";
};

const useColorByName = (name) => {
  return createColorByName(name);
};

export { useColorByName, createColorByName };
