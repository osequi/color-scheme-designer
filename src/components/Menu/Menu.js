import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import Link from "next/link";

/**
 * Imports other components and hooks.
 */
import { Snap } from "../layout";

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
    <Snap className={cx("Menu", containerKlass)} title="Menu">
      <Link href="/add">Add color</Link>
      <Link href="/">Home 1</Link>
      <Link href="/">Home 2</Link>
      <Link href="/">Home 3</Link>
      <Link href="/">Home 4</Link>
      <Link href="/">Home 5</Link>
    </Snap>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
export { propTypes as MenuPropTypes, defaultProps as MenuDefaultProps };
