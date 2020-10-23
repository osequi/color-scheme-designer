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
  as: "section",
};

/**
 * Displays a `<section>` element.
 */
const Section = (props) => {
  return <SemanticElements {...props} />;
};

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
export { propTypes as SectionPropTypes, defaultProps as SectionDefaultProps };
