import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { cx } from "emotion";
import { useStyles, useTheme } from "../../../hooks";

/**
 * Adds a CSS Reset with `normalize.css`.
 * @see https://gist.github.com/vre2h/4bad1d3b836f6a18c9bd5a8ca68ab1d9
 */
import "normalize.css";

/**
 * Adds further normalization on top of `normalize.css`.
 */
import "../../../theme/typography/typography.reset.css";

/**
 * Defines the prop types.
 */
const propTypes = {};

/**
 * Defines the default props.
 */
const defaultProps = {};

/**
 * Defines the styles.
 */
const container = (theme) => {
  return {
    fontSize: `${theme.typography.grid.fontSize}%`,
    lineHeight: theme.typography.grid.lineHeight,
    ...theme.typography.helpers.responsiveFontSizes,
    "--lem": `${theme.typography.helpers.lem}em`,
  };
};

/**
 * Sets up the typographic grid in the `<body>`.
 */
const Setup = (props) => {
  const theme = useTheme();

  /**
   * Loads the styles.
   */
  const { containerKlass } = useStyles([container], theme);

  return (
    <Helmet>
      <body className={cx("Body", containerKlass)} />
    </Helmet>
  );
};

Setup.propTypes = propTypes;
Setup.defaultProps = defaultProps;

export default Setup;
export { propTypes as SetupPropTypes, defaultProps as SetupDefaultProps };
