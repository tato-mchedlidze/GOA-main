import { createContext } from "react";

export const MyContext = createContext();

export function MyContextProvider({ children }) {
  const sharedValue = "Hello from Context 👋";

  return (
    <MyContext.Provider value={sharedValue}>{children}</MyContext.Provider>
  );
}
