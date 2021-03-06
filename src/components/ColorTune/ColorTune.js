import React, { useState } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, useMaximumContrast, useColorTune } from "../../hooks";
import chroma from "chroma-js";
import shortid from "shortid";

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
const container = (props) => ({});

/**
 * Displays the component.
 * @see ColorTune.md
 */
const ColorTune = (props) => {
  const { color, input, space } = props;

  if (!color) return null;

  // NOTE: when component is re-rendered on color change color2 doesn't gets updated
  const [color2, setColor2] = useState(null);
  const [textColorMax, contrast, aa, aaa] = useMaximumContrast(color);

  const handleClick = () => {
    const fineTuned = useColorTune(color, textColorMax);
    setColor2(fineTuned);
  };

  const { containerKlass } = useStyles([container], props);

  return (
    <div className={cx("ColorTune", containerKlass)}>
      <ColorInfo key={shortid.generate()} color={color} display={true} />
      {!aaa && <button onClick={handleClick}>Fine tune</button>}
      {color2 && (
        <ColorInfo key={shortid.generate()} color={color2} display={true} />
      )}
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
