import PropTypes from "prop-types";

/**
 * Imports other components and hooks.
 */
import { GridPropTypes } from "./typography.grid";
import { scaleValue, scaleTo, scaleMargin, ScalePropTypes } from "./scale";
import { FontsPropTypes, FontsDefaultProps } from "./fonts";
import {
  lem,
  responsiveFontSizes,
  responsiveGridColumns,
  font,
  maxWidth,
} from "./typography.helpers";
import { elements } from "./typography.elements";
import { spacing } from "./typography.spacing";
import { headings } from "./headings";

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
  scale: PropTypes.shape(ScalePropTypes),
  /**
   * The list of available fonts for this theme.
   * @type {array}
   */
  fonts: PropTypes.shape(FontsPropTypes),
  /**
   * The style objects for all typographic elements like `<a>`, `<abbr>` etc.
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
    fontSizes: [100, 110, 120, 130],
    lineHeight: 1.25,
  },
  scale: {
    preset: "linear",
  },
  fonts: [
    {
      name: "Nimbus Sans Light",
      fontFamily: "nimbus-sans",
      fontWeight: 300,
      fontStyle: "normal",
      letterSpacing: "1.25px",
    },
    {
      name: "Nimbus Sans Regular",
      fontFamily: "nimbus-sans",
      fontWeight: 400,
      fontStyle: "normal",
      letterSpacing: "1.25px",
    },
    {
      name: "Nimbus Sans Medium",
      fontFamily: "nimbus-sans",
      fontWeight: 500,
      fontStyle: "normal",
      letterSpacing: "1.25px",
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
  responsiveGridColumns: (columns) => responsiveGridColumns(columns),
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
