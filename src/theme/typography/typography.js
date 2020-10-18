import PropTypes from "prop-types";

/**
 * Imports other components and hooks.
 */
import { GridPropTypes } from "./typography.grid";
import { lem, responsiveFontSizes, font, maxWidth } from "./typography.helpers";
import { scaleValue, scaleTo, scaleMargin, ScalePropTypes } from "./scale";
import { elements } from "./typography.elements";
import { spacing } from "./typography.spacing";
import { headings } from "./headings";

/**
 * Imports fonts.
 */
import "./fonts/fonts.css";

/**
 * Defines the prop types.
 * @type {Object}
 */
const propTypes = {
  /**
   * Sets up the typographic grid in `<body>`.
   * @type {object}
   */
  grid: PropTypes.shape(GridPropTypes),
  /**
   * Sets up the scale for font and element sizing.
   * @type {object}
   */
  scale: ScalePropTypes,
  /**
   * The list of fonts available for this theme.
   * @type {array}
   */
  fonts: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the font to be used.
       * @type {string}
       */
      name: PropTypes.string,
      /**
       * The font family name as defined in the font css
       * @type {string}
       */
      fontFamily: PropTypes.string,
      /**
       * The weight of the font
       * @type {array}
       */
      fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      /**
       * The font style
       * @type {string}
       */
      fontStyle: PropTypes.string,
    })
  ),
  /**
   * The style objects for all typographic elements
   * @type {[type]}
   */
  elements: PropTypes.object,
  /**
   * A set of helper functions.
   * @type {[type]}
   */
  helpers: PropTypes.object,
};

/**
 * Sets up typography.
 */
const typography = {
  grid: {
    fontSize: 100,
    lineHeight: 1.25,
    fontSizes: [
      {
        breakpoint: "tablet",
        fontSize: 110,
      },
      {
        breakpoint: "laptop",
        fontSize: 120,
      },
      {
        breakpoint: "desktop",
        fontSize: 130,
      },
    ],
  },
  scale: {
    preset: "modular",
  },
  fonts: [
    {
      name: "Nimbus Sans Light",
      fontFamily: "nimbus-sans",
      fontWeight: 300,
      fontStyle: "normal",
    },
    {
      name: "Nimbus Sans Regular",
      fontFamily: "nimbus-sans",
      fontWeight: 400,
      fontStyle: "normal",
    },
    {
      name: "Nimbus Sans Medium",
      fontFamily: "nimbus-sans",
      fontWeight: 500,
      fontStyle: "normal",
    },
  ],
  elements: elements,
};

/**
 * Defines the helpers.
 * @type {Object}
 */
const helpers = {
  lem: lem(),
  responsiveFontSizes: responsiveFontSizes(),
  font: (name) => font(name),
  maxWidth: (value) => maxWidth(value),
  scale: (value, settings) =>
    scaleTo({
      value: value,
      settings: settings,
      typography: typography,
    }),
  scaleValue: (value, settings) =>
    scaleValue({
      value: value,
      settings: settings,
      typography: typography,
    }),
  spacing: (preset) => spacing(preset),
  headings: (props, theme) => headings(props, theme),
  margin: (props, theme) => scaleMargin(props, theme),
};

/**
 * Merges helpers with the settings.
 */
typography.helpers = helpers;

export { typography };
