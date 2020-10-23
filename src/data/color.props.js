import PropTypes from "prop-types";

/**
 * The definition of a color.
 */

const propTypes = {
  /**
   * The name of the color.
   * @type {string}
   */
  name: PropTypes.string,
  /**
   * The origin of the color.
   * Every color is coming either from the primary or secondary colors.
   * @see https://color-wheel-artist.com/hue/
   * @type {string}
   */
  hue: PropTypes.string,
  /**
   * How much white the color contains, in percentage.
   * Lightens the color.
   * Makes it pastel.
   * @see https://color-wheel-artist.com/hue/
   * @type {number}
   */
  tint: PropTypes.number,
  /**
   * How much gray the color contains, in percentage.
   * Reduces the intensity of the color.
   * Toned colors are generally considered more pleasing to the eye.
   * @see https://color-wheel-artist.com/hue/
   * @type {number}
   */
  tone: PropTypes.number,
  /**
   * How much black the color contains, in percentage.
   * Darkens the color.
   * @see https://color-wheel-artist.com/hue/
   * @type {number}
   */
  shade: PropTypes.number,
};

const defaultProps = {
  name: "Light Green",
  hue: "Green",
  tint: 10,
  tone: 0,
  shade: 0,
};

export { propTypes as colorPropTypes, defaultProps as colorDefaultProps };
