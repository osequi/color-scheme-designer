import chroma from "chroma-js";
import { colorValueToDecimal } from ".";

const recommendables = ["white", "black"];

/**
 * Calculates the contrast of two colors.
 * @param  {object} color1 The first color.
 * @param  {object} color2 The second color.
 * @return {array}         [The contrast ratio, AA compliant?, AAA compliant?]
 */
const calculateContrast = (color1, color2) => {
  const contrast = chroma.contrast(color1, color2);
  const aaa = contrast > 7;
  const aa = contrast > 4.1;

  return [contrast, aaa, aa];
};

/**
 * Recommend a best contrasting color for an existing color.
 * The recommended color will be chosesn from an array of recommendables, aka. color names.
 * @param  {object} color The original color.
 * @return {object}       {The recommended color, the contrast, AA compliant?, AAA compliant?}
 */
const recommendTextColor = (color) => {
  let recommendable = color.luminance() < 0.5 ? 0 : 1;
  let recommended = chroma(recommendable);
  let [contrast, aa, aaa] = calculateContrast(color, recommended);

  if (contrast < 4.5) {
    recommendable = recommendable === 0 ? 1 : 0;
    recommended = chroma(recommendable);
    [contrast, aa, aaa] = calculateContrast(color, recommended);
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
