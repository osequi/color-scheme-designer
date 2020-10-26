import chroma from "chroma-js";
import { calculateContrast } from ".";

/**
 * The two ends of the color spectrum.
 * They give the highest contrast possible for a color.
 * If the contrast is not enough the color has to be changed.
 * @type {Array}
 */
const colorSpectrumEndpoints = ["white", "black"];

/**
 * Calculates the maximum contrast a color can have.
 * @param  {object} color The color.
 * @return {array}        [The highest contrast color, the contrast, AA compliant?, AAA compliant?]
 */
const maximumContrastPossible = (color) => {
  const white = chroma("white");
  const [contrastToWhite, aaWhite, aaaWhite] = calculateContrast(color, white);

  const black = chroma("black");
  const [contrastToBlack, aaBlack, aaaBlack] = calculateContrast(color, black);

  return contrastToWhite < contrastToBlack
    ? [black, contrastToBlack, aaBlack, aaaBlack]
    : [white, contrastToWhite, aaWhite, aaaWhite];
};

const useMaximumContrast = (color) => {
  return maximumContrastPossible(color);
};

export { useMaximumContrast, maximumContrastPossible };
