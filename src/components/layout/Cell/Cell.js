import React, { createElement } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../../hooks";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The unique id of the cell.
   * Cells are part of a list so they need a unique `key`.
   * @type {string}
   */
  id: PropTypes.string,
  /**
   * The name of the cell.
   * When cells are transformed into complex objects they need a name to aid transformations.
   * Example: For a cube names are front, back, left, right, top, bottom. Each side of the cube is transformed in a different way.
   * @type {string}
   */
  name: PropTypes.string,
  /**
   * In which container element to display.
   * Preferably inside a Semantic Element.
   * @type {func}
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * The content of the cell.
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
 * Defines the default props
 */
const defaultProps = {
  id: null,
  name: null,
  as: "div",
  children: null,
  className: "Cell",
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see Cell.md
 */
const Cell = (props) => {
  const { as, children, className } = props;
  const { containerKlass } = useStyles([container], props);

  const props2 = { className: cx(className, containerKlass) };

  return createElement(as, props2, children);
};

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;
export { propTypes as CellPropTypes, defaultProps as CellDefaultProps };
