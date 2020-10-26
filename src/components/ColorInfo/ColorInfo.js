import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import chroma from "chroma-js";

/**
 * Imports other components and hooks.
 */
import { Grid, Cell } from "../layout";
import { Article, Aside } from "../semantic-elements";

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

  const asProps1 = { title: "Info", display: true };
  const asProps2 = { title: "Properties", display: true };

  const temp = color.temperature();
  const warm = temp < 5000 ? "warm (yellowish)" : "cool (bluish)";

  return (
    <Grid
      columns={[1, 2]}
      gap={1}
      className={cx("ColorInfo", containerKlass)}
      as={Article}
    >
      <Grid className={cx("Info")} as={Aside} asProps={asProps1}>
        <Cell>{name2 && name2}</Cell>
        <Cell>Nr: {chroma(color.hex()).num()}</Cell>
        <Cell>RGB: {color.hex("rgb")}</Cell>
        <Cell>RGBa: {color.css("rgba")}</Cell>
        <Cell>HSL: {color.css("hsl")}</Cell>
        <Cell>
          HSV:{" "}
          {JSON.stringify(color.hsv().map((item) => Number(item.toFixed(2))))}
        </Cell>
        <Cell>
          HSI:{" "}
          {JSON.stringify(color.hsi().map((item) => Number(item.toFixed(2))))}
        </Cell>
        <Cell>
          Lab:{" "}
          {JSON.stringify(color.lab().map((item) => Number(item.toFixed(2))))}
        </Cell>
        <Cell>
          LCH:{" "}
          {JSON.stringify(color.lch().map((item) => Number(item.toFixed(2))))}
        </Cell>
        <Cell>
          HCL:{" "}
          {JSON.stringify(color.hcl().map((item) => Number(item.toFixed(2))))}
        </Cell>
      </Grid>
      <Grid className={cx("Properties")} as={Aside} asProps={asProps2}>
        <Cell>
          Luminance: {Number(color.luminance().toFixed(2))} (0 - black, 1 -
          white)
        </Cell>
        <Cell>
          Temperature: {temp}, {warm}
        </Cell>
      </Grid>
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
