import chroma from "chroma-js";
import { useColorValue, useColorContrast } from ".";

const getAaaContrast = (color1, color2) => {
  const luminance = useColorValue(color1.luminance(), 2);
  const lightness = useColorValue(color1.get("hsl.l") * 100, 2);
  const [contrast] = useColorContrast(color1, color2);

  // Reduce or increase luminance?
  const darken = lightness < 50;

  // By which amount ?
  const amount = 7 - contrast;

  const newColor = color1.luminance(luminance - 0.1);
  return newColor;
};

const useColorTune = (color1, color2) => {
  return getAaaContrast(color1, color2);
};

export { getAaaContrast, useColorTune };
