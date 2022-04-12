/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const values = {
    theme,
    setTheme
  };
 
  return(
    <ThemeContext.Provider value={values} >{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;