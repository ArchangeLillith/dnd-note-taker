import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

//Not a magic React thing, we configures this through our webpack config file
//Gives all of our app access to tailwind and daisyui
import "./styles/app.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
