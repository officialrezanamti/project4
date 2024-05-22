import { useRoutes } from "react-router-dom";
import "./App.css";
import routess from "./Routes/routess";
export default function App() {
  let router = useRoutes(routess);
  return router;
}
