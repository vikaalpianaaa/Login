import App from "App";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "tailwindcss/tailwind.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root"),
);
