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
import Grid from "../layout/Grid";
import { Section } from "../semantic-elements/";

/**
 * Defines the prop types.
 */
const propTypes = {
  colors: PropTypes.shape(ColorsPropTypes),
};

/**
 * Defines the default props.
 */
const defaultProps = {
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

  const section1Props = { title: "Legible color pairs", display: true };
  const section2Props = { title: "Not legible color pairs", display: true };

  return (
    <Grid columns={1} className={cx("ColorPairs", containerKlass)}>
      <Grid className="Legibles" as={Section} asProps={section1Props}>
        {legibleColorPairsList}
      </Grid>
      <Grid className="NotLegibles" as={Section} asProps={section2Props}>
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
