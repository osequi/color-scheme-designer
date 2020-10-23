import React, { createContext } from "react";
import { cx } from "emotion";
import { useStyles } from "../src/hooks";

import theme from "../src/theme";
import Home from "../src/components/Home/Home.mdx";
import { Setup, Text, TypographicGrid } from "../src/components/typography";

const ThemeContext = createContext();

const container = {
  label: "Container",
};

const App = () => {
  const { containerKlass } = useStyles([container], {});

  return (
    <ThemeContext.Provider value={theme}>
      <Setup />
      {/*<TypographicGrid displayHorizontalRhytm={false} />*/}
      <div className={cx("Container", containerKlass)}>
        <Text variant="longform">
          <Home />
        </Text>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
export { ThemeContext };
