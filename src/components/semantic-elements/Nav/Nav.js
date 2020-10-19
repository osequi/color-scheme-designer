import React from "react";

/**
 * Imports other components and hooks
 */
import SemanticElements, {
  SemanticElementsPropTypes,
  SemanticElementsDefaultProps,
} from "../SemanticElements";

/**
 * Defines the prop types
 */
const propTypes = {
  ...SemanticElementsPropTypes,
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...SemanticElementsDefaultProps,
  as: "nav",
};

/**
 * Displays a `<nav>` element.
 */
const Nav = (props) => {
  return <SemanticElements {...props} />;
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
export { propTypes as NavPropTypes, defaultProps as NavDefaultProps };
