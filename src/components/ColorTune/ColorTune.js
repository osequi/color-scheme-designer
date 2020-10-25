import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import chroma from "chroma-js";

/**
 * Imports other components and hooks.
 */
import ColorInfo from "../ColorInfo";

/**
 * Defines the prop types.
 */
const propTypes = {
  colorName: PropTypes.string,
  textColorNames: PropTypes.arrayOf(PropTypes.string),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  colorName: null,
  textColorNames: ["black", "white"],
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
  const { colorName, textColorNames } = props;

  if (!colorName) return null;
  if (!chroma.valid(colorName))
    return (
      <p>
        Couldn't find that color...
        <br />
        Please use a named color from the{" "}
        <a
          href="https://www.w3.org/wiki/CSS/Properties/color/keywords"
          title="W3CX11 specification"
        >
          W3CX11 specification
        </a>{" "}
        or a{" "}
        <a href="https://gka.github.io/chroma.js/#chroma" title="Chroma">
          hexadecimal code.
        </a>
      </p>
    );

  const color = chroma(colorName);

  const textColorNames1 = chroma(textColorNames[0]);
  const textColorNames2 = chroma(textColorNames[1]);
  const contrast1 = chroma.contrast(color, textColorNames1);
  const contrast2 = chroma.contrast(color, textColorNames2);
  const textColor = contrast1 > 4.5 ? textColorNames1 : textColorNames2;

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