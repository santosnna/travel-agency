const PackageService = require("../services/packageService");
const { packageSchema } = require("../validation/validationSchemas");

const service = new PackageService();

class PackageControllers {
	async getAllPackages(req, res) {
		const result = await service.getAll();
		if (req.query) {
			const { price } = req.query;
			const filter = result.filter((el) => el.price < price);
			return res.send(filter);
		}
		return res.send(result);
	}

	async createPackage(req, res) {
		const { error } = packageSchema.validate(req.body);
		if (!error) {
			console.log(req.body);
			const { _id } = await service.createPackage(req.body);
			return res.redirect(`/packages/${_id}`);
		}
	}

	async getPackageById(req, res) {
		const result = await service.getById(req.params.id);
		return res.send(result);
	}

	async updatePackageById(req, res) {
		const result = await service.updateById(req.params.id, req.body);
		return res.redirect(`/packages/${result._id}`);
	}

	async deletePackageById(req, res) {
		await service.deleteById(req.params.id);
		return res.redirect("/packages");
	}
}

module.exports = PackageControllers;
