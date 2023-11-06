const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/travel-agency";
const options = {};

mongoose.connect(uri, options).then(
	() => {
		console.log("Database connected");
	},
	(err) => {
		console.log("Error connecting to Database:\n", err);
	}
);
