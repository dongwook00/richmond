import { createContext, useContext, useState } from "react";

export const AppContext = createContext({
  postContext: {
    posts: [],
    setPosts: () => [],
  },
});

export function AppWrapper({ children }) {
  const [posts, setPosts] = useState([]);
  const postContext = {
    posts,
    setPosts,
  };

  return (
    <AppContext.Provider value={{ postContext }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
