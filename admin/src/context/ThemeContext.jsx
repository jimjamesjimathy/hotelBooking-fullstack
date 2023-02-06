import { createContext, useReducer } from "react";

const initialState = { darkMode: "light" };

export const ThemeContext = createContext(initialState);

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: "light" };
    case "DARKMODE":
      return { darkMode: "dark" };
    default:
      return state;
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  return (
    <ThemeContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
