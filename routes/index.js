const router = require("express").Router();

const destinationRoutes = require("./destinationRoutes");

router.use("/destinations", destinationRoutes);

router.get("/", (req, res) => {
	res.send("Welcome to the home page.");
});

module.exports = router;
