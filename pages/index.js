import React, { createContext } from "react";

import theme from "../src/theme";
import Home from "../src/components/Home";
import { Setup, Text } from "../src/components/typography";

const ThemeContext = createContext();

const App = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <Setup />
      <Text>
        <Home />
      </Text>
    </ThemeContext.Provider>
  );
};

export default App;
export { ThemeContext };
