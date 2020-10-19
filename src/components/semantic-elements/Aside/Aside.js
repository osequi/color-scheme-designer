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
  as: "aside",
};

/**
 * Displays an `<article>` element.
 */
const Aside = (props) => {
  return <SemanticElements {...props} />;
};

Aside.propTypes = propTypes;
Aside.defaultProps = defaultProps;

export default Aside;
export { propTypes as AsidePropTypes, defaultProps as AsideDefaultProps };
