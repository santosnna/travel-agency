const PackageRepository = require("../repositories/packageRepository");

const repository = new PackageRepository();

class PackageService {
	async createPackage(newPackage) {
		return await repository.create(newPackage);
	}

	async getAll() {
		return await repository.getAll();
	}

	async getById(_id) {
		return await repository.getById(_id);
	}

	async getOnSale() {
		return await repository.getOnSale();
	}

	async updateById(_id, updatedPackage) {
		return await repository.updateById(_id, updatedPackage);
	}

	async deleteById(_id) {
		await repository.deleteById(_id);
	}
}

module.exports = PackageService;
