import { combineReducers } from "redux";

import message from "./message";
import notification from "./enqueueSnackbar.reducer";
import commandPallete from "./commandPallete.reducer";

export default combineReducers({
  notification,
  message,
  commandPallete,
});
