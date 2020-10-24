import React, { useState } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import chroma from "chroma-js";

/**
 * Imports other components and hooks.
 */
import ColorInfo from "../ColorInfo";
import ColorTints from "../ColorTints";
import { Cell } from "../layout";

/**
 * Defines the prop types.
 */
const propTypes = {
  color: PropTypes.string,
  children: PropTypes.any,
  padding: 1,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  color: "white",
};

/**
 * Defines the styles.
 */
const container = (props) => ({
  backgroundColor: props.color,
});

const header = (props) => ({
  cursor: "pointer",
});

/**
 * Displays the component.
 * @see ColorSwatch.md
 */
const ColorSwatch = (props) => {
  const { color, name, displayTints, padding } = props;

  const [showInfo, setShowInfo] = useState(false);
  const clickHandler = () => setShowInfo(!showInfo);

  const { containerKlass, headerKlass } = useStyles([container, header], {
    ...props,
    color: color.css(),
  });

  return (
    <Cell padding={padding} className={cx("ColorSwatch", containerKlass)}>
      <h3 className={cx("Header", headerKlass)} onClick={() => clickHandler()}>
        {name}
      </h3>
      <ColorInfo {...props} display={showInfo} />
      {displayTints && <ColorTints {...props} />}
    </Cell>
  );
};

ColorSwatch.propTypes = propTypes;
ColorSwatch.defaultProps = defaultProps;

export default ColorSwatch;
export {
  propTypes as ColorSwatchPropTypes,
  defaultProps as ColorSwatchDefaultProps,
};
