const PackageRepository = require("../repositories/packageRepository");

const repository = new PackageRepository();

class PackageService {
	async getAll() {
		return await repository.getAll();
	}

	async createPackage(newPackage) {
		return await repository.create(newPackage);
	}

	async getById(id) {
		return await repository.getById(id);
	}

	async getByName(name) {
		return await repository.getByName(name);
	}

	async updateById(id, updatedPackage) {
		return await repository.updateById(id, updatedPackage);
	}

	async deleteById(id) {
		return await repository.deleteById(id);
	}
}

module.exports = PackageService;
