module.exports.mockPackagesArray = [
	{
		name: "Discover Münster",
		location: "Münster, Germany",
		price: 500,
		description: "Discover this amazing and important city!",
		duration: 2,
		difficulty: "Easy Peasy",
		excursions: 6,
		onSale: false,
	},
	{
		name: "Discover Amsterdam!",
		location: "Amsterdam, Netherlands",
		price: 700,
		description: "Get crazy and enjoy!",
		duration: 2,
		difficulty: "Nice and Breezy",
		excursions: 6,
		onSale: true,
	},
	{
		name: "Climb the Himalya Mountains!",
		location: "Nepal",
		price: 5489.98,
		description: "Are you up for the challenge?",
		duration: 10,
		difficulty: "Hard and Tough",
		excursions: 4,
		onSale: false,
	},
];

module.exports.newPackage = {
	name: "Best Walking Tour of Florence",
	location: "Florence, Italy",
	price: 50,
	description: "Find the hidden secrets of the Renaissance",
	duration: 1,
	difficulty: "Nice and Breezy",
	excursions: 12,
	onSale: true,
};

module.exports.mockPackage = (name) => {
	return { name: name };
};
