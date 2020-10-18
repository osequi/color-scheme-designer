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
  klass: PropTypes.object,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  name: null,
  klass: null,
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see Swatch.md
 */
const Swatch = (props) => {
  const { name, klass } = props;
  const { containerKlass } = useStyles([container], props);

  return <div className={cx("Swatch", containerKlass, klass)}>{name}</div>;
};

Swatch.propTypes = propTypes;
Swatch.defaultProps = defaultProps;

export default Swatch;
export { propTypes as SwatchPropTypes, defaultProps as SwatchDefaultProps };
