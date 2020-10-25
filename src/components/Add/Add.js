import React, { useState } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, createColorFromSpace, colorSpaces } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import ColorTune from "../ColorTune";

const colorSpaceNames = colorSpaces && colorSpaces.map((item) => item.name);

/**
 * Defines the prop types.
 */
const propTypes = {
  input: PropTypes.string,
  space: PropTypes.oneOf(colorSpaceNames),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  input: null,
  space: colorSpaceNames[0],
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see Add.md
 */
const Add = (props) => {
  const { input, space } = props;
  const { containerKlass } = useStyles([container], props);

  const [inputValue, setInputValue] = useState(input);
  const [spaceValue, setSpaceValue] = useState(space);
  const [color, setColor] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSpaceChange = (event) => {
    setSpaceValue(event.target.value);
  };

  const handleClick = () => {
    const c = createColorFromSpace(inputValue, spaceValue);
    if (typeof c === "object") {
      setColor(c);
    } else {
      setErrorMessage(c);
    }
  };

  const spacesList =
    colorSpaceNames &&
    colorSpaceNames.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });

  const colorSpace = colorSpaces.find((item) => item.name === spaceValue);
  const { description, example } = colorSpace;
  const hint = `${description} Example: ${example}`;

  return (
    <div className={cx("Add", containerKlass)}>
      <label>Add a color:</label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <select name="AddColor" value={spaceValue} onChange={handleSpaceChange}>
        {spacesList}
      </select>
      <button onClick={handleClick}>Add</button>
      <p>{hint}</p>
      <p>{errorMessage}</p>
      <ColorTune color={color} />
    </div>
  );
};

Add.propTypes = propTypes;
Add.defaultProps = defaultProps;

export default Add;
export { propTypes as AddPropTypes, defaultProps as AddDefaultProps };
