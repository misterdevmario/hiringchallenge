import { useState, useContext, createContext, useEffect } from "react";
import { getPostsRequest, getOnePostRequest } from "../api/appRequests";

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

  const getOnePost = async (id) => {
    const post = await getOnePostRequest(id)
    return post.data
  }  
  return <appContext.Provider value={{appInfo, getOnePost}}>{children}</appContext.Provider>;
};
