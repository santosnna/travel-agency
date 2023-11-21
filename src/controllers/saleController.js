const SaleService = require("../services/saleService");
const SaleI = require("../interfaces/saleInterface");

const service = new SaleService();

class SaleController {
	async getAllSales(req, res) {
		const data = await service.getAllSales();
		const sales = data.map((sale) => {
			return new SaleI(
				sale._id,
				sale.package.name,
				sale.package.price,
				roundDiscountToTwoDigits(sale.discount),
				calculateCurrentPrice(sale.package.price, sale.discount)
			);
		});

		res.send(sales);
	}

	async createNewSale(req, res) {
		if (!req.body.discount) {
			const data = await service.createSaleWithFinalPrice(req.body);
			return res.send(data);
		}
		const data = await service.createSaleWithPercentage(req.body);
		return res.send(data);
	}
}

function roundDiscountToTwoDigits(discount) {
	return Math.round((discount + Number.EPSILON) * 100) / 100;
}
function calculateCurrentPrice(originalPrice, discount) {
	return originalPrice - (originalPrice * discount) / 100;
}

module.exports = SaleController;
