import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, colorSpaceProps } from "../../hooks";

/**
 * Imports other components and hooks.
 */

/**
 * Defines the prop types.
 */
const propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.string,
  space: PropTypes.shape(colorSpaceProps),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  name: null,
  description: null,
  value: null,
  space: null,
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see Color.md
 */
const Color = (props) => {
  const { containerKlass } = useStyles([container], props);

  return <div className={cx("Color", containerKlass)}>Color</div>;
};

Color.propTypes = propTypes;
Color.defaultProps = defaultProps;

export default Color;
export { propTypes as ColorPropTypes, defaultProps as ColorDefaultProps };
