import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

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
  contrast: PropTypes.number,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  id: "1",
  name: "default",
  color: "black",
  backgroundColor: "white",
  contrast: 10,
};

/**
 * Defines the styles.
 */
const container = (props) => {
  return {
    color: props.color.value,
    backgroundColor: props.backgroundColor.value,
  };
};

/**
 * Displays the component.
 * @see ColorPair.md
 */
const ColorPair = (props) => {
  const { id, name, contrast } = props;
  const { containerKlass } = useStyles([container], props);

  const text = contrast > 4.51 ? "Ok" : "";
  const articleProps = { title: name };

  return (
    <Cell
      id={id}
      className={cx("ColorPair", containerKlass)}
      as={Article}
      asProps={articleProps}
    >
      <p>
        {contrast.toFixed(2)} {text}
      </p>
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
