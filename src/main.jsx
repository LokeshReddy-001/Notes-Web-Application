
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Analytics />
  </BrowserRouter>
);
