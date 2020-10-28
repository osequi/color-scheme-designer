import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import Color, { ColorPropTypes, ColorDefaultProps } from "../Color";
import { Grid, Cell } from "../layout";
import { Section } from "../semantic-elements";

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
  colors: [ColorDefaultProps],
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

  const asProps = { title: "Colors" };

  const colorsList =
    colors &&
    colors.map((item) => {
      const { id } = item;
      return <Cell key={id} as={Color} asProps={item} />;
    });

  return (
    <Grid
      as={Section}
      asProps={asProps}
      className={cx("Colors", containerKlass)}
    >
      {colorsList}
    </Grid>
  );
};

Colors.propTypes = propTypes;
Colors.defaultProps = defaultProps;

export default Colors;
export { propTypes as ColorsPropTypes, defaultProps as ColorsDefaultProps };
