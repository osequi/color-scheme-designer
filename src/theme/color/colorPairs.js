import PropTypes from "prop-types";

/**
 * Imports other components and hooks.
 */
import { colors } from "./colors";

/**
 * Defines the prop types.
 * @type {Object}
 */
const propTypes = {};

/**
 * Defines the default props.
 * @type {Object}
 */
const defaultProps = {
  normal: {
    color: colors.dark,
    backgroundColor: colors.light,
  },
  inverted: {
    color: colors.light,
    backgroundColor: colors.dark,
  },
  highlighted: {
    color: colors.highlight,
  },
  highlightedAsBackground: {
    backgroundColor: colors.highlight,
  },
  shaded: { color: colors.shade },
  shadedAsBackground: { backgroundColor: colors.shade },
};

export { propTypes as ColorPairsPropTypes, defaultProps as colorPairs };
