// import { ThemeProvider } from "@mui/material";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import useNotifier from "./helpers/useNotifier";
import { LOCAL_STORAGE_CACHED_DATABASE } from "./reducers/products.reducer";
import { useEffect } from "react";
import { ADD_NEW_VIEWED_PRODUCT_SUCCESS } from "./actions/types";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useNotifier();

  // when the page is loaded, create a cache for the viwed products
  //this is used to set and get the viewed products from local storage

  // if we dont have the LOCAL_STORAGE_CACHED_DATABASE created yet, create it then set it to the viewed products
  useEffect(() => {
    (async () => {
      const localStorageCachedDatabase = await localStorage.getItem(
        LOCAL_STORAGE_CACHED_DATABASE
      );

      // if the local storage database is not created yet, create it and set it to the viewed products
      if (
        localStorageCachedDatabase === null ||
        localStorageCachedDatabase === undefined
      ) {
        console.log("local storage database is not created yet");
        console.log(
          "....................creating local storage database...................."
        );
        localStorage.setItem(LOCAL_STORAGE_CACHED_DATABASE, JSON.stringify([]));
      } else {
        //if we have the database cached, get it and set it to the viewed products
        const cachedData = await localStorage.getItem(
          LOCAL_STORAGE_CACHED_DATABASE
        );
        // const cachedDataParsed = JSON.parse(cachedData);
        // console.log("cachedDataParsed", cachedDataParsed);

        // if the cached data is not empty, set it to the viewed products in the redux store
        if (cachedData.length > 0) {
          dispatch({
            type: ADD_NEW_VIEWED_PRODUCT_SUCCESS,
            payload: JSON.parse(cachedData),
          });
        }

        console.log("fetched cached | user viewed products", cachedData);
      }
    })();
  }, []);

  const routing = useRoutes(routes());
  return <div>{routing}</div>;
}

export default App;
