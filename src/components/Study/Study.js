import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, useMarkdown } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import md from "./Study.md";
import { Text } from "../typography";

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
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see Study.md
 */
const Study = (props) => {
  const { containerKlass } = useStyles([container], props);
  const { html } = useMarkdown(md);

  return (
    <Text variant="longform" className={cx("Study", containerKlass)}>
      {html}
    </Text>
  );
};

Study.propTypes = propTypes;
Study.defaultProps = defaultProps;

export default Study;
export { propTypes as StudyPropTypes, defaultProps as StudyDefaultProps };
