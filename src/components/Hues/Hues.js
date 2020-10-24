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
  tints: PropTypes.number,
  tones: PropTypes.number,
  shades: PropTypes.number,
  displayTints: PropTypes.bool,
  displayTones: PropTypes.bool,
  displayShades: PropTypes.bool,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  modelName: null,
  space: null,
  tints: 50,
  tones: 10,
  shades: 10,
  displayTints: true,
  displayTones: true,
  displayShades: true,
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
  const { modelName, space, tints, tones, shades } = props;
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
        tints={tints}
        tones={tones}
        shades={shades}
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
        tints={tints}
        tones={tones}
        shades={shades}
      />
    );
  }

  return (
    <Grid
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
