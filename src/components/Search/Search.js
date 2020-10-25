import React, { useState } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, createColorByName } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import ColorTune from "../ColorTune";

/**
 * Defines the prop types.
 */
const propTypes = {
  search: PropTypes.string,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  search: "",
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see Search.md
 */
const Search = (props) => {
  const { search } = props;
  const { containerKlass } = useStyles([container], props);

  const [searchValue, setSearchValue] = useState(search);
  const [color, setColor] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClick = () => {
    const c = createColorByName(searchValue);
    if (typeof c === "object") {
      setColor(c);
    } else {
      setErrorMessage(c);
    }
  };

  return (
    <div className={cx("Search", containerKlass)}>
      <label>Search for a color:</label>
      <input type="text" value={searchValue} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <p>{errorMessage}</p>
      <ColorTune color={color} />
    </div>
  );
};

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
export { propTypes as SearchPropTypes, defaultProps as SearchDefaultProps };
