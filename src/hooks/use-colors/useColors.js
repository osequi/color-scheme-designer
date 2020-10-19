import { contrast } from "chroma-js";

/**
 * The color contrast treshold value.
 * Above the text is legible, below is not.
 * @type {Number}
 */
const colorContrastTreshhold = 4.51;

/**
 * Generates a set of color pairs from a set of colors.
 * @param  {array} colors An array of colors.
 * @return {object}       Two arrays; one for legible, another for non legible color pairs.
 */
const generateColorPairs = (colors) => {
  let legible,
    notLegible = [];

  for (var i = 0; i < colors.length; i++) {
    const { name: nameI, value: valueI } = colors[i];

    for (var j = 1; j < colors.length; j++) {
      const { name: nameJ, value: valueJ } = colors[j];
      const colorContrast = contrast(valueI, valueJ);

      const pair1 = {
        name: `${nameI}-${nameJ}`,
        color: valueI,
        backgroundColor: valueJ,
        contrast: colorContrast,
      };

      const pair2 = {
        name: `${nameJ}-${nameI}`,
        color: valueJ,
        backgroundColor: valueI,
        contrast: colorContrast,
      };

      if (colorContrast <= colorContrastTreshhold) {
        notLegible.push(pair1);
        notLegible.push(pair2);
      } else {
        legible.push(pair1);
        notLegible.push(pair2);
      }
    }
  }

  return { legible: legible, notLegible: notLegible };
};

/**
 * The hook version of `generateColorPairs`
 */
const useColorPairs = (colors) => {
  return generateColorPairs(colors);
};

export { useColorPairs };
