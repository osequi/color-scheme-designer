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

  return (
    <Grid className={cx("ColorInfo", containerKlass)}>
      <Cell>{color.hex("rgb")}</Cell>
      <Cell>{color.css("rgba")}</Cell>
      <Cell>{color.css("hsl")}</Cell>
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
