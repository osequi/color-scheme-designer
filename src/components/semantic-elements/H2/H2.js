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
  level: 2,
};

/**
 * Displays a `<h2>` element.
 */
const H2 = (props) => {
  return <Headings {...props} />;
};

H2.propTypes = propTypes;
H2.defaultProps = defaultProps;

export default H2;
export { propTypes as H2PropTypes, defaultProps as H2DefaultProps };
