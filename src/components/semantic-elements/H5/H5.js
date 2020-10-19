import React from "react";

/**
 * Imports other components and hooks
 */
import Headings, { HeadingsPropTypes, HeadingsDefaultProps } from "../Headings";

/**
 * Defines the prop types
 */
const propTypes = {
  ...HeadingsPropTypes,
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...HeadingsDefaultProps,
  level: 5,
};

/**
 * Displays a `<h5>` element.
 */
const H5 = (props) => {
  return <Headings {...props} />;
};

H5.propTypes = propTypes;
H5.defaultProps = defaultProps;

export default H5;
export { propTypes as H5PropTypes, defaultProps as H5DefaultProps };
