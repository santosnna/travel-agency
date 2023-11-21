const Package = require("../models/package");

class PackageRepository {
	async getAll() {
		return await Package.find({});
	}

	async create(newPackage) {
		return await new Package(newPackage).save();
	}

	async getById(id) {
		return await Package.findById(id);
	}

	async getByName(name) {
		return await Package.findOne({ name: name });
	}

	async updateById(id, updatedPackage) {
		await Package.findByIdAndUpdate(id, updatedPackage, {
			runValidators: true,
			new: true,
		});
		return await Package.findById(id);
	}

	async deleteById(id) {
		await Package.findByIdAndDelete(id);
	}

	async getPriceById(id) {
		return (await Package.findById(id)).price;
	}
}

module.exports = PackageRepository;
