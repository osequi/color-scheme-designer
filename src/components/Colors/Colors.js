import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, createColorFromSpace } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import Color, { ColorPropTypes, ColorDefaultProps } from "../Color";
import { Grid, Cell } from "../layout";
import { Section } from "../semantic-elements";

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
  colors: [ColorDefaultProps],
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see Colors.md
 */
const Colors = (props) => {
  const { colors } = props;
  const { containerKlass } = useStyles([container], props);

  /**
   * Creates the colors.
   */
  const colorsWithChroma =
    colors &&
    colors.map((item) => {
      const { value, space } = item;
      const { name: spaceName } = space;

      const createColor = createColorFromSpace(value, spaceName);
      const newColor = typeof createColor === "object" ? createColor : null;
      return { ...item, chroma: newColor };
    });

  /**
   * Prepares the text and background colors
   */
  const textColor = colorsWithChroma.find((item) => item.name === "Text");
  const backgroundColor = colorsWithChroma.find(
    (item) => item.name === "Background"
  );

  /**
   * Displays the colors
   */
  const colorsList =
    colorsWithChroma &&
    colorsWithChroma.map((item) => {
      const { id } = item;
      return (
        <Cell
          key={id}
          as={Color}
          asProps={{
            ...item,
            textColor: textColor,
            backgroundColor: backgroundColor,
          }}
        />
      );
    });

  const asProps = { title: "Colors" };

  return (
    <Grid
      columns={[2, 4]}
      gap={1}
      padding={1}
      as={Section}
      asProps={asProps}
      className={cx("Colors", containerKlass)}
    >
      {colorsList}
    </Grid>
  );
};

Colors.propTypes = propTypes;
Colors.defaultProps = defaultProps;

export default Colors;
export { propTypes as ColorsPropTypes, defaultProps as ColorsDefaultProps };
