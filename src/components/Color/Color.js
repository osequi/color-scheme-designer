import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, colorSpaceProps, createColorFromSpace } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import { Article } from "../semantic-elements";

/**
 * Defines the prop types.
 */
const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.string,
  space: PropTypes.shape(colorSpaceProps),
  /**
   * The chroma.js representation of the color.
   * @type {object}
   */
  chroma: PropTypes.object,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  id: null,
  name: null,
  description: null,
  value: null,
  space: null,
  chroma: null,
};

/**
 * Defines the styles.
 */
const container = (props) => ({
  backgroundColor: props.backgroundColor,
  color: props.textColor,
  border: props.border,
  borderRadius: "50%",
});

/**
 * Displays the component.
 * @see Color.md
 */
const Color = (props) => {
  const { chroma: color, textColor, backgroundColor, name, value } = props;

  /**
   * Prepares the background and text colors.
   * Edge cases like black-on-black has to be dealt with.
   */
  const backgroundColor2 = color && color.css ? color.css() : "inherit";
  const textColor2 =
    name && name === textColor.name
      ? backgroundColor.chroma.css()
      : textColor.chroma.css();

  /**
   * Loads the styles.
   */
  const { containerKlass } = useStyles([container], {
    backgroundColor: backgroundColor2,
    textColor: textColor2,
    border: "1px solid",
  });

  /**
   * Defines the title.
   */
  const title = color ? (
    <span>
      {name}
      <br />
      {value}
    </span>
  ) : (
    `Add ${name} color`
  );

  /**
   * Defines what to display.
   */
  const display = color ? (
    <Article className={cx("Color", containerKlass)} title={title}></Article>
  ) : (
    <button>{title}</button>
  );

  return display;
};

Color.propTypes = propTypes;
Color.defaultProps = defaultProps;

export default Color;
export { propTypes as ColorPropTypes, defaultProps as ColorDefaultProps };
