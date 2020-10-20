import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, useTheme } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import { Cell } from "../layout/";
import { Article } from "../semantic-elements";

/**
 * Defines the prop types.
 */
const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  contrast: PropTypes.string,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  id: "1",
  name: "default",
  color: "black",
  backgroundColor: "white",
  contrast: "",
};

/**
 * Defines the styles.
 */
const container = (props, theme) => {
  return {
    color: props.color,
    backgroundColor: props.backgroundColor,
    ...theme.typography.helpers.scale(props.scale),
  };
};

/**
 * Displays the component.
 * @see ColorPair.md
 */
const ColorPair = (props) => {
  const { id, name, contrast, content } = props;

  const theme = useTheme();
  const { containerKlass } = useStyles([container], props, theme);

  const asProps = { title: name };

  return content ? (
    <div className={cx("ColorPair", containerKlass)}>{content}</div>
  ) : (
    <Cell
      id={id}
      className={cx("ColorPair", containerKlass)}
      as={Article}
      asProps={asProps}
    >
      <p>{contrast}</p>
    </Cell>
  );
};

ColorPair.propTypes = propTypes;
ColorPair.defaultProps = defaultProps;

export default ColorPair;
export {
  propTypes as ColorPairPropTypes,
  defaultProps as ColorPairDefaultProps,
};
