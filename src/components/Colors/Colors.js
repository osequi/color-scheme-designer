import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, useColorPairs } from "../../hooks";
import shortid from "shortid";
import { startCase } from "lodash";

/**
 * Imports other components and hooks.
 */
import Color, { ColorPropTypes } from "../Color";
import ColorPair from "../ColorPair";
import { Grid } from "../layout/";
import { Section } from "../semantic-elements/";
import { Text } from "../typography";

/**
 * Defines the prop types.
 */
const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape(ColorPropTypes)),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  colors: [
    { id: shortid.generate(), name: "light", value: "#f7f5e9" },
    { id: shortid.generate(), name: "dark", value: "#464646" },
    { id: shortid.generate(), name: "highlight", value: "#7040ff" },
    { id: shortid.generate(), name: "shade", value: "#cdcdcd" },
  ],
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Returns an array of color pairs connected by their name.
 * Example: ('light', colorPairs) => ['dark on light', 'highlight on light', ...]
 */
const findColorPairSiblings = (color, colorPairs) => {
  const { name } = color;

  const siblings =
    colorPairs &&
    colorPairs.filter((item) => item.name.includes(`on ${startCase(name)}`));

  return siblings;
};

/**
 * Displays color siblings with the `<ColorPair>` component
 */
const displayColorSiblings = (siblings) => {
  const cells =
    siblings &&
    siblings.map((item) => {
      const { name, contrast } = item;

      // Light on Dark => Light
      const nameSimplified = name.split(" ")[0];

      const content = `${nameSimplified} — ${contrast}`;
      return <ColorPair {...item} content={content} />;
    });

  return <Grid gap={0}>{cells}</Grid>;
};

/**
 * Displays the component.
 * @see Colors.md
 */
const Colors = (props) => {
  const { colors } = props;
  const { containerKlass } = useStyles([container], props);

  const { legible, notLegible } = useColorPairs(colors);
  const colorPairs = [...legible, ...notLegible];

  /**
   * Defines the other color to pair with.
   * This will be the text color on the swatch.
   * @type {Array}
   */
  const pairs = [colors[1], colors[0], colors[0], colors[1]];

  const colorsList =
    colors &&
    colors.map((item, index) => {
      const { id } = item;

      const pair = pairs[index];
      const siblings = findColorPairSiblings(item, colorPairs);
      const content = displayColorSiblings(siblings);

      return <Color key={id} pair={pair} content={content} {...item} />;
    });

  const asProps = {
    title: <Text variant="subtitle">Colors</Text>,
    heading: { level: 2 },
    display: true,
  };

  return (
    <Grid
      columns={[1, 2, 4]}
      className={cx("Colors", containerKlass)}
      as={Section}
      asProps={asProps}
    >
      {colorsList}
    </Grid>
  );
};

Colors.propTypes = propTypes;
Colors.defaultProps = defaultProps;

export default Colors;
export { propTypes as ColorsPropTypes, defaultProps as ColorsDefaultProps };
