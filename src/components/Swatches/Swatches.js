import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import Swatch, { SwatchPropTypes, SwatchDefaultProps } from "../Swatch";

/**
 * Defines the prop types.
 */
const propTypes = {
  colorPairs: PropTypes.arrayOf(PropTypes.shape(SwatchPropTypes)),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  colorPairs: [SwatchDefaultProps],
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see Swatches.md
 */
const Swatches = (props) => {
  const { colorPairs } = props;
  const { containerKlass } = useStyles([container], props);

  const colorPairsList =
    colorPairs &&
    colorPairs.map((item) => {
      const { id } = item;
      return <Swatch key={id} {...item} />;
    });

  return <div className={cx("Swatches", containerKlass)}>{colorPairsList}</div>;
};

Swatches.propTypes = propTypes;
Swatches.defaultProps = defaultProps;

export default Swatches;
export { propTypes as SwatchesPropTypes, defaultProps as SwatchesDefaultProps };
