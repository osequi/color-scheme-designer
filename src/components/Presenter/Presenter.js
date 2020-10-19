import React, { useState } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import Colors, { ColorsPropTypes, ColorsDefaultProps } from "../Colors";
import ColorPairs from "../ColorPairs";
import { Grid } from "../layout";
import { Section } from "../semantic-elements";
import { Text } from "../typography";

/**
 * Defines the prop types.
 */
const propTypes = {
  colors: PropTypes.shape(ColorsPropTypes),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  colors: ColorsDefaultProps,
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see Presenter.md
 */
const Presenter = (props) => {
  const { colors: defaultColors } = props;

  const [colors, setColors] = useState(defaultColors);

  /**
   * Loads styles.
   */
  const { containerKlass } = useStyles([container], colors);

  const asProps = {
    title: "The list of colors",
  };

  return (
    <Grid
      className={cx("Designer", containerKlass)}
      as={Section}
      asProps={asProps}
    >
      <Colors {...colors} />
      <ColorPairs {...colors} />
    </Grid>
  );
};

Presenter.propTypes = propTypes;
Presenter.defaultProps = defaultProps;

export default Presenter;
export {
  propTypes as PresenterPropTypes,
  defaultProps as PresenterDefaultProps,
};
