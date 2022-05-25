// import { ThemeProvider } from "@mui/material";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import useNotifier from "./helpers/useNotifier";

function App() {
  useNotifier();

  const routing = useRoutes(routes());
  return <div>{routing}</div>;
}

export default App;
