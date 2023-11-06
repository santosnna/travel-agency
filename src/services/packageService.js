const PackageRepository = require("../repositories/packageRepository");

const repository = new PackageRepository();

class PackageService {
	async createPackage(newPackage) {
		return await repository.create(newPackage);
	}

	async getAll() {
		return await repository.getAll();
	}

	async getById(id) {
		return await repository.getById(id);
	}

	async getByName(name) {
		return await repository.getByName(name);
	}

	async getOnSale() {
		return await repository.getOnSale();
	}

	async updateById(id, updatedPackage) {
		return await repository.updateById(id, updatedPackage);
	}

	async deleteById(id) {
		await repository.deleteById(id);
	}
}

module.exports = PackageService;
