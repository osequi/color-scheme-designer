import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import chroma from "chroma-js";

/**
 * Imports other components and hooks.
 */

/**
 * Defines the prop types.
 */
const propTypes = {};

/**
 * Defines the default props.
 */
const defaultProps = {};

/**
 * Defines the styles.
 */
const container = (props) => ({
  backgroundColor: props.tint,
});

/**
 * Displays the component.
 * @see ColorTint.md
 */
const ColorTint = (props) => {
  const { color } = props;
  const tint = chroma(color).darken(0.1);
  const { containerKlass } = useStyles([container], { tint: tint.css() });

  return <div className={cx("ColorTint", containerKlass)}>ColorTint</div>;
};

ColorTint.propTypes = propTypes;
ColorTint.defaultProps = defaultProps;

export default ColorTint;
export {
  propTypes as ColorTintPropTypes,
  defaultProps as ColorTintDefaultProps,
};
