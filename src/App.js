import React, { createContext } from "react";

import theme from "./theme";
import Home from "./components/Home";
import { Setup, Text, TypographicGrid } from "./components/typography";

const ThemeContext = createContext();

const App = () => (
  <ThemeContext.Provider value={theme}>
    <Setup />
    {/*<TypographicGrid />*/}
    <Text>
      <Home />
    </Text>
  </ThemeContext.Provider>
);

export default App;
export { ThemeContext };
