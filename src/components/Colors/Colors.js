import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import Color, { ColorPropTypes, ColorDefaultProps } from "../Color";

/**
 * Defines the prop types.
 */
const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape(ColorPropTypes)),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  colors: [
    { name: "light", value: "#f7f5e9" },
    { name: "dark", value: "#464646" },
    { name: "highlight", value: "#7040ff" },
    { name: "shade", value: "#cdcdcd" },
  ],
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see Colors.md
 */
const Colors = (props) => {
  const { colors } = props;
  const { containerKlass } = useStyles([container], props);

  const colorsList =
    colors &&
    colors.map((item) => {
      const { id } = item;
      return <Color key={id} {...item} />;
    });

  return <div className={cx("Colors", containerKlass)}>{colorsList}</div>;
};

Colors.propTypes = propTypes;
Colors.defaultProps = defaultProps;

export default Colors;
export { propTypes as ColorsPropTypes, defaultProps as ColorsDefaultProps };
