import { combineReducers } from "redux";

import message from "./message";
import notification from "./enqueueSnackbar.reducer";
import commandPallete from "./commandPallete.reducer";
import cart from "./cart.reducer";
import products from "./products.reducer";

export default combineReducers({
  notification,
  message,
  commandPallete,
  cart,
  products,
});
