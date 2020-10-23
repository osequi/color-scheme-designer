import PropTypes from "prop-types";

/**
 * A set of colors constructed from primary colors of a color model.
 */

import {
  colorModelPropTypes,
  colorModelDefaultProps,
} from "./colorModel.props";

import { colorPropTypes, colorDefaultProps } from "./color.props";

const propTypes = {
  primary: PropTypes.shape(colorModelPropTypes.primaryColors),
  secondary: PropTypes.arrayOf(PropTypes.shape(colorPropTypes)),
  tertiary: PropTypes.arrayOf(PropTypes.shape(colorPropTypes)),
};

let defaultProps = {
  primary: colorModelDefaultProps.primary,
};

const generateSecondary = (props) => {};
const generateTertiary = (props) => {};

defaultProps = {
  secondary: generateSecondary(defaultProps.primary),
  tertiary: generateTertiary(defaultProps.primary),
};

export {
  propTypes as colorWheelPropTypes,
  defaultProps as colorWheelDefaultProps,
};
