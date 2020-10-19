import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import shortid from "shortid";

/**
 * Imports other components and hooks.
 */
import ColorPair, {
  ColorPairPropTypes,
  ColorPairDefaultProps,
} from "../ColorPair";
import { color, ColorsPropTypes, ColorsDefaultProps } from "../Colors";
import Grid from "../layout/Grid";

/**
 * Defines the prop types.
 */
const propTypes = {
  colorPairs: PropTypes.arrayOf(PropTypes.shape(ColorPairPropTypes)),
  colors: PropTypes.shape(ColorsPropTypes),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  colorPairs: [ColorPairDefaultProps],
  colors: ColorsDefaultProps,
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see ColorPairs.md
 */
const ColorPairs = (props) => {
  const { colors } = props;
  const { containerKlass } = useStyles([container], props);

  const colorPairs = [
    {
      id: shortid.generate(),
      name: "normal",
      color: color("dark"),
      backgroundColor: color("light"),
    },
    {
      id: shortid.generate(),
      name: "inverted",
      color: color("light"),
      backgroundColor: color("dark"),
    },
    {
      id: shortid.generate(),
      name: "highlighted",
      color: color("highlight"),
      backgroundColor: color("light"),
    },
    {
      id: shortid.generate(),
      name: "highlightedInverted",
      color: color("light"),
      backgroundColor: color("highlight"),
    },
    {
      id: shortid.generate(),
      name: "highlightedDark",
      color: color("highlight"),
      backgroundColor: color("dark"),
    },
    {
      id: shortid.generate(),
      name: "highlightedDarkInverted",
      color: color("dark"),
      backgroundColor: color("highlight"),
    },
    {
      id: shortid.generate(),
      name: "shaded",
      color: color("shade"),
      backgroundColor: color("light"),
    },
    {
      id: shortid.generate(),
      name: "shadedInverted",
      color: color("light"),
      backgroundColor: color("shade"),
    },
    {
      id: shortid.generate(),
      name: "shadedDark",
      color: color("shade"),
      backgroundColor: color("dark"),
    },
    {
      id: shortid.generate(),
      name: "shadedDarkInverted",
      color: color("dark"),
      backgroundColor: color("shade"),
    },
    {
      id: shortid.generate(),
      name: "shadedHighlighted",
      color: color("shade"),
      backgroundColor: color("highlight"),
    },
    {
      id: shortid.generate(),
      name: "shadedHighlightedInverted",
      color: color("highlight"),
      backgroundColor: color("shade"),
    },
  ];

  const colorPairsList =
    colorPairs &&
    colorPairs.map((item) => {
      const { id } = item;
      return <ColorPair key={id} numberOfItems={colorPairs.length} {...item} />;
    });

  return (
    <Grid columns={colors.length} className={cx("ColorPairs", containerKlass)}>
      {colorPairsList}
    </Grid>
  );
};

ColorPairs.propTypes = propTypes;
ColorPairs.defaultProps = defaultProps;

export default ColorPairs;
export {
  propTypes as ColorPairsPropTypes,
  defaultProps as ColorPairsDefaultProps,
};
