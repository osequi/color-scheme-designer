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
  level: 1,
};

/**
 * Displays a `<h1>` element.
 */
const H1 = (props) => {
  return <Headings {...props} />;
};

H1.propTypes = propTypes;
H1.defaultProps = defaultProps;

export default H1;
export { propTypes as H1PropTypes, defaultProps as H1DefaultProps };
