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
  level: 3,
};

/**
 * Displays a `<h3>` element.
 */
const H3 = (props) => {
  return <Headings {...props} />;
};

H3.propTypes = propTypes;
H3.defaultProps = defaultProps;

export default H3;
export { propTypes as H3PropTypes, defaultProps as H3DefaultProps };
