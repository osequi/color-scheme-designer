import PropTypes from "prop-types";
import ms from "modularscale-js";

/**
 * On the modular scale values are floats. For example `ms(6)` = 5.61em
 * Setting font sizes in arbitrary floats breaks the grid, which is set in `lem`.
 * The 5.61em grid has to be aligned to the 1.25em grid.
 * `scaleModularMargin` does the trick for single line text scaled with modular scale.
 *
 * For multiline texts we either need refs to the scaled text and use `react-measure`, or use `ReactDOM.findDOMNode`.
 * Since content often times comes from markdown we don't have access to refs.
 * And `findDOMNode` is deprecated in `StrictMode`, CRA comes with `StrictMode` enabled.
 *
 * The only way left to align multiline texts to grid is to skip markdown usage.
 */

/**
 * Defines the prop types.
 * @see https://www.modularscale.com/?1&em&1.333
 * @type {Object}
 */
const propTypes = {
  base: PropTypes.arrayOf(PropTypes.number),
  ratio: PropTypes.number,
};

/**
 * Defines the deafult props.
 * @type {Object}
 */
const defaultProps = {
  base: [1],
  ratio: 1.333,
};

/**
 * Sets the margins of a sized element in such ways to realign it to the original grid.
 */
const scaleModularMargin = (props, theme) => {
  const { scale: scaleProp, lineHeight: lineHeightProp } = props;
  const { typography } = theme;
  const { grid, helpers } = typography;
  const { fontSize } = grid;
  const { lem } = helpers;

  /**
   * The size of a single line in the heading.
   * Example: (6, 1) => 5.61
   */
  const headingLem = ms(scaleProp, defaultProps) * lineHeightProp;

  /**
   * The number of lines in the heading.
   * This can't be calculated...
   */
  const headingLines = 1;

  /**
   * The size of the heading.
   * Example: 1 * 5.61 = 5.61
   */
  const headingSize = headingLines * headingLem;

  /**
   * How many cells (vertical grid lines) the heading occupies.
   * Example: 5.61 / 1.25 = Math.ceil(4.488) = 5
   */
  const nrOfCellsOccupied = Math.ceil(headingSize / lem);

  /**
   * How big the margin has to be set.
   * Example: 5 * 1.25 - 5.61 = 0.64
   */
  const marginToSet = nrOfCellsOccupied * lem - headingSize;

  /**
   * Convert marginToSet to the headingLem
   * Example: 0.64 / 5.61 = 0.114em.
   */
  const marginToSetInHeadingLem = marginToSet / headingLem;

  return {
    marginTop: `${marginToSetInHeadingLem}em`,
    marginBottom: 0,
  };
};

/**
 * Returns a value from the modular scale
 * @param  {number} size The size on the scale.
 * @return {number}      The value on the scale.
 * @example scale('modular', 2) => 1.77em (within the perfect fourth ratio)
 * @see https://www.modularscale.com/?1&em&1.333
 */
const scaleModular = (value, settings) => {
  return ms(value, settings);
};

export {
  propTypes as ModularScalePropTypes,
  defaultProps as ModularScaleDefaultProps,
  scaleModular,
  scaleModularMargin,
};
