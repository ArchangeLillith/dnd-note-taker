import express from "express";
import morgan from "morgan";
import path from "path";
import config from "./config";
import routes from "./routes";
import { configurePassport } from "./middlewares/passport";
import {
	notFoundHandler,
	globalErrorHandler,
} from "./middlewares/error-handlers.mw";

const app = express();

//Health check~ Highest possible level of request to be able to check if its an endpoint that's not working or if your whole backend crashed
app.get("status", (req, res) => {
	res.sendStatus(200);
});
app.head("status", (req, res) => {
	res.sendStatus(200);
});

configurePassport(app);
app.use(express.static("public"));
app.use(express.json());
//Logging on the top level for any of our routes
app.use(morgan("dev"));
//Tells the app to use the routes we want it to
app.use(routes);

//Throws the front end routing back to the frontend so our server error handler doesn't intercept it
app.get(
	[
		"/login",
		"/profile",
		"/register",
		"/notes",
		"/notes/:id",
		"/notes/new",
		"/notes/:id/update",
	],
	(req, res) => res.sendFile(path.join(__dirname, "../public/index.html"))
);

//Catch 404's
app.use(notFoundHandler);

//Catch all other errors
app.use(globalErrorHandler);

app.listen(config.app.port, () =>
	console.log(`Server is running on port ${config.app.port}~`)
);

//test
import "./db/pool";
import { v4 as uuidv4 } from "uuid";
console.log(uuidv4());
