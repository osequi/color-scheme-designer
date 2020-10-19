import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */
import Cell from "../layout/Cell";
import { Aside } from "../semantic-elements";

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
  const height = 100 / props.numberOfItems;

  return {
    width: "100%",
    height: `${height}vw`,
    //maxWidth: `calc(5 * var(--lem))`,
    //maxHeight: `calc(5 * var(--lem))`,
    backgroundColor: props.value,
  };
};

/**
 * Displays the component.
 * @see Color.md
 */
const Color = (props) => {
  const { id, name } = props;
  const { containerKlass } = useStyles([container], props);

  Aside.defaultProps.title = name;
  Aside.defaultProps.display = true;

  return <Cell id={id} className={cx("Color", containerKlass)} as={Aside} />;
};

Color.propTypes = propTypes;
Color.defaultProps = defaultProps;

export default Color;
export { propTypes as ColorPropTypes, defaultProps as ColorDefaultProps };
