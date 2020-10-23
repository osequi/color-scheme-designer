/**
 * Imports other components and hooks.
 */
import { typography } from "./typography";
import { responsiveness } from "./responsiveness";
import { color } from "./color";

/**
 * Defines the theme.
 *
 * Theme overwrites the defaultProps in components.
 * Everything must be set up here. Rely on components only for their propTypes, not for their defaultProps.
 *
 * Beside settings the theme provides various helper functions.
 */
const theme = {
  typography: typography,
  responsiveness: responsiveness,
  colors: color,
  /**
   * Always leave room for later customization.
   * @type {Object}
   */
  custom: {},
};

export default theme;
