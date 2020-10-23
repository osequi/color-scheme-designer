import PropTypes from "prop-types";

import { colorPropTypes, colorDefaultProps } from "./color.props";

/**
 * A set of primary colors from where other colors (the color wheel) can be constructed.
 * @see https://www.dpbestflow.org/color/color-space-and-color-profiles
 */
const propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  primaryColors: PropTypes.arrayOf(PropTypes.shape(colorPropTypes)),
};

const defaultProps = {
  name: "RGB",
  description: "Red, green, blue",
  primaryColors: [colorDefaultProps],
};

export {
  propTypes as colorModelPropTypes,
  defaultProps as colorModelDefaultProps,
};
