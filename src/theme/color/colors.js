import PropTypes from "prop-types";

/**
 * Defines the prop types.
 * @type {Object}
 */
const propTypes = {
  /**
   * The light / warm / active color.
   * Used for the background.
   * @example red, orange, yellow.
   * @type {string}
   */
  light: PropTypes.string,
  /**
   * The dark / cool / chilling color.
   * Used for text.
   * @example blue, green, violet
   * @type {string}
   */
  dark: PropTypes.string,
  /**
   * The highlight color.
   * Used for buttons, links.
   * @type {string}
   */
  highlight: PropTypes.string,
  /**
   * The shader color.
   * Used to create high contrast backgrounds.
   * @type {string}
   */
  shade: PropTypes.string,
};

/**
 * Defines the default props.
 * @type {Object}
 */
const defaultProps = {
  light: "#f7f5e9",
  dark: "#464646",
  highlight: "#7040ff",
  shade: "#cdcdcd",
};

export { propTypes as ColorsPropTypes, defaultProps as colors };
