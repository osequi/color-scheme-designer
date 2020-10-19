import React, { createElement } from "react";
import PropTypes from "prop-types";
import { isNil, startCase } from "lodash";

/**
 * Imports other components and hooks
 */
import Headings, { HeadingsPropTypes, HeadingsDefaultProps } from "../Headings";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The type of the element.
   * Like `nav`, 'article'
   * @type {string}
   */
  as: PropTypes.oneOf([
    "article",
    "aside",
    "footer",
    "header",
    "heading",
    "nav",
    "section",
  ]),
  /**
   * The heading of the element.
   * Used to insert (a mostly hidden_ heading tag like `<nav><h3>Menu</h3>...</nav>`.
   * It can be overwritten by the `title` and `display` props.
   * @type {HeadingsPropTypes}
   */
  heading: PropTypes.shape(HeadingsPropTypes),
  /**
   * The title of the element.
   * Overwrites the `{heading: children}` property.
   * It's easier to use `<Nav title="Menu" ..>` than `<Nav heading={{children: 'Menu'}} ..>`.
   * @type {string}
   */
  title: PropTypes.string,
  /**
   * Display the heading?
   * Overwrites the `{heading: display}` property.
   * It's easier to use `<Nav title="Menu" display={false} ..>` than `<Nav heading={{children: 'Menu', display: false}} ..>`
   * @type {bool}
   */
  display: PropTypes.bool,
  /**
   * The content to be displayed.
   * @type {any}
   */
  children: PropTypes.any,
  /**
   * The className of the element.
   * It's optional to set.
   * Serves the technical purpose of style chaining.
   * @type {string}
   */
  className: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  as: null,
  heading: HeadingsDefaultProps,
  title: null,
  display: false,
  children: null,
  className: null,
};

/**
 * Checks if all required props are provided.
 * @param  {object} props The props object
 * @return {boolean}      true, when all required props are set
 */
const requiredPropsAreSet = (props) => {
  const { children } = props;

  return !isNil(children);
};

/**
 * Sets the className when className is empty.
 * @param  {object} props The props object
 * @return {string}       The className
 */
const nonEmptyClassname = (props) => {
  const { className, as, title } = props;

  if (className) return className;

  /**
   * Returns `ClassName` when the other props are not defined.
   */
  if (!className && !as && !title) return "ClassName";

  /**
   * Generates a className.
   */
  const as2 = as ? startCase(as) : "";
  const title2 = title ? startCase(title) : "";

  return `${as2}${title2}`;
};

/**
 * Displays a semantic element.
 * This is a factory component.
 * It's better to use specific components like `<Article>` which has their props properly set up.
 */
const SemanticElements = (props) => {
  const { as, heading, title, children, display } = props;

  /**
   * Displays nothing if the mandatory props are not defined.
   */
  if (!requiredPropsAreSet(props)) return null;

  /**
   * Overwrites the `heading` props.
   */
  const heading2 = { ...heading, children: title, display: display };

  /**
   * Always displays a className.
   * When `className` is not specified it will become the tag name combined with the title.
   * Like `SectionDemo` for `<section title="Demo">`.
   */
  const className = nonEmptyClassname(props);

  /**
   * Prepares props for createElement
   */
  const props2 = { className: className };
  const children2 = (
    <>
      {<Headings {...heading2} />}
      {children}
    </>
  );

  return createElement(as, props2, children2);
};

SemanticElements.propTypes = propTypes;
SemanticElements.defaultProps = defaultProps;

export default SemanticElements;
export {
  propTypes as SemanticElementsPropTypes,
  defaultProps as SemanticElementsDefaultProps,
};
