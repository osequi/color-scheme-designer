import React, { createContext } from "react";

import theme from "./theme";
import Designer from "./components/Designer";
import Setup from "./components/typography/Setup";
import Text from "./components/typography/Text";

const ThemeContext = createContext();

const App = () => (
  <ThemeContext.Provider value={theme}>
    <Setup />
    <Text variant="body">
      <Designer />
    </Text>
  </ThemeContext.Provider>
);

export default App;
export { ThemeContext };
