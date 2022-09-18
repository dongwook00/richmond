import { createContext, useContext } from "react";

export const AppContext = createContext();

export function AppWrapper({ children }) {
  let foo = "hello";

  return <AppContext.Provider value={foo}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
