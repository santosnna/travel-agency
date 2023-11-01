const Joi = require("joi");

module.exports.packageSchema = Joi.object({
	name: Joi.string().required(),
	location: Joi.string(),
	price: Joi.number().min(0),
	description: Joi.string(),
	duration: Joi.number().min(1),
	difficulty: Joi.string().valid(
		"Easy Peasy",
		"Nice and Breezy",
		"Hard and Tough"
	),
	excursions: Joi.number().min(1),
});
