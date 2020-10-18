import React, { useState } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import Colors, { ColorsPropTypes, ColorsDefaultProps } from "../Colors";
import ColorPairs, {
  ColorPairsPropTypes,
  ColorPairsDefaultProps,
} from "../ColorPairs";

/**
 * Defines the prop types.
 */
const propTypes = {
  colors: PropTypes.shape(ColorsPropTypes),
  colorPairs: PropTypes.shape(ColorPairsPropTypes),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  colors: ColorsDefaultProps,
  colorPairs: ColorPairsDefaultProps,
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see Designer.md
 */
const Designer = (props) => {
  const { colors: defaultColors } = props;

  const [colors, setColors] = useState(defaultColors);

  /**
   * Loads styles.
   */
  const { containerKlass } = useStyles([container], colors);

  return (
    <div className={cx("Designer", containerKlass)}>
      <h3>Colors</h3>
      <Colors {...colors} />
      <h3>Color pairs</h3>
      <ColorPairs {...colors} />
    </div>
  );
};

Designer.propTypes = propTypes;
Designer.defaultProps = defaultProps;

export default Designer;
export { propTypes as DesignerPropTypes, defaultProps as DesignerDefaultProps };
