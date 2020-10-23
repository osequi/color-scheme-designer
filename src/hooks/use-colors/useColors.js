import { startCase } from "lodash";
import { hex, score } from "wcag-contrast";

/**
 * Generates a set of color pairs from a set of colors.
 * @param  {array} colors An array of colors.
 * @return {object}       Two arrays; one for legible, another for non legible color pairs.
 */
const generateColorPairs = (colors) => {
  let legible = [];
  let notLegible = [];

  for (var i = 0; i < colors.length; i++) {
    const { name: nameI, value: valueI } = colors[i];

    for (var j = 1; j < colors.length; j++) {
      const { name: nameJ, value: valueJ } = colors[j];

      if (valueI === valueJ) break;

      const colorContrast = score(hex(valueI, valueJ));
      const scale = colorContrast.includes("Large") ? 1 : 0;

      const pair1 = {
        name: `${startCase(nameI)} on ${startCase(nameJ)}`,
        color: valueI,
        backgroundColor: valueJ,
        contrast: colorContrast,
        scale: scale,
      };

      const pair2 = {
        name: `${startCase(nameJ)} on ${startCase(nameI)}`,
        color: valueJ,
        backgroundColor: valueI,
        contrast: colorContrast,
        scale: scale,
      };

      if (colorContrast === "Fail") {
        notLegible.push([pair1, pair2]);
      } else {
        legible.push([pair1, pair2]);
      }
    }
  }

  return {
    legible: [].concat(...legible),
    notLegible: [].concat(...notLegible), // .flat() is not supported in Next.js ....
  };
};

/**
 * The hook version of `generateColorPairs`
 */
const useColorPairs = (colors) => {
  return generateColorPairs(colors);
};

export { useColorPairs };
