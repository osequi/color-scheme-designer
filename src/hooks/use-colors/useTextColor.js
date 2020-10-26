import chroma from "chroma-js";
import { colorValueToDecimal, calculateContrast } from ".";

const recommendables = ["white", "black"];

/**
 * Recommend a best contrasting color for an existing color.
 * The recommended color will be chosesn from an array of recommendables, aka. color names.
 * @param  {object} color The original color.
 * @return {object}       {The recommended color, the contrast, AA compliant?, AAA compliant?}
 */
const recommendTextColor = (color) => {
  let recommendable = color.luminance() < 0.5 ? 0 : 1;
  let recommended = chroma(recommendable);
  let [contrast, aaa, aa] = calculateContrast(color, recommended);

  if (contrast < 4.5) {
    recommendable = recommendable === 0 ? 1 : 0;
    recommended = chroma(recommendable);
    [contrast, aaa, aa] = calculateContrast(color, recommended);
  }

  return {
    recommended: recommended,
    contrast: colorValueToDecimal(contrast, 2),
    aaa: aaa,
    aa: aa,
  };
};

const useTextColor = (color) => {
  return recommendTextColor(color);
};

export { useTextColor, recommendTextColor };
