const Sale = require("../models/sale");

class SaleRepository {
	async getAll() {
		return await Sale.find({}).populate("package");
	}

	async getById(id) {
		return await Sale.findById(id).populate("package");
	}

	async create(newSale) {
		return await new Sale(newSale).save();
	}

	async delete(id) {
		return await Sale.findByIdAndDelete(id);
	}
}

module.exports = SaleRepository;
