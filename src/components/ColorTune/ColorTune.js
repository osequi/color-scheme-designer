import React, { useState } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, useMaximumContrast, useColorTune } from "../../hooks";
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

  const [textColorMax, contrast, aa, aaa] = useMaximumContrast(color);
  const [color2, setColor2] = useState(color);

  const handleClick = () => {
    const fineTuned = useColorTune(color, textColorMax);
    setColor2(fineTuned);
  };

  const { containerKlass } = useStyles([container], {
    color: color.css(),
    textColor: textColorMax.css(),
  });

  return (
    <div className={cx("ColorTune", containerKlass)}>
      <ColorInfo color={color} display={true} />
      {!aaa && <button onClick={handleClick}>Fine tune</button>}
      {color2 !== color && <ColorInfo color={color2} display={true} />}
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
