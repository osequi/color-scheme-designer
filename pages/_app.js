import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

import theme from "../src/theme";
import Menu from "../src/components/Menu";
import { Setup, Text } from "../src/components/typography";
import { Grid, Cell } from "../src/components/layout";
import { H1 } from "../src/components/semantic-elements";

import "normalize.css";
import "../src/theme/typography/typography.reset.css";
import "../src/theme/typography/fonts/fonts.css";

/**
 * Imports other components and hooks.
 */
import { ColorPropTypes, ColorDefaultProps } from "../src/components/Color";

/**
 * Defines the prop types.
 */
const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape(ColorPropTypes)),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  colors: [
    {
      name: "Background",
      description: "The background color.",
      value: "white",
    },
    {
      name: "Text",
      description: "The text color.",
      value: "black",
    },
    {
      name: "Highlight",
      description:
        "The highlight color. Used for links, buttons, call to action elements.",
      value: null,
    },
    {
      name: "Shade",
      description: "The shade color. Used for secondary backgrounds.",
      value: null,
    },
  ],
};

const ThemeContext = createContext();
const GlobalContext = createContext();

const MyApp = ({ Component, pageProps }) => {
  const { colors: defaultColors } = defaultProps;

  const [colors, setColors] = useState(defaultColors);

  return (
    <ThemeContext.Provider value={theme}>
      <GlobalContext.Provider value={{ colors: colors, setColors: setColors }}>
        <Setup />
        <Text>
          <Text variant="title" as={H1}>
            Color Scheme Designer
          </Text>
          <Menu />
          <Component {...pageProps} />
        </Text>
      </GlobalContext.Provider>
    </ThemeContext.Provider>
  );
};

export default MyApp;
export { ThemeContext, GlobalContext };
