import React, { createContext } from "react";

import theme from "../src/theme";
import Home from "../src/components/Home";
import { Setup } from "../src/components/typography";

const ThemeContext = createContext();

const App = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <Setup />
      <Home />
    </ThemeContext.Provider>
  );
};

export default App;
export { ThemeContext };
