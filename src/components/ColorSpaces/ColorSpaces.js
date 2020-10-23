import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import { colorSpacePropTypes } from "../../data/colorSpace.props";

/**
 * Defines the prop types.
 */
const propTypes = {
  spaces: PropTypes.arrayOf(PropTypes.shape(colorSpacePropTypes)),
  selected: PropTypes.string,
  handleSpaceChange: PropTypes.func,
};

/**
 * Defines the default props.
 * @see https://gka.github.io/chroma.js/
 */
const defaultProps = {
  spaces: [
    {
      name: "rgb",
    },
    {
      name: "hsl",
    },
    {
      name: "hsv",
    },
    {
      name: "lab",
    },
    {
      name: "lch",
    },
    {
      name: "hcl",
    },
    {
      name: "cmyk",
    },
    {
      name: "gl",
    },
  ],
  selected: "rgb",
  handleModelChange: () => {
    console.log("Space change");
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
 * @see ColorSpaces.md
 */
const ColorSpaces = (props) => {
  const { spaces, selected, handleSpaceChange } = props;
  const { containerKlass } = useStyles([container], props);

  const spacesList =
    spaces &&
    spaces.map((item, index) => {
      const { name } = item;
      return (
        <option key={index} value={name}>
          {name}
        </option>
      );
    });

  return (
    <div className={cx("ColorSpaces", containerKlass)}>
      <label>Space</label>
      <select
        name="ColorSpaces"
        value={selected}
        onChange={handleSpaceChange()}
      >
        {spacesList}
      </select>
    </div>
  );
};

ColorSpaces.propTypes = propTypes;
ColorSpaces.defaultProps = defaultProps;

export default ColorSpaces;
export {
  propTypes as ColorSpacesPropTypes,
  defaultProps as ColorSpacesDefaultProps,
};
