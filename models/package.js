const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
	name: String,
	location: String,
	price: Number,
	description: String,
	duration: Number,
	difficulty: {
		type: String,
		enum: ["Easy Peasy", "Nice and Breezy", "Hard and Tough"],
	},
	excursions: Number,
});

module.exports = mongoose.model("Package", packageSchema);
