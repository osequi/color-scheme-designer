import PropTypes from "prop-types";

/**
 * On the linear scale every scale value is an integer.
 * This preserves the grid aligmnent for multiline headings.
 * The drawback is `h1` gets very large.
 * This can be fixed with setting all headings to level 1, 2, or 3.
 * Then style them creatively, Bauhaus style, without further enlarging them.
 */

/**
 * Defines the prop types.
 * @type {Object}
 */
const propTypes = {
  lineHeight: PropTypes.number,
};

/**
 * Defines the deafult props.
 * @type {Object}
 */
const defaultProps = {
  lineHeight: 1,
};

/**
 * Sets the margins of an element to realign to the grid.
 * In the case of linear scale elements never break the grid.
 */
const scaleLinearMargin = () => {
  return {
    marginTop: 0,
    marginBottom: 0,
  };
};

/**
 * Returns a value from the linear scale.
 * The returned value is responsive, ie. follows the responsive font-sizes applied to the body.
 * @param  {number} size       The size on the scale.
 * @param  {object} settings   The settings needed for the calculations. Currently we only need `lineHeight`.
 * @param  {object} typography The typographic settings needed for the calculations.
 * @return {number}            The value on the scale.
 * @example scale('linear', 2, 1) => 3.75em (the value of the 0 scale is 1em)
 */
const scaleLinear = (value, settings, typography) => {
  const { grid } = typography;
  const { lineHeight: lineHeightFromGrid } = grid;

  const lineHeightFromSettings = settings ? settings : lineHeightFromGrid;
  const newLineHeight = lineHeightFromGrid / lineHeightFromSettings;

  return (value + 1) * newLineHeight;
};

export {
  propTypes as LinearScalePropTypes,
  defaultProps as LinearScaleDefaultProps,
  scaleLinear,
  scaleLinearMargin,
};
