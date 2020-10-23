import { useContext } from "react";
import { ThemeContext } from "../../../pages";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
