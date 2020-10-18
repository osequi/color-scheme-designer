import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */

/**
 * Defines the prop types.
 */
const propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  name: "white",
  value: "#fff",
};

/**
 * Defines the styles.
 */
const container = (props) => {
  return {
    width: `calc(var(--lem) * 10)`,
    height: `calc(var(--lem) * 10)`,
    backgroundColor: props.value,
  };
};

/**
 * Displays the component.
 * @see Color.md
 */
const Color = (props) => {
  const { containerKlass } = useStyles([container], props);

  return <div className={cx("Color", containerKlass)}></div>;
};

Color.propTypes = propTypes;
Color.defaultProps = defaultProps;

export default Color;
export { propTypes as ColorPropTypes, defaultProps as ColorDefaultProps };
