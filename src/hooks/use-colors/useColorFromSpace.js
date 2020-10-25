import chroma from "chroma-js";

/**
 * Creates color form an input and a space
 * @param  {string} input The color definition.
 * @param  {string} space The color space.
 * @return {object}       A chroma.js compatible color, or an error message.
 * @example input: 255, 255, 255 space: rgb => chroma('white')
 */
const createColorFromSpace = (input, space) => {
  if (!input || !space) return null;

  const err =
    "Invalid input. Please check https://gka.github.io/chroma.js/#chroma for the syntax.";

  const removedWhiteSpace = input.split(" ").join("");
  const parts = removedWhiteSpace.split(",");
  if (parts.length !== 3) return err;

  const c = chroma(parts[0], parts[1], parts[2], space);
  console.log("c:", c);

  return c;
};

const useColorFromSpace = (input, space) => {
  return createColorFromSpace(input, space);
};

export { useColorFromSpace, createColorFromSpace };
