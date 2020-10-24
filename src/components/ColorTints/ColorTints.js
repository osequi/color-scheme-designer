import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import chroma from "chroma-js";
import shortid from "shortid";

/**
 * Imports other components and hooks.
 */
import { Grid } from "../layout";
import ColorSwatch from "../ColorSwatch";

/**
 * Defines the prop types.
 */
const propTypes = {
  tints: PropTypes.number,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  tints: 10,
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see ColorTints.md
 */
const ColorTints = (props) => {
  const { color, tints } = props;
  const { containerKlass } = useStyles([container], props);

  const tintsList =
    tints &&
    Array(tints)
      .fill("")
      .map((item, index) => {
        const tint = chroma(color).darken(0.1 * (index + 1));
        return (
          <ColorSwatch
            {...props}
            key={shortid.generate()}
            color={tint}
            name={`Tint ${index}`}
            displayTints={false}
            displayTones={false}
            displayShades={false}
            padding={0}
          />
        );
      });

  return (
    <Grid gap={0} className={cx("ColorTints", containerKlass)}>
      {tintsList}
    </Grid>
  );
};

ColorTints.propTypes = propTypes;
ColorTints.defaultProps = defaultProps;

export default ColorTints;
export {
  propTypes as ColorTintsPropTypes,
  defaultProps as ColorTintsDefaultProps,
};
