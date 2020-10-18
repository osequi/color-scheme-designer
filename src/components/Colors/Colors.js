import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import shortid from "shortid";

/**
 * Imports other components and hooks.
 */
import Color, { ColorPropTypes, ColorDefaultProps } from "../Color";
import Grid from "../layout/Grid";

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
    { id: shortid.generate(), name: "light", value: "#f7f5e9" },
    { id: shortid.generate(), name: "dark", value: "#464646" },
    { id: shortid.generate(), name: "highlight", value: "#7040ff" },
    { id: shortid.generate(), name: "shade", value: "#cdcdcd" },
  ],
};

const color = (name) => {
  const found = defaultProps.colors.find((item) => item.name === name);
  return found ? found : {};
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
      return <Color key={id} numberOfItems={colors.length} {...item} />;
    });

  return (
    <Grid columns={colorsList.length} className={cx("Colors", containerKlass)}>
      {colorsList}
    </Grid>
  );
};

Colors.propTypes = propTypes;
Colors.defaultProps = defaultProps;

export default Colors;
export {
  propTypes as ColorsPropTypes,
  defaultProps as ColorsDefaultProps,
  color,
};
