import chroma from "chroma-js";
import { useColorValue, useColorContrast } from ".";

const tuneColor = (color1, color2, luminance, modifier, index) => {
  const newColor = color1.luminance(luminance + 0.01 * modifier * index);
  const [contrast] = useColorContrast(newColor, color2);

  if (contrast >= 7) {
    return newColor;
  } else {
    return tuneColor(color1, color2, luminance, modifier, index + 1);
  }
};

const getAaaContrast = (color1, color2) => {
  const luminance = useColorValue(color1.luminance(), 2);
  const lightness = useColorValue(color1.get("hsl.l") * 100, 2);

  // Reduce or increase luminance?
  const modifier = lightness < 50 ? -1 : 1;

  return tuneColor(color1, color2, luminance, modifier, 1);
};

const useColorTune = (color1, color2) => {
  return getAaaContrast(color1, color2);
};

export { getAaaContrast, useColorTune };
