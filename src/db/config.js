const mongoose = require("mongoose");

module.exports.startDatabase = function () {
	const uri = process.env.DB_URI;
	const options = {};

	mongoose
		.connect(uri, options)
		.then(() => console.info("Database connected"))
		.catch((err) => console.info("Error connecting to Database:\n", err));
};
