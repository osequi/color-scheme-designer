import React, { createElement } from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The level of the element.
   * @type {number}
   */
  level: PropTypes.number,
  /**
   * Display the element?
   * @type {bool}
   */
  display: PropTypes.bool,
  /**
   * The content to be displayed.
   * @type {any}
   */
  children: PropTypes.any,
};

/**
 * Defines the default props
 */
const defaultProps = {
  level: 3,
  display: true,
  children: null,
};

/**
 * Displays the `<h1>` ... `<h6>` Semantic Elements.
 * This is a factory component.
 * It's better to use specific components instead like `<H1>` which has their props properly set up.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_SemanticElements
 */

const Headings = (props) => {
  const { level, display, children } = props;

  /**
   * Displays nothing if there is no `children` prop defined
   */
  if (!children) return null;

  /**
   * Hides the element when display is `false`
   * `<h3 hidden>` can't be used because it can be overwritten in css.
   * See https://css-tricks.com/the-hidden-attribute-is-visibly-weak/
   *
   * In the parent this `display: none` property cannot be overwritten. See Demo.js for example
   */
  const style = display ? null : { display: "none" };

  /**
   * Converts level to string.
   * Example:`1` => `h1`
   */
  const levelAsString = `h${level}`;

  /**
   * Prepares props for createElement
   */
  const props2 = { style: style };

  return createElement(levelAsString, props2, children);
};

Headings.propTypes = propTypes;
Headings.defaultProps = defaultProps;

export default Headings;
export { propTypes as HeadingsPropTypes, defaultProps as HeadingsDefaultProps };
