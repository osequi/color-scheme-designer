import React, { useState } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

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
  const [colorName, setColorName] = useState();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClick = () => {
    setColorName(searchValue);
  };

  return (
    <div className={cx("Search", containerKlass)}>
      <label>Search for a color:</label>
      <input type="text" value={searchValue} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <ColorTune colorName={colorName} />
    </div>
  );
};

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
export { propTypes as SearchPropTypes, defaultProps as SearchDefaultProps };
