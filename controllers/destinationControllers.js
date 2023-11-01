const PackageService = require("../services/packageService");

const service = new PackageService();

class DestinationControllers {
	async getAllPackages(req, res) {
		const result = await service.getAll();
		res.send(result);
	}

	async createPackage(req, res) {
		console.log(req.body);
		const { _id } = await service.createPackage(req.body);
		res.redirect(`/destinations/${_id}`);
	}

	async getPackageById(req, res) {
		const result = await service.getById(req.params.id);
		res.send(result);
	}

	async updatePackageById(req, res) {
		const result = await service.updateById(req.params.id, req.body);
		res.redirect(`/destinations/${result._id}`);
	}

	async deletePackageById(req, res) {
		await service.deleteById(req.params.id);
		res.redirect("/destinations");
	}
}

module.exports = DestinationControllers;
