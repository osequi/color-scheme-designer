import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import shortid from "shortid";

/**
 * Imports other components and hooks.
 */
import Color, { ColorPropTypes } from "../Color";
import { Grid } from "../layout/";
import { Section } from "../semantic-elements/";
import { Text } from "../typography";

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

  const asProps = {
    title: <Text variant="subtitle">Colors</Text>,
    heading: { level: 2 },
    display: true,
  };

  return (
    <Grid
      columns={[2, 4]}
      className={cx("Colors", containerKlass)}
      as={Section}
      asProps={asProps}
    >
      {colorsList}
    </Grid>
  );
};

Colors.propTypes = propTypes;
Colors.defaultProps = defaultProps;

export default Colors;
export { propTypes as ColorsPropTypes, defaultProps as ColorsDefaultProps };
