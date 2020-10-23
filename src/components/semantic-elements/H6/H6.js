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
  level: 6,
};

/**
 * Displays a `<h6>` element.
 */
const H6 = (props) => {
  return <Headings {...props} />;
};

H6.propTypes = propTypes;
H6.defaultProps = defaultProps;

export default H6;
export { propTypes as H6PropTypes, defaultProps as H6DefaultProps };
