// eventually transform to an actual interface with TypeScript
class SalesI {
	_id = null;
	packageName = null;
	originalPrice = null;
	discount = null;
	currentPrice = null;

	constructor(_id, packageName, originalPrice, discount, currentPrice) {
		(this._id = _id),
			(this.packageName = packageName),
			(this.originalPrice = originalPrice),
			(this.discount = discount),
			(this.currentPrice = currentPrice);
	}
}

module.exports = SalesI;
