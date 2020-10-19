import React, { createContext } from "react";

import theme from "./theme";
import Designer from "./components/Designer";
import { Setup, Text, TypographicGrid } from "./components/typography";

const ThemeContext = createContext();

const App = () => (
  <ThemeContext.Provider value={theme}>
    <Setup />
    <TypographicGrid />
    <Text>
      <Designer />
    </Text>
  </ThemeContext.Provider>
);

export default App;
export { ThemeContext };
