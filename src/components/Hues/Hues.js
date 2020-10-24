import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import chroma from "chroma-js";
import shortid from "shortid";

/**
 * Imports other components and hooks.
 */
import { ColorModelsDefaultProps } from "../ColorModels";
import ColorSwatch from "../ColorSwatch";
import { Grid } from "../layout";

/**
 * Defines the prop types.
 */
const propTypes = {
  modelName: PropTypes.string,
  space: PropTypes.string,
  mixes: PropTypes.number,
  displayTints: PropTypes.bool,
  displayTonesUp: PropTypes.bool,
  displayTonesDown: PropTypes.bool,
  displayShades: PropTypes.bool,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  modelName: null,
  space: null,
  mixes: 30,
  displayTints: true,
  displayTonesUp: true,
  displayTonesDown: true,
  displayShades: true,
  padding: 0,
};

/**
 * Defines the styles.
 */
const container = (props) => ({
  label: "Container",
});

/**
 * Displays the component.
 * @see Hues.md
 */
const Hues = (props) => {
  const { modelName, space, mixes } = props;
  const { containerKlass } = useStyles([container], props);

  const model = ColorModelsDefaultProps.models.find(
    (item) => item.name === modelName
  );

  const { primaryColors } = model;

  let huesList = [];
  const length = primaryColors.length;

  for (var i = 0; i < length; i++) {
    const { name: name1 } = primaryColors[i];
    const color1 = chroma(name1);

    huesList.push(
      <ColorSwatch
        {...props}
        key={shortid.generate()}
        color={color1}
        name={name1}
        modelName={modelName}
        space={space}
        mixes={mixes}
      />
    );

    const j = i === length - 1 ? 0 : i + 1;
    const { name: name2 } = primaryColors[j];
    const color2 = chroma(name2);
    const colorMix = chroma.mix(name1, name2, 0.5, space);

    huesList.push(
      <ColorSwatch
        {...props}
        key={shortid.generate()}
        color={colorMix}
        name={`${name1} + ${name2}`}
        modelName={modelName}
        space={space}
        mixes={mixes}
      />
    );
  }

  return (
    <Grid
      gap={0}
      columns={[1, 1, 1, huesList.length / 2]}
      className={cx("Hues", containerKlass)}
    >
      {huesList}
    </Grid>
  );
};

Hues.propTypes = propTypes;
Hues.defaultProps = defaultProps;

export default Hues;
export { propTypes as HuesPropTypes, defaultProps as HuesDefaultProps };
