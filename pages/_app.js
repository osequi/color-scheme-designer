import React, { createContext } from "react";

import theme from "../src/theme";
import Menu from "../src/components/Menu";
import { Setup, Text } from "../src/components/typography";
import { Grid, Cell } from "../src/components/layout";
import { H1 } from "../src/components/semantic-elements";

import "normalize.css";
import "../src/theme/typography/typography.reset.css";
import "../src/theme/typography/fonts/fonts.css";

const ThemeContext = createContext();

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeContext.Provider value={theme}>
      <Setup />
      <Text>
        <Text variant="title" as={H1}>
          Color Scheme Designer
        </Text>
        <Menu />
        <Component {...pageProps} />
      </Text>
    </ThemeContext.Provider>
  );
};

export default MyApp;
export { ThemeContext };
