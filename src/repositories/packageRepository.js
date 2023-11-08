const Package = require("../models/package");

class PackageRepository {
	async create(newPackage) {
		return await new Package(newPackage).save();
	}

	async createMany(packagesArray) {
		return await Package.insertMany(packagesArray);
	}

	async getAll() {
		return await Package.find({});
	}

	async getById(id) {
		return await Package.findById(id);
	}

	async getByName(name) {
		return await Package.findOne({ name: name });
	}

	async getByLocation(location) {
		return await Package.find({ location: location });
	}

	async getByPrice(price) {
		return await Package.find({ price: price });
	}

	async getByDifficulty(difficulty) {
		return await Package.find({ difficulty: difficulty });
	}

	async getOnSale() {
		return await Package.find({ onSale: true });
	}

	async updateById(id, updatedPackage) {
		await Package.findByIdAndUpdate(id, updatedPackage, {
			runValidators: true,
		});
		return await Package.findById(id);
	}

	async deleteById(id) {
		await Package.findByIdAndDelete(id);
	}
}

module.exports = PackageRepository;
