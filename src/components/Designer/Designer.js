import React, { useState } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import Colors, { ColorsPropTypes, ColorsDefaultProps } from "../Colors";
import ColorPairs from "../ColorPairs";
import Grid from "../layout/Grid";
import { Section } from "../semantic-elements";

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
 * @see Designer.md
 */
const Designer = (props) => {
  const { colors: defaultColors } = props;

  const [colors, setColors] = useState(defaultColors);

  /**
   * Loads styles.
   */
  const { containerKlass } = useStyles([container], colors);

  const sectionProps = { title: "Color Scheme Designer", display: true };

  return (
    <Grid
      columns={1}
      className={cx("Designer", containerKlass)}
      as={Section}
      asProps={sectionProps}
    >
      <Colors {...colors} />
      <ColorPairs {...colors} />
    </Grid>
  );
};

Designer.propTypes = propTypes;
Designer.defaultProps = defaultProps;

export default Designer;
export { propTypes as DesignerPropTypes, defaultProps as DesignerDefaultProps };
