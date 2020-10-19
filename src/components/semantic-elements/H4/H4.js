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
  level: 4,
};

/**
 * Displays a `<h4>` element.
 */
const H4 = (props) => {
  return <Headings {...props} />;
};

H4.propTypes = propTypes;
H4.defaultProps = defaultProps;

export default H4;
export { propTypes as H4PropTypes, defaultProps as H4DefaultProps };
