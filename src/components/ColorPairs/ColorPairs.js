import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, useColorPairs } from "../../hooks";
import shortid from "shortid";

/**
 * Imports other components and hooks.
 */
import ColorPair, {
  ColorPairPropTypes,
  ColorPairDefaultProps,
} from "../ColorPair";
import { ColorsPropTypes, ColorsDefaultProps } from "../Colors";
import { Grid } from "../layout";
import { Section } from "../semantic-elements/";
import { Text } from "../typography";

/**
 * Defines the prop types.
 */
const propTypes = {
  ...ColorsPropTypes,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  ...ColorsDefaultProps,
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

  const { legible, notLegible } = useColorPairs(colors);

  const legibleColorPairsList =
    legible &&
    legible.map((item) => {
      const id = shortid.generate();
      return (
        <ColorPair key={id} id={id} numberOfItems={legible.length} {...item} />
      );
    });

  const notLegibleColorPairsList =
    notLegible &&
    notLegible.map((item) => {
      const id = shortid.generate();
      return (
        <ColorPair
          key={id}
          id={id}
          numberOfItems={notLegible.length}
          {...item}
        />
      );
    });

  const section0Props = { title: <Text variant="subtitle">Color pairs</Text> };

  const section1Props = {
    title: <Text variant="subtitle">Legible color pairs</Text>,
    display: true,
  };

  const section2Props = {
    title: <Text variant="subtitle">Not legible color pairs</Text>,
    display: true,
  };

  return (
    <Grid
      columns={[1, 2]}
      gap={1}
      className={cx("ColorPairs", containerKlass)}
      as={Section}
      asProps={section0Props}
    >
      <Grid gap={1} className="Legibles" as={Section} asProps={section1Props}>
        {legibleColorPairsList}
      </Grid>
      <Grid
        gap={1}
        className="NotLegibles"
        as={Section}
        asProps={section2Props}
      >
        {notLegibleColorPairsList}
      </Grid>
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
