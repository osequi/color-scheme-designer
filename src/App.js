import React, { createContext } from "react";

import theme from "./theme";
import Designer from "./components/Designer";
import Setup from "./components/typography/Setup";

const ThemeContext = createContext();

const App = () => (
  <ThemeContext.Provider value={theme}>
    <Setup />
    <Designer />
  </ThemeContext.Provider>
);

export default App;
export { ThemeContext };
