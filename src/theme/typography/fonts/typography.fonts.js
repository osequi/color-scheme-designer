import PropTypes from "prop-types";

/**
 * Imports fonts.
 */
//import "./fonts.css";

/**
 * Defines the prop types.
 * @type {Object}
 */
const propTypes = {
  fonts: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the font to be used.
       * @type {string}
       */
      name: PropTypes.string,
      /**
       * The font family name as defined in the font css.
       * @type {string}
       */
      fontFamily: PropTypes.string,
      /**
       * The weight of the font.
       * @type {array}
       */
      fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      /**
       * The font style.
       * @type {string}
       */
      fontStyle: PropTypes.string,
      /**
       * The letter spacing.
       * @type {string}
       */
      letterSpacing: PropTypes.string,
    })
  ),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  fonts: null,
};

export { propTypes as FontsPropTypes, defaultProps as FontsDefaultProps };
