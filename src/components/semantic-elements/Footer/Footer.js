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
  as: "footer",
};

/**
 * Displays a `<footer>` element.
 */
const Footer = (props) => {
  return <SemanticElements {...props} />;
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
export { propTypes as FooterPropTypes, defaultProps as FooterDefaultProps };
