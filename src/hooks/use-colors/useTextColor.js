import chroma from "chroma-js";

const recommendables = ["white", "black"];

const calculateContrast = (color, index) => {
  const color2 = chroma(recommendables[index]);
  const contrast = chroma.contrast(color, color2);
  const aaa = contrast > 7;
  const aa = contrast > 4.1;

  return [color2, contrast, aaa, aa];
};

const recommendTextColor = (color) => {
  let recommendable = color.luminance() < 0.5 ? 0 : 1;
  let [recommended, contrast, aaa, aa] = calculateContrast(
    color,
    recommendable
  );

  if (contrast < 4.5) {
    recommendable = recommendable === 0 ? 1 : 0;
    [recommended, contrast, aaa, aa] = calculateContrast(color, recommendable);
  }

  return {
    recommended: recommended,
    contrast: Number(contrast.toFixed(2)),
    aaa: aaa,
    aa: aa,
  };
};

const useTextColor = (color) => {
  return recommendTextColor(color);
};

export { useTextColor, recommendTextColor };
