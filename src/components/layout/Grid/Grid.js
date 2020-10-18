import React, { createElement } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../../hooks";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The width of the grid
   * @type {string}
   */
  width: PropTypes.string,
  /**
   * The height of the grid
   * @type {string}
   */
  height: PropTypes.string,
  /**
   * The number of columns, unitless.
   * The columns will be calculated useing `grid-template-columns: repeat(x, 1fr)`
   * @type {string}
   */
  columns: PropTypes.number,
  /**
   * The gap between the cells, unitless.
   * The gap will be a multiply of `var(--lem)`
   * Sets the gaps both horizontally with `column-gap` and vertically with `row-gap`.
   * @type {string}
   */
  gap: PropTypes.number,
  /**
   * The gap faux lines, aka the grid borders.
   * The grid borders look good only when there is no gap in the grid.
   * Therefore when fauxLines is set instead of grid gap we'll set a padding on the grid elements.
   * @type {string}
   */
  fauxLines: PropTypes.oneOf(["none", "horizontal", "vertical", "both"]),
  /**
   * The container element / component where the content will be displayed.
   * Preferably a Semantic Element.
   * @type {func}
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * The content to be displayed.
   * It should be preferably an array of Cells.
   * @type {any}
   */
  children: PropTypes.any,
};

/**
 * Defines the default props
 */
const defaultProps = {
  width: "100%",
  height: "100%",
  columns: 1,
  gap: 0,
  fauxLines: "none",
  as: "div",
  children: null,
};

/**
 * Defines the styles.
 */
const container = (props) => ({
  display: "grid",
  width: `${props.width}`,
  height: `${props.height}`,
  gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
  columnGap: props.borderLeftSelector ? 0 : `calc(${props.gap} * var(--lem))`,
  rowGap: props.borderLeftSelector ? 0 : `calc(${props.gap} * var(--lem))`,

  ["& > *"]: {
    padding: props.borderLeftSelector
      ? `0 calc(${props.gap} * var(--lem)) calc(${props.gap} * var(--lem)) 0`
      : "inherit",
  },
});

const fauxLinesStyle = (props) => ({
  ["&  > *"]: {
    boxSizing: "border-box",

    [`${props.borderLeftSelector}`]: {
      borderLeft: props.displayHorizontal ? "1px solid" : "none",
    },

    [`${props.borderBottomSelector}`]: {
      borderBottom: props.displayVertical ? "1px solid" : "none",
    },
  },
});

/**
 * Calculates the position of the faux lines.
 */
const calculateFauxLines = (props) => {
  const { fauxLines, columns, children } = props;

  if (fauxLines === "none") return null;

  const rows = Math.floor(children.length / columns) + 1;

  const lastRow = columns * rows - columns + 1;
  const firstRow = columns - 1;
  const borderLeftException = `${columns}n - ${firstRow}`;
  const borderBottomException = `n + ${lastRow}`;

  const displayHorizontal = fauxLines === "both" || fauxLines === "vertical";
  const displayVertical = fauxLines === "both" || fauxLines === "horizontal";
  const borderLeftSelector = `&:not(:nth-child(${borderLeftException}))`;
  const borderBottomSelector = `&:not(:nth-child(${borderBottomException}))`;

  return {
    displayVertical: displayVertical,
    displayHorizontal: displayHorizontal,
    borderLeftSelector: borderLeftSelector,
    borderBottomSelector: borderBottomSelector,
  };
};

/**
 * Displays content using a CSS Grid.
 * @see Grid.md
 */
const Grid = (props) => {
  const { columns, fauxLines, as, children } = props;

  /**
   * Displays the faux lines.
   */
  const fauxLinesProps = calculateFauxLines(props);

  /**
   * Loads the styles.
   */
  const { containerKlass, fauxLinesStyleKlass } = useStyles(
    [container, fauxLinesStyle],
    {
      ...props,
      ...fauxLinesProps,
    }
  );

  /**
   * Prepares the props to render the component.
   */
  const props2 = { className: cx("Grid", containerKlass, fauxLinesStyleKlass) };

  return createElement(as, props2, children);
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
export { propTypes as GridPropTypes, defaultProps as GridDefaultProps };
