// this is the redux store for the app
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});

// export the store
export default store;
