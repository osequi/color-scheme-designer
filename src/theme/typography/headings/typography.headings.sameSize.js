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
   * The scale of the headings in case all of them have the same scale.
   * @type {number}
   */
  scale: PropTypes.number,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  font: "Default",
  lineHeight: 1,
  scale: 1,
};

/**
 * Returns headings with the same size.
 */
const sameSize = (props, theme) => {
  const { font, lineHeight, scale } = props;

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...theme.typography.helpers.font(font),
      ...theme.typography.helpers.scale(scale, lineHeight),
      lineHeight: lineHeight,
    },
  };
};

export {
  sameSize,
  propTypes as SameSizePropTypes,
  defaultProps as SameSizeDefaultProps,
};
