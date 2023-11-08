const mongoose = require("mongoose");

const uri = process.env.DB_URI;
const options = {};

mongoose
	.connect(uri, options)
	.then(() => console.log("Database connected"))
	.catch((err) => console.log("Error connecting to Database:\n", err));
