import PropTypes from "prop-types";

/**
 * Imports other components and hooks.
 */
import {
  sameSize,
  SameSizePropTypes,
  SameSizeDefaultProps,
} from "./typography.headings.sameSize";

import {
  differentSizes,
  DifferentSizesPropTypes,
  DifferentSizesDefaultProps,
} from "./typography.headings.differentSizes";

import { findInArrays } from "../../../hooks";

/**
 * Defines the presets.
 * @type {Array}
 */
const headingsPresets = ["sameSize", "differentSizes"];

/**
 * Defines the settings for the presets.
 * @type {Array}
 */
const headingsSettings = [SameSizePropTypes, DifferentSizesPropTypes];

/**
 * Defines the prop types.
 */
const propTypes = {
  /**
   * The preset name.
   * @type {string}
   */
  preset: PropTypes.oneOf(headingsPresets),
  /**
   * The settings for the preset.
   * @type {object}
   */
  settings: PropTypes.oneOf(headingsSettings),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  preset: "sameSize",
  settings: SameSizeDefaultProps,
};

/**
 * Returns a style object for the headings.
 */
const headings = (props, theme) => {
  const { preset } = props;

  const headingsFunction = findInArrays(
    [sameSize, differentSizes],
    headingsPresets,
    preset
  );

  return headingsFunction ? headingsFunction(props, theme) : null;
};

export { headings };
