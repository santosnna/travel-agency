const { packageSchema } = require("./validationSchemas");
const ExpressError = require("../responseHandlers/ExpressError");

module.exports.validatePackage = (req, res, next) => {
	const { error } = packageSchema.validate(req.body);
	if (error) {
		const msg = error.details.map((el) => el.message).join(", ");
		throw new ExpressError(msg, 400);
	} else {
		next();
	}
};
