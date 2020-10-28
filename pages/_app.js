import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import theme from "../src/theme";
import { Setup, Text } from "../src/components/typography";
import { Grid, Cell } from "../src/components/layout";
import { H1 } from "../src/components/semantic-elements";

import "normalize.css";
import "../src/theme/typography/typography.reset.css";
import "../src/theme/typography/fonts/fonts.css";

/**
 * Imports other components and hooks.
 */
import { ColorsPropTypes, ColorsDefaultProps } from "../src/components/Colors";

/**
 * Defines the prop types.
 */
const propTypes = {
  ...ColorsPropTypes,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  colors: [
    {
      id: shortid.generate(),
      name: "Background",
      description: "The background color.",
      value: "white",
      space: {
        name: "Color name",
      },
    },
    {
      id: shortid.generate(),
      name: "Text",
      description: "The text color.",
      value: "black",
      space: {
        name: "Color name",
      },
    },
    {
      id: shortid.generate(),
      name: "Highlight",
      description:
        "The highlight color. Used for links, buttons, call to action elements.",
      value: "Undefined",
      space: {
        name: "Color name",
      },
    },
    {
      id: shortid.generate(),
      name: "Shade",
      description: "The shade color. Used for secondary backgrounds.",
      value: "Undefined",
      space: {
        name: "Color name",
      },
    },
  ],
};

const ThemeContext = createContext();
const GlobalContext = createContext();

const MyApp = ({ Component, pageProps }) => {
  const { colors: defaultColors } = defaultProps;

  const [colors, setColors] = useState(defaultColors);

  const globalContext = { colors: colors, setColors: setColors };

  return (
    <ThemeContext.Provider value={theme}>
      <GlobalContext.Provider value={globalContext}>
        <Setup />
        <Text>
          <Text variant="title" as={H1}>
            Color Scheme Designer
          </Text>
          <Component {...pageProps} />
        </Text>
      </GlobalContext.Provider>
    </ThemeContext.Provider>
  );
};

export default MyApp;
export { ThemeContext, GlobalContext };
