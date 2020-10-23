import React, { createContext } from "react";

import theme from "../src/theme";
import Presenter from "../src/components/Presenter";
import { Setup } from "../src/components/typography";

const ThemeContext = createContext();

const App = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <Setup />
      <Presenter />
    </ThemeContext.Provider>
  );
};

export default App;
export { ThemeContext };
