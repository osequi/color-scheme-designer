import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../../hooks";
import shortid from "shortid";

/**
 * Defines the prop types.
 */
const propTypes = {
  /**
   * Display horizontal lines?
   */
  displayHorizontalRhytm: PropTypes.bool,
  /**
   * Display vertica lines?
   */
  displayVerticalRhytm: PropTypes.bool,
  /**
   * Number of horizontal lines on the grid
   */
  numberOfHorizontalLines: PropTypes.number,
  /**
   * Number of vertical lines on the grid
   */
  numberOfVerticalLines: PropTypes.number,
  /**
   * The color of the grid line
   */
  lineColor: PropTypes.string,
  /**
   * The content to be displayed.
   * @type {any}
   */
  children: PropTypes.any,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  displayHorizontalRhytm: true,
  displayVerticalRhytm: true,
  numberOfHorizontalLines: 500,
  numberOfVerticalLines: 1000,
  lineColor: "lightgrey",
  children: null,
};

/**
 * Draws a set of lines.
 */
const drawLines = (props) => {
  const {
    display,
    numberOfLines,
    container,
    line,
    rhythmContainer,
    rhythmLine,
  } = props;

  if (!display) return null;

  const lines = Array.from({ length: numberOfLines }, (v, i) => i).map(
    (item) => {
      return (
        <span
          key={shortid.generate()}
          className={cx("Line", line, rhythmLine)}
        />
      );
    }
  );

  return (
    <div className={cx("Container", container, rhythmContainer)}>{lines}</div>
  );
};

/**
 * Defines the styles.
 */
const rhythmContainer = {
  label: "rhythmContainer",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
};

const verticalRhythmContainer = (props) => {
  return {
    display: props.displayVerticalRhytm ? "flex" : "none",
    flexWrap: "wrap",
  };
};

const horizontalRhythmContainer = (props) => {
  return {
    display: props.displayHorizontalRhytm ? "block" : "none",
  };
};

const rhythmLine = (props) => {
  return {
    display: "block",
    boxSizing: "border-box",
    borderColor: props.lineColor ? props.lineColor : "transparent",
    borderWidth: 1,
  };
};

const verticalRhythmLine = {
  label: "verticalRhythmLine",
  width: "var(--lem)",
  height: "100%",
  borderRightStyle: "solid",
};

const horizontalRhythmLine = {
  label: "horizontalRhythmLine",
  width: "100%",
  height: "var(--lem)",
  borderBottomStyle: "solid",
};

/**
 * Displays typographic grid.
 * @see TypographicGrid.md
 */
const TypographicGrid = (props) => {
  const {
    displayVerticalRhytm,
    displayHorizontalRhytm,
    numberOfHorizontalLines,
    numberOfVerticalLines,
    lineColor,
    children,
  } = props;

  const {
    verticalRhythmContainerKlass,
    horizontalRhythmContainerKlass,
    verticalRhythmLineKlass,
    horizontalRhythmLineKlass,
    rhythmContainerKlass,
    rhythmLineKlass,
  } = useStyles(
    [
      verticalRhythmContainer,
      horizontalRhythmContainer,
      verticalRhythmLine,
      horizontalRhythmLine,
      rhythmContainer,
      rhythmLine,
    ],
    props
  );

  const horizontalLines = drawLines({
    display: displayHorizontalRhytm,
    numberOfLines: numberOfHorizontalLines,
    container: horizontalRhythmContainerKlass,
    line: horizontalRhythmLineKlass,
    rhythmContainer: rhythmContainerKlass,
    rhythmLine: rhythmLineKlass,
  });

  const verticalLines = drawLines({
    display: displayVerticalRhytm,
    numberOfLines: numberOfVerticalLines,
    container: verticalRhythmContainerKlass,
    line: verticalRhythmLineKlass,
    rhythmContainer: rhythmContainerKlass,
    rhythmLine: rhythmLineKlass,
  });

  return (
    <>
      {displayHorizontalRhytm && horizontalLines}
      {displayVerticalRhytm && verticalLines}
      {children}
    </>
  );
};

TypographicGrid.propTypes = propTypes;
TypographicGrid.defaultProps = defaultProps;

export default TypographicGrid;
export {
  propTypes as TypographicGridPropTypes,
  defaultProps as TypographicGridDefaultProps,
};
