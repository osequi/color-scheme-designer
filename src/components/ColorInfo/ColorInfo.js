import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import chroma from "chroma-js";

/**
 * Imports other components and hooks.
 */
import { Grid } from "../layout";

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
    <Grid columns={[1, 4]} className={cx("ColorInfo", containerKlass)}>
      <p>{color.hex("rgba")}</p>
      <p>{color.css("rgba")}</p>
      <p>{color.css("hsl")}</p>
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
