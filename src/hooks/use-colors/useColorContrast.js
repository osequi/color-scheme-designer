import chroma from "chroma-js";

/**
 * Calculates the contrast of two colors.
 * @param  {object} color1 The first color.
 * @param  {object} color2 The second color.
 * @return {array}         [The contrast ratio, AA compliant?, AAA compliant?]
 */
const calculateContrast = (color1, color2) => {
  const contrast = chroma.contrast(color1, color2);
  const aa = contrast > 4.1;
  const aaa = contrast > 7;

  return [contrast, aaa, aa];
};

const useColorContrast = (color1, color2) => {
  return calculateContrast(color1, color2);
};

export { calculateContrast, useColorContrast };
