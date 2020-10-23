import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { cx } from "emotion";
import { useStyles, useTheme } from "../../../hooks";

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
  return `
	  body {
	  	font-size: ${theme.typography.grid.fontSizes[0]}%;
	  	line-height: ${theme.typography.grid.lineHeight};
	  	--lem: ${theme.typography.helpers.lem}em;
	  }
	  ${theme.typography.helpers.responsiveFontSizesForCNA}
  `;
};

/**
 * Sets up the typographic grid in the `<body>`.
 */
const Setup = (props) => {
  const theme = useTheme();

  return (
    <Head>
      <style>{container(theme)}</style>
    </Head>
  );
};

Setup.propTypes = propTypes;
Setup.defaultProps = defaultProps;

export default Setup;
export { propTypes as SetupPropTypes, defaultProps as SetupDefaultProps };
