import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import Link from "next/link";

/**
 * Imports other components and hooks.
 */
import { Grid, Cell } from "../layout";
import { Nav } from "../semantic-elements";

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
 * @see Menu.md
 */
const Menu = (props) => {
  const { containerKlass } = useStyles([container], props);

  const asProps = {
    title: "Navigation",
  };

  return (
    <Grid className={cx("Menu", containerKlass)} as={Nav} asProps={asProps}>
      <Cell>
        <Link href="/search">Search</Link>
      </Cell>
      <Cell>
        <Link href="/add">Add</Link>
      </Cell>
      <Cell>
        <Link href="/">Home</Link>
      </Cell>
    </Grid>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
export { propTypes as MenuPropTypes, defaultProps as MenuDefaultProps };
