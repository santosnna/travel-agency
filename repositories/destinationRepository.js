const Package = require("../models/packages");

class DestinationRepository {
	async create(newPackage) {
		const { _id } = await new Package(newPackage).save();
		return await Package.findById(_id);
	}

	async getAll() {
		return await Package.find({});
	}

	async getById(_id) {
		return await Package.findById(_id);
	}

	async updateById(_id, updatedPackage) {
		await Package.findByIdAndUpdate(_id, updatedPackage);
		return await Package.findById(_id);
	}

	async deleteById(_id) {
		await Package.findByIdAndDelete(_id);
	}
}

module.exports = DestinationRepository;
