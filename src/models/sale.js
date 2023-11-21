const mongoose = require("mongoose");
const { Schema } = mongoose;

const saleSchema = new Schema({
	package: { type: Schema.Types.ObjectId, ref: "Package" },
	discount: {
		type: Number,
		min: [0, "Discount must be greater than 0"],
		max: [100, "Discount can not be greater than 100"],
	},
	// expirationDate: { type: Date },
	// isActive: { type: Boolean, default: true},
});

module.exports = mongoose.model("Sale", saleSchema);
