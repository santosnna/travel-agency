const Package = require("../models/package");

class PackageRepository {
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

	async getByLocation(location) {
		return await Package.find({ location: location });
		// return await Package.find({ location }); <- Check if this is different
	}

	async getByPrice(price) {
		return await Package.find({ price: price });
	}

	async getByDifficulty(difficulty) {
		return await Package.find({ difficulty: difficulty });
	}

	async updateById(_id, updatedPackage) {
		await Package.findByIdAndUpdate(_id, updatedPackage);
		return await Package.findById(_id);
	}

	async deleteById(_id) {
		await Package.findByIdAndDelete(_id);
	}
}

module.exports = PackageRepository;
