import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { SnackbarProvider } from "notistack";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

const styles = {
  success: { backgroundColor: "#FE8D17", color: "#ffff" },
  error: { backgroundColor: "blue" },
  warning: { backgroundColor: "green" },
  info: { backgroundColor: "yellow" },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <SnackbarProvider
            maxSnack={1} //this is the max number of snackbars that can be shown at once
            autoHideDuration={3000} //this is the time in milliseconds that the snackbar will be shown
            anchorOrigin={{ vertical: "top", horizontal: "right" }} //this is the position of the snackbar
            // the snackbar can be customized to have different colors using the style prop
            style={{
              success: styles.success,
              error: styles.error,
            }}
          >
            <App />
          </SnackbarProvider>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);

serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
