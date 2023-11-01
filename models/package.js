const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
	name: { type: String, required: true },
	location: String,
	price: Number,
	description: String,
	duration: Number,
	difficulty: {
		type: String,
		enum: ["Easy Peasy", "Nice and Breezy", "Hard and Tough"],
	},
	excursions: Number,
	onSale: { type: Boolean, default: false },
});

module.exports = mongoose.model("Package", packageSchema);
