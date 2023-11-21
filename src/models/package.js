const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: [true, "Package must have a name."],
	},
	location: { type: String, trim: true },
	price: { type: Number, min: [0, "Price must be greater than 0"] },
	description: { type: String, trim: true },
	duration: { type: Number, min: [1, "Duration must be greater than 1"] },
	difficulty: {
		type: String,
		enum: ["Easy Peasy", "Nice and Breezy", "Hard and Tough"],
	},
	excursions: { type: Number, min: [1, "Package must be greater than 1"] },
});

module.exports = mongoose.model("Package", packageSchema);
