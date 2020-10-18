import PropTypes from "prop-types";

/**
 * Imports other components and hooks.
 */
import { colors, ColorsPropTypes } from "./colors";
import { colorPairs, ColorPairsPropTypes } from "./colorPairs";

/**
 * Defines the prop types.
 * @type {Object}
 */
const propTypes = {
  /**
   * The list of colors.
   * They are not used directly.
   */
  ...ColorsPropTypes,
  /**
   * The list of color pairs.
   * A set of variations derived from the list of colors.
   * They are used directly.
   */
  ...ColorPairsPropTypes,
};

/**
 * Defines the default props.
 * @type {Object}
 */
const defaultProps = {
  ...colors,
  ...colorPairs,
};

export { defaultProps as color };
