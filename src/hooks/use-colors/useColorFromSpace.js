import chroma from "chroma-js";
import { lowerCase } from "lodash";

const colorSpaces = [
  {
    name: "Color name",
    description: "Named colors from the W3CX11 specification.",
    example: "red",
    spaceName: null,
  },
  {
    name: "Hexadecimal string",
    description: "The standard CSS color notation.",
    example: "#ff0000",
    spaceName: null,
  },
  {
    name: "Number",
    description: "A value between 0 - 16777215.",
    example: "1",
    spaceName: null,
  },
  {
    name: "RGB values",
    description: "An RGB triplet.",
    example: "255, 0, 0",
    spaceName: "RGB",
  },
  {
    name: "HSL values",
    description: "An HSL triplet.",
    example: "330, 1, 0.6",
    spaceName: "HSL",
  },
  {
    name: "HSV values",
    description: "An HSV triplet.",
    example: "38.82, 1, 1",
    spaceName: "HSV",
  },
  {
    name: "Lab values",
    description: "An HSL triplet.",
    example: "74.94, 23.93, 78.95",
    spaceName: "HSL",
  },
  {
    name: "LCH values",
    description: "An LCH triplet.",
    example: "79.21, 25.94, 235.11",
    spaceName: "LCH",
  },
  {
    name: "HCL values",
    description: "An HSL triplet.",
    example: "235.11, 25.94, 79.21",
    spaceName: "HCL",
  },
  {
    name: "CMYK values",
    description: "A CMYK quadruplet.",
    example: "1, 0.5, 0, 0.2",
    spaceName: "CMYK",
  },
  {
    name: "GL values",
    description: "An RGB triplet with GL notation.",
    example: "0.6, 0, 0.8",
    spaceName: "RGB",
  },
  {
    name: "Temperature",
    description:
      "A single number in Kelvin (K) units. From around 200 to 30,000",
    example: "1000",
    spaceName: null,
  },
];

/**
 * Creates color form an input in triplet, quadruplet format, and a space
 * @param  {string} input The color definition in triplet or quadruplet format.
 * @param  {string} space The color space.
 * @param  {string} err   The error message, in case the color can't be generated.
 * @return {object}       A chroma.js compatible color, or an error message.
 * @example input: 255, 255, 255 space: rgb => chroma('white')
 */
const createColorFromTriplets = (input, space, err) => {
  const colorSpace = colorSpaces.find((item) => item.name === space);
  const { spaceName } = colorSpace;

  if (!spaceName) return err;

  /**
   * '255, 255, 1' => '255,255,1'
   */
  const removedWhiteSpace = input.split(" ").join("");
  const parts = removedWhiteSpace.split(",");
  if (parts.length !== spaceName.length) return err;

  /**
   * (255, 255, 1, 'RGB') => {r:255, g:255, b: 1}
   */
  let params = [];
  parts.map((item, index) => {
    params[lowerCase(spaceName[index])] = item;
  });

  console.log("params:", params);

  return chroma({ ...params });
};

/**
 * Creates color form an input and a space
 * @param  {string} input The color definition.
 * @param  {string} space The color space.
 * @return {object}       A chroma.js compatible color, or an error message.
 * @example input: 255, 255, 255 space: rgb => chroma('white')
 */
const createColorFromSpace = (input, space) => {
  if (!input || !space) return null;

  const err =
    "Invalid input. Please check https://gka.github.io/chroma.js/#chroma for the right syntax.";

  switch (space) {
    case "Color name":
    case "Hexadecimal string":
      return chroma.valid(input) ? chroma(input) : err;
    case "Number":
      return chroma(parseInt(input));
    case "Temperature":
      return chroma.temperature(input);
    default:
      return createColorFromTriplets(input, space, err);
  }
};

const useColorFromSpace = (input, space) => {
  return createColorFromSpace(input, space);
};

export { useColorFromSpace, createColorFromSpace, colorSpaces };
