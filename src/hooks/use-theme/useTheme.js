import { useContext } from "react";
import { ThemeContext } from "../../App";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
