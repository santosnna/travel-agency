require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const { startDatabase } = require("./db/config");
const routes = require("./routes/index");
const ExpressError = require("./responseHandlers/ExpressError");

const PORT = process.env.PORT;

startDatabase();
const app = express();

app.use(morgan("dev"));
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

app.listen(PORT, () => console.info("Server is up."));
