import chroma from "chroma-js";

const recommendTextColor = (color) => {
  return color.luminance() < 0.5 ? chroma("white") : chroma("black");
};

const useTextColor = (color) => {
  return recommendTextColor(color);
};

export { useTextColor, recommendTextColor };
