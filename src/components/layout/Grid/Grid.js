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
   * Props for the element.
   * @type {object}
   */
  asProps: PropTypes.object,
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
  asProps: null,
  children: null,
};

/**
 * Defines the grid container styles.
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

/**
 * Defines the grid faux lines styles.
 */
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
 * Checks if a grid has a title.
 */
const hasTitle = (asProps) => {
  return asProps && asProps?.title && asProps?.display && asProps.display;
};

/**
 * Defines the styles when the grid has a title set.
 */
const gridWithTitle = (props) => ({
  display: "flex",
  flexDirection: "column",
});

/**
 * Displays content using a CSS Grid.
 * @see Grid.md
 */
const Grid = (props) => {
  const { columns, fauxLines, as, asProps, children } = props;

  /**
   * Displays the faux lines.
   */
  const fauxLinesProps = calculateFauxLines(props);

  /**
   * Loads the styles.
   */
  const { containerKlass, fauxLinesStyleKlass, gridWithTitleKlass } = useStyles(
    [container, fauxLinesStyle, gridWithTitle],
    {
      ...props,
      ...fauxLinesProps,
    }
  );

  /**
   * Checks if grid has a title.
   */
  const gridHasTitle = hasTitle(asProps);

  /**
   * Prepares the props to render the component.
   */
  const propsGridWithoutTitle = {
    className: cx("Grid", containerKlass, fauxLinesStyleKlass),
    ...asProps,
  };

  const propsGridWithTitle = {
    className: cx("Grid", gridWithTitleKlass),
    ...asProps,
  };

  const props2 = gridHasTitle ? propsGridWithTitle : propsGridWithoutTitle;

  /**
   * Prepares the children.
   */
  const childrenWrapped = gridHasTitle ? (
    <div className={cx("GridItems", containerKlass, fauxLinesStyleKlass)}>
      {children}
    </div>
  ) : (
    children
  );

  return createElement(as, props2, childrenWrapped);
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
export { propTypes as GridPropTypes, defaultProps as GridDefaultProps };
