import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */

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
 * @see Search.md
 */
const Search = (props) => {
  const { containerKlass } = useStyles([container], props);

  return <div className={cx("Search", containerKlass)}>Search</div>;
};

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
export { propTypes as SearchPropTypes, defaultProps as SearchDefaultProps };
