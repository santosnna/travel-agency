const mongoose = require("mongoose");
const Package = require("../src/models/package");

module.exports.connect = async () => {
	const uri = process.env.DB_TESTING_URI;
	const options = {};

	await mongoose.connect(uri, options);
};

module.exports.closeDB = async () => {
	await mongoose.connection.close();
};

module.exports.populate = async (arr) => {
	await Package.insertMany(arr);
};

module.exports.clean = async () => {
	await Package.deleteMany({});
};
