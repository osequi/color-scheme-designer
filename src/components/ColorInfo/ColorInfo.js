import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import {
  useStyles,
  useMaximumContrast,
  useColorValue,
  useColorContrast,
} from "../../hooks";
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

const largeFontBold = (props) => ({
  fontSize: "18.66px",
  fontWeight: "bold",
});

const largeFont = (props) => ({
  fontSize: "24px",
});

/**
 * Displays the component.
 * @see ColorInfo.md
 */
const ColorInfo = (props) => {
  const { color, modelName, space } = props;

  /**
   * Loads the styles.
   */
  const { containerKlass, largeFontKlass, largeFontBoldKlass } = useStyles(
    [container, largeFont, largeFontBold],
    props
  );

  const name = color.name();
  const name2 = name.includes("#") ? null : name;

  const asProps1 = { title: "Info", display: true };
  const asProps2 = { title: "Properties", display: true };
  const asProps3 = { title: "Suggestions", display: true };

  /**
   * Temperature.
   * - Just informative ...
   * - When trying to choose an opossite color with AAA it's not working ...
   * - I mean warm on cool doesn't mean it's necessarily AAA.
   */
  const temp = color.temperature();
  const warm = temp < 5000 ? "warm (yellowish)" : "cool (bluish)";

  /**
   * HSL
   * - So far so good
   */
  const [textColor, contrast, aa, aaa] = useMaximumContrast(color);

  const s = useColorValue(color.get("hsl.s") * 100, 2);
  const l = useColorValue(color.get("hsl.l") * 100, 2);

  const pureColor = l === 100 || l === 0 || l === 50;

  const black = l < 50 ? useColorValue((50 - l) * 2, 2) : null;
  const white = l > 50 ? useColorValue((l - 50) * 2, 2) : null;

  const pureText = black ? "black" : white ? "white" : null;
  const pureValue = black ? black : white;

  const largeText1 = "This color best supports large texts.";
  const largeText2 =
    "Large text is defined as 14 point (typically 18.66px) and bold or larger.";
  const largeText3 = "Or 18 point (typically 24px) or larger.";

  const colorTune = "This color can be fine tuned to support also small text.";

  const useless = "THis color is useless.";

  const fineTuneMessage = aaa ? null : aa ? (
    <>
      <p>{largeText1}</p>
      <p className={cx(largeFontBoldKlass)}>{largeText2}</p>
      <p className={cx(largeFontKlass)}>{largeText3}</p>
      <p>{colorTune}</p>
    </>
  ) : (
    <p>{useless}</p>
  );

  return (
    <Grid
      columns={[1, 3]}
      gap={1}
      className={cx("ColorInfo", containerKlass)}
      as={Article}
    >
      <Grid className={cx("Info")} as={Aside} asProps={asProps1}>
        <Cell>{name2 && name2}</Cell>
        <Cell>Nr: {chroma(color.hex()).num()}</Cell>
        <Cell>Hex: {color.hex()}</Cell>
        <Cell>RGB: {color.css("rgb")}</Cell>
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
        <Cell>{pureColor && "This is a pure color."}</Cell>
        <Cell>Amount of gray in the color: {s}%</Cell>
        <Cell>
          {pureText && `Amount of ${pureText} in the color: ${pureValue}%`}
        </Cell>
      </Grid>
      <Grid className={cx("Suggestions")} as={Aside} asProps={asProps3}>
        <Cell>
          Text color (white or black): {textColor.name()}, contrast: {contrast}
          {aaa ? ", AAA" : ""} {!aaa && aa ? ", AA" : ""}
        </Cell>
        <Cell>{fineTuneMessage}</Cell>
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
