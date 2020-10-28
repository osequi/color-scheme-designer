import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../../hooks";

/**
 * Imports other components and hooks.
 */
import { Nav, NavPropTypes, NavDefaultProps } from "../../semantic-elements";

/**
 * Defines the prop types.
 *
 * @see https://css-tricks.com/practical-css-scroll-snapping/
 */
const propTypes = {
  direction: PropTypes.oneOf(["x", "y"]),
  type: PropTypes.oneOf(["mandatory", "proximity"]),
  align: PropTypes.oneOf(["start", "center", "end"]),
  childrenMargin: PropTypes.number,
  /**
   * It's not an usual padding
   * @see https://css-tricks.com/practical-css-scroll-snapping/#scroll-padding
   * @type {string}
   */
  scrollPadding: PropTypes.string,
  navProps: PropTypes.shape(NavPropTypes),
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
  scrollPadding: "0 50%",
  childrenMargin: 1,
  navProps: { ...NavDefaultProps, title: "Snap" },
  children: null,
  className: null,
};

/**
 * Defines the styles.
 */
const container = (props) => ({
  scrollSnapType: `${props.direction} ${props.type}`,
  scrollPadding: `${props.padding}`,

  display: "flex",
  overflowX: "auto",
  // Mandatarory in case the child are text.
  whiteSpace: "nowrap",

  ["& > *"]: {
    scrollSnapAlign: `${props.align}`,
    display: "inline-flex",
  },

  ["& > * + * "]: {
    marginLeft: `calc(var(--lem) * ${props.childrenMargin})`,
  },

  ["& .Headings + *"]: {
    marginLeft: 0,
  },
});

/**
 * Displays the component.
 * @see Snap.md
 */
const Snap = (props) => {
  const { children, className, navProps } = props;
  const { containerKlass } = useStyles([container], props);

  return (
    <Nav {...navProps} className={cx("Snap", containerKlass, className)}>
      {children}
    </Nav>
  );
};

Snap.propTypes = propTypes;
Snap.defaultProps = defaultProps;

export default Snap;
export { propTypes as SnapPropTypes, defaultProps as SnapDefaultProps };
