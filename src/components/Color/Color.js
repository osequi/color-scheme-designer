import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";
import { startCase } from "lodash";

/**
 * Imports other components and hooks.
 */
import { Cell, Grid } from "../layout";
import { Article } from "../semantic-elements";

/**
 * Defines the prop types.
 */
const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  id: "1",
  name: "white",
  value: "#fff",
};

/**
 * Defines the styles.
 */
const container = (props) => {
  return {
    width: "100%",
    height: `calc(var(--lem) * 10)`,
    backgroundColor: props.value,
    color: props.pair.value,
  };
};

/**
 * Displays the component.
 * @see Color.md
 */
const Color = (props) => {
  const { id, name, value, content } = props;
  const { containerKlass } = useStyles([container], props);

  const asProps = { title: startCase(name) };

  return (
    <Cell
      id={id}
      className={cx("Color", containerKlass)}
      as={Article}
      asProps={asProps}
    >
      <Grid>
        <p>{value}</p>
        {content}
      </Grid>
    </Cell>
  );
};

Color.propTypes = propTypes;
Color.defaultProps = defaultProps;

export default Color;
export { propTypes as ColorPropTypes, defaultProps as ColorDefaultProps };
