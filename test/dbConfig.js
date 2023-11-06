const mongoose = require("mongoose");
const Package = require("../src/models/package");

module.exports.connect = async () => {
	const uri = "mongodb://127.0.0.1:27017/travel-agency-testing";
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
