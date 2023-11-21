const SaleRepository = require("../repositories/saleRepository");
const PackageRepository = require("../repositories/packageRepository");

const repository = new SaleRepository();
const packageRepository = new PackageRepository();

class SaleService {
	async getAllSales() {
		return await repository.getAll();
	}

	async createSaleWithPercentage(newSale) {
		return await repository.create(newSale);
	}

	async createSaleWithFinalPrice(newSale) {
		const { currentPrice } = newSale;
		const originalPrice = await packageRepository.getPriceById(newSale.package);
		newSale.discount = calculateDiscount(currentPrice, originalPrice);
		return await repository.create(newSale);
	}
}

function calculateDiscount(currentPrice, originalPrice) {
	return 100 - (100 * currentPrice) / originalPrice;
}

module.exports = SaleService;
