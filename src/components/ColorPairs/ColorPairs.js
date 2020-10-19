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
import { Section as Section1 } from "../semantic-elements/SemanticElements";
import { Section as Section2 } from "../semantic-elements/SemanticElements";

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

  Section1.defaultProps.title = "Legible color pairs";
  Section1.defaultProps.display = true;

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

  Section2.defaultProps.title = "Not legible color pairs";
  Section2.defaultProps.display = true;

  return (
    <Grid columns={1} className={cx("ColorPairs", containerKlass)}>
      <Grid className="Legibles" as={Section1}>
        {legibleColorPairsList}
      </Grid>
      <Grid className="NotLegibles" as={Section2}>
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
