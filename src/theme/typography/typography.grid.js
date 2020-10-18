import PropTypes from "prop-types";

/**
 * Imports other components and hooks.
 */
import { breakpointNames } from "../responsiveness";

/**
 * Defines the prop types.
 */
const propTypes = {
  /**
   * Font size, in percentage.
   * @type {number}
   */
  fontSize: PropTypes.number,
  /**
   * Line height, unitless.
   * @type {number}
   */
  lineHeight: PropTypes.number,
  /**
   * Responsive font sizes for different breakpoints.
   * @type {array}
   */
  fontSizes: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The breakpoint name.
       * Example: 'tablet'.
       * @type {string}
       */
      breakpoint: PropTypes.oneOf(breakpointNames),
      /**
       * The font size for the breakpoint, in percentage.
       * Example: 120
       * @type {number}
       */
      fontSize: PropTypes.number,
    })
  ),
};

/**
 * Defines the default props.
 * Props will be overwritten by the theme.
 */
const defaultProps = {
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
      fontSize: 140,
    },
  ],
};

export { propTypes as GridPropTypes, defaultProps as GridDefaultProps };
