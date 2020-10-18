import React, { useState } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import Swatches, { SwatchesPropTypes, SwatchesDefaultProps } from "../Swatches";

/**
 * Defines the prop types.
 */
const propTypes = {
  colors: PropTypes.shape({
    /**
     * The light / warm / active color.
     * Used for the background.
     * @example red, orange, yellow.
     * @type {string}
     */
    light: PropTypes.string,
    /**
     * The dark / cool / chilling color.
     * Used for text.
     * @example blue, green, violet
     * @type {string}
     */
    dark: PropTypes.string,
    /**
     * The highlight color.
     * Used for buttons, links.
     * @type {string}
     */
    highlight: PropTypes.string,
    /**
     * The shader color.
     * Used to create high contrast backgrounds.
     * @type {string}
     */
    shade: PropTypes.string,
  }),
  swatches: PropTypes.shape(SwatchesPropTypes),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  colors: {
    light: "#f7f5e9",
    dark: "#464646",
    highlight: "#7040ff",
    shade: "#cdcdcd",
  },
  swatches: SwatchesDefaultProps,
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

const normal = (props) => {
  return {
    color: props.dark,
    backgroundColor: props.light,
  };
};

const inverted = (props) => {
  return {
    color: props.light,
    backgroundColor: props.dark,
  };
};

/**
 * Displays the component.
 * @see Designer.md
 */
const Designer = (props) => {
  const { colors: defaultColors } = props;

  const [colors, setColors] = useState(defaultColors);

  /**
   * Loads styles.
   */
  const { containerKlass, normalKlass, invertedKlass } = useStyles(
    [container, normal, inverted],
    colors
  );

  const colorPairs = [
    {
      name: "normal",
      klass: normalKlass,
    },
    {
      name: "inverted",
      klass: invertedKlass,
    },
  ];

  return (
    <div className={cx("Designer", containerKlass, normalKlass)}>
      <Swatches colorPairs={colorPairs} />
    </div>
  );
};

Designer.propTypes = propTypes;
Designer.defaultProps = defaultProps;

export default Designer;
export { propTypes as DesignerPropTypes, defaultProps as DesignerDefaultProps };
