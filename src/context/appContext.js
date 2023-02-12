import { useState, useContext, createContext, useEffect } from "react";
import { getPostsRequest } from "../api/appRequests";

const appContext = createContext();

export const useAppInfo = () => {
  const context = useContext(appContext);
  return context;
};

export const AppContextProvider = ({ children }) => {
  const [appInfo, setAppInfo] = useState({
    posts: [],
  });

  useEffect(() => {
    (async () => {
      const getPosts = await getPostsRequest();

      setAppInfo({ posts: getPosts.data });
    })();
  }, []);
  return <appContext.Provider value={{appInfo}}>{children}</appContext.Provider>;
};
