import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import chroma from "chroma-js";
import shortid from "shortid";
import { startCase } from "lodash";

/**
 * Imports other components and hooks.
 */
import { Grid } from "../layout";
import ColorSwatch from "../ColorSwatch";

/**
 * Defines the prop types.
 */
const propTypes = {
  mixes: PropTypes.number,
  mixMode: PropTypes.oneOf(["tint", "tone", "shade"]),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  mixes: 30,
  mixMode: "tint",
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see HuesMixer.md
 */
const HuesMixer = (props) => {
  const { color, mixes, mixMode } = props;
  const { containerKlass } = useStyles([container], props);

  const mixesList =
    mixes &&
    Array(mixes)
      .fill("")
      .map((item, index) => {
        const mix =
          mixMode === "tint"
            ? chroma(color).brighten(0.1 * (index + 1))
            : mixMode === "tone"
            ? chroma(color).saturate(1 * (index + 1))
            : chroma(color).darken(0.1 * (index + 1));
        return (
          <ColorSwatch
            {...props}
            key={shortid.generate()}
            color={mix}
            //name={`${startCase(mixMode)} ${index}`}
            name="&nbsp;"
            displayTints={false}
            displayTones={false}
            displayShades={false}
            padding={0}
          />
        );
      });

  return (
    <Grid gap={0} className={cx("HuesMixer", containerKlass)}>
      {mixesList}
    </Grid>
  );
};

HuesMixer.propTypes = propTypes;
HuesMixer.defaultProps = defaultProps;

export default HuesMixer;
export {
  propTypes as HuesMixerPropTypes,
  defaultProps as HuesMixerDefaultProps,
};
