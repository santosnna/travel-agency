const express = require("express");

const routes = require("./routes/index");
const ExpressError = require("./responseHandlers/ExpressError");

require("./db/config");

const app = express();

app.use(express.urlencoded({ extended: true })); // Parses the body
app.use(express.json());

app.use(routes);

app.all("*", (req, res, next) => {
	next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
	const { statusCode = 500 } = err;
	if (!err.message) err.message = "Something went wrong.";
	res.status(statusCode).send(err);
});

app.listen(3000, () => console.log("Server is up."));
