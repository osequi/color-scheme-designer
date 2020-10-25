import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import chroma from "chroma-js";

/**
 * Imports other components and hooks.
 */
import { Grid, Cell } from "../layout";

/**
 * Defines the prop types.
 */
const propTypes = {
  display: PropTypes.bool,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  display: false,
};

/**
 * Defines the styles.
 */
const container = (props) => ({
  display: props.display ? "grid" : "none",
  borderTop: "1px solid",
});

/**
 * Displays the component.
 * @see ColorInfo.md
 */
const ColorInfo = (props) => {
  const { color, modelName, space } = props;
  const { containerKlass } = useStyles([container], props);

  const name = color.name();
  const name2 = name.includes("#") ? null : name;

  console.log(color.lab().map((item) => item.toFixed(2)));

  return (
    <Grid className={cx("ColorInfo", containerKlass)}>
      <Cell>{name2 && name2}</Cell>
      <Cell>Nr: {color.num()}</Cell>
      <Cell>RGB: {color.hex("rgb")}</Cell>
      <Cell>RGBa: {color.css("rgba")}</Cell>
      <Cell>HSL: {color.css("hsl")}</Cell>
      <Cell>
        HSV: {JSON.stringify(color.hsv().map((item) => item.toFixed(2)))}
      </Cell>
      <Cell>
        HSI: {JSON.stringify(color.hsi().map((item) => item.toFixed(2)))}
      </Cell>
      <Cell>
        Lab: {JSON.stringify(color.lab().map((item) => item.toFixed(2)))}
      </Cell>
      <Cell>
        LCH: {JSON.stringify(color.lch().map((item) => item.toFixed(2)))}
      </Cell>
      <Cell>
        HCL: {JSON.stringify(color.hcl().map((item) => item.toFixed(2)))}
      </Cell>
    </Grid>
  );
};

ColorInfo.propTypes = propTypes;
ColorInfo.defaultProps = defaultProps;

export default ColorInfo;
export {
  propTypes as ColorInfoPropTypes,
  defaultProps as ColorInfoDefaultProps,
};
