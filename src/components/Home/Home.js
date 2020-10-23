import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import Study from "../Study/Study.mdx";
import Designer from "../Designer";
import Presenter from "../Presenter";
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
 * @see Home.md
 */
const Home = (props) => {
  const { containerKlass } = useStyles([container], props);

  const asProps = {
    heading: { level: 1 },
    title: "Color Scheme Designer",
    display: false,
  };

  return (
    <Grid
      columns={1}
      className={cx("Home", containerKlass)}
      as={Section}
      asProps={asProps}
    >
      <Designer />
      <Study />
      <Presenter />
    </Grid>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
export { propTypes as HomePropTypes, defaultProps as HomeDefaultProps };
