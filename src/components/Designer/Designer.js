import React, { useState } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import { Grid } from "../layout";
import { Section } from "../semantic-elements";
import { Text } from "../typography";

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
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see Designer.md
 */
const Designer = (props) => {
  const { containerKlass } = useStyles([container], props);

  const asProps = {
    title: "The designer",
  };

  return (
    <Grid
      className={cx("Designer", containerKlass)}
      as={Section}
      asProps={asProps}
    >
      xxx
    </Grid>
  );
};

Designer.propTypes = propTypes;
Designer.defaultProps = defaultProps;

export default Designer;
export { propTypes as DesignerPropTypes, defaultProps as DesignerDefaultProps };
