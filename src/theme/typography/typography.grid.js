import PropTypes from "prop-types";

/**
 * Defines the prop types.
 */
const propTypes = {
  /**
   * Responsive font sizes for different breakpoints.
   * @type {array}
   */
  fontSizes: PropTypes.arrayOf(PropTypes.number),
  /**
   * Line height, unitless.
   * @type {number}
   */
  lineHeight: PropTypes.number,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  fontSizes: [100, 110, 120, 140],
  lineHeight: 1.25,
};

export { propTypes as GridPropTypes, defaultProps as GridDefaultProps };
