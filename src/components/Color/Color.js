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
};

/**
 * Defines the styles.
 */
const container = (props) => ({
  backgroundColor: props.background,
});

/**
 * Displays the component.
 * @see Color.md
 */
const Color = (props) => {
  const { name, value, space } = props;
  const { name: spaceName } = space;

  /**
   * Manages the creation of the color.
   */
  const [color, setColor] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  /**
   * Creates the color.
   */
  useEffect(() => {
    const c = createColorFromSpace(value, spaceName);
    let err = c;

    if (typeof c === "object") {
      setColor(c);
      err = null;
    }

    setErrorMessage(err);
  }, [value, space]);

  let backgroundColor = "inherit";

  useEffect(() => {
    if (!color) return;
    backgroundColor = color.css();
  }, [color]);

  /**
   * Displays the color.
   */
  const { containerKlass } = useStyles([container], {
    background: backgroundColor,
  });

  const displayErrorMessage = value !== "Undefined";

  return (
    <Article className={cx("Color", containerKlass)} title={name}>
      <p>{value}</p>
      <p>{displayErrorMessage && errorMessage && errorMessage}</p>
    </Article>
  );
};

Color.propTypes = propTypes;
Color.defaultProps = defaultProps;

export default Color;
export { propTypes as ColorPropTypes, defaultProps as ColorDefaultProps };
