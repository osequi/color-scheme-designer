import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import CMY from "../../data/colorModel.CMY";
import RGB from "../../data/colorModel.RGB";
import RYB from "../../data/colorModel.RYB";
import {
  colorModelPropTypes,
  colorModelDefaultProps,
} from "../../data/colorModel.props";

/**
 * Defines the prop types.
 */
const propTypes = {
  models: PropTypes.arrayOf(PropTypes.shape(colorModelPropTypes)),
  selected: PropTypes.string,
  handleModelChange: PropTypes.func,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  models: [CMY, RGB, RYB],
  selected: "CMY",
  handleModelChange: () => {
    console.log("Model change");
  },
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see ColorModels.md
 */
const ColorModels = (props) => {
  const { models, selected, handleModelChange } = props;
  const { containerKlass } = useStyles([container], props);

  const modelsList =
    models &&
    models.map((item, index) => {
      const { name } = item;
      return (
        <option key={index} value={name}>
          {name}
        </option>
      );
    });

  return (
    <div className={cx("ColorModels", containerKlass)}>
      <label>Model</label>
      <select
        name="ColorModels"
        value={selected}
        onChange={handleModelChange()}
      >
        {modelsList}
      </select>
    </div>
  );
};

ColorModels.propTypes = propTypes;
ColorModels.defaultProps = defaultProps;

export default ColorModels;
export {
  propTypes as ColorModelsPropTypes,
  defaultProps as ColorModelsDefaultProps,
};
