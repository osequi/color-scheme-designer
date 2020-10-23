import PropTypes from "prop-types";

/**
 * A color space is a specific implementation of a color model.
 * @see https://www.dpbestflow.org/color/color-space-and-color-profiles
 */
import {
  colorModelPropTypes,
  colorModelDefaultProps,
} from "./colorModel.props";

const propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  model: PropTypes.shape(colorModelPropTypes),
};

const defaultProps = {
  name: "Adobe RGB",
  description: "Adobe's RGB color model implementation",
  model: colorModelDefaultProps,
};

export {
  propTypes as colorSpacePropTypes,
  defaultProps as colorSpaceDefaultProps,
};
