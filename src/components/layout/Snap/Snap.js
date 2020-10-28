import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import { Nav } from "../../semantic-elements";

/**
 * Defines the prop types.
 *
 * @see https://css-tricks.com/practical-css-scroll-snapping/
 */
const propTypes = {
  direction: PropTypes.oneOf(["x", "y"]),
  type: PropTypes.oneOf(["mandatory", "proximity"]),
  align: PropTypes.oneOf(["start", "center", "end"]),
  padding: PropTypes.number,
  /**
   * The content to be displayed.
   * It should be preferably an array of Cells.
   * @type {any}
   */
  children: PropTypes.any,
  /**
   * The className of the element.
   * It's optional to set.
   * Serves the technical purpose of style chaining.
   * @type {string}
   */
  className: PropTypes.string,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  direction: "x",
  type: "mandatory",
  align: "start",
  padding: 1,
  children: null,
  className: null,
};

/**
 * Defines the styles.
 */
const container = (props) => ({
  scrollSnapType: `${props.direction} ${props.type}`,
  scrollPadding: `calc(var(--lem) * ${props.padding})`,

  ["& > *"]: {
    scrollSnapAlign: `${props.align}`,
  },
});

/**
 * Displays the component.
 * @see Snap.md
 */
const Snap = (props) => {
  const { children, className } = props;
  const { containerKlass } = useStyles([container], props);

  return (
    <Nav className={cx("Snap", containerKlass, className)}>{children}</Nav>
  );
};

Snap.propTypes = propTypes;
Snap.defaultProps = defaultProps;

export default Snap;
export { propTypes as SnapPropTypes, defaultProps as SnapDefaultProps };
