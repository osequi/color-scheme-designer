import PropTypes from "prop-types";

/**
 * Defines the prop types.
 */
const propTypes = {
  /**
   * The name of the font used for headings.
   * @type {string}
   */
  font: PropTypes.string,
  /**
   * The new line height.
   * Headings have a reduced line height while body text has a larger one. For better readabaility.
   * @type {number}
   */
  lineHeight: PropTypes.number,
  /**
   * The scales of the headings in case when headings are different.
   * @type {object}
   */
  scales: PropTypes.arrayOf(PropTypes.number),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  font: "Default",
  lineHeight: 1,
  scales: [1, 2, 3, 4, 5, 6],
};

/**
 * Returns headings with different sizes.
 */
const differentSizes = (props, theme) => {
  const { font, lineHeight, scales } = props;

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...theme.typography.helpers.font(font),
      lineHeight: lineHeight,
    },
    ["& h6"]: {
      ...theme.typography.helpers.scale(scales[0], lineHeight),
      ...theme.typography.helpers.margin({ ...props, scale: scales[0] }, theme),
    },
    ["& h5"]: {
      ...theme.typography.helpers.scale(scales[1], lineHeight),
      ...theme.typography.helpers.margin({ ...props, scale: scales[1] }, theme),
    },
    ["& h4"]: {
      ...theme.typography.helpers.scale(scales[2], lineHeight),
      ...theme.typography.helpers.margin({ ...props, scale: scales[2] }, theme),
    },
    ["& h3"]: {
      ...theme.typography.helpers.scale(scales[3], lineHeight),
      ...theme.typography.helpers.margin({ ...props, scale: scales[3] }, theme),
    },
    ["& h2"]: {
      ...theme.typography.helpers.scale(scales[4], lineHeight),
      ...theme.typography.helpers.margin({ ...props, scale: scales[4] }, theme),
    },
    ["& h1"]: {
      ...theme.typography.helpers.scale(scales[5], lineHeight),
      ...theme.typography.helpers.margin({ ...props, scale: scales[5] }, theme),
    },
  };
};

export {
  differentSizes,
  propTypes as DifferentSizesPropTypes,
  defaultProps as DifferentSizesDefaultProps,
};
