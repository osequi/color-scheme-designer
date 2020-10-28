import React, { useContext } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import Colors from "../Colors";
import { Grid } from "../layout";
import { Section } from "../semantic-elements";
import { GlobalContext } from "../../../pages/_app.js";

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
  const context = useContext(GlobalContext);
  const { colors, setColors } = context;

  const { containerKlass } = useStyles([container], props);

  const asProps = { title: "Home" };

  return (
    <Grid as={Section} asProps={asProps} className={cx("Home", containerKlass)}>
      <Colors colors={colors} setColors={setColors} />
    </Grid>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
export { propTypes as HomePropTypes, defaultProps as HomeDefaultProps };
