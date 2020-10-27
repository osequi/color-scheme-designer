import React, { useState } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, useMaximumContrast } from "../../hooks";
import chroma from "chroma-js";

/**
 * Imports other components and hooks.
 */
import ColorInfo from "../ColorInfo";

/**
 * Defines the prop types.
 */
const propTypes = {
  color: PropTypes.object,
  input: PropTypes.string,
  space: PropTypes.string,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  color: null,
  input: null,
  space: null,
};

/**
 * Defines the styles.
 */
const container = (props) => ({
  backgroundColor: props.color,
  color: props.textColor,
  border: "1px solid",
});

/**
 * Displays the component.
 * @see ColorTune.md
 */
const ColorTune = (props) => {
  const { color, input, space } = props;

  if (!color) return null;

  const [textColorMax] = useMaximumContrast(color);

  const [textColor, setTextColor] = useState(textColorMax);

  const { containerKlass } = useStyles([container], {
    color: color.css(),
    textColor: textColor.css(),
  });

  return (
    <div className={cx("ColorTune", containerKlass)}>
      <ColorInfo color={color} display={true} />
    </div>
  );
};

ColorTune.propTypes = propTypes;
ColorTune.defaultProps = defaultProps;

export default ColorTune;
export {
  propTypes as ColorTunePropTypes,
  defaultProps as ColorTuneDefaultProps,
};
