import React, { useState } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import ColorModels, { ColorModelsDefaultProps } from "../ColorModels";
import ColorSpaces, { ColorSpacesDefaultProps } from "../ColorSpaces";
import Hues from "../Hues";

import { Grid } from "../layout";
import { Section } from "../semantic-elements";
import { Text } from "../typography";

/**
 * Defines the prop types.
 */
const propTypes = {};

/**
 * Defines the default props.
 */
const defaultProps = {};

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
  const { containerKlass } = useStyles([container], props);

  const [model, setModel] = useState(ColorModelsDefaultProps.models[0].name);
  const [space, setSpace] = useState(ColorSpacesDefaultProps.spaces[0].name);

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleSpaceChange = (event) => {
    setSpace(event.target.value);
  };

  const asProps = {
    title: "The designer",
  };

  return (
    <Grid
      className={cx("Designer", containerKlass)}
      as={Section}
      asProps={asProps}
    >
      <ColorModels
        selected={model}
        handleModelChange={() => handleModelChange}
      />
      <ColorSpaces
        selected={space}
        handleSpaceChange={() => handleSpaceChange}
      />
      <Hues modelName={model} space={space} />
    </Grid>
  );
};

Designer.propTypes = propTypes;
Designer.defaultProps = defaultProps;

export default Designer;
export { propTypes as DesignerPropTypes, defaultProps as DesignerDefaultProps };
