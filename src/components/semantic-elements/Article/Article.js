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
  as: "article",
  display: true,
};

/**
 * Displays an `<article>` element.
 */
const Article = (props) => {
  return <SemanticElements {...props} />;
};

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;
export { propTypes as ArticlePropTypes, defaultProps as ArticleDefaultProps };
