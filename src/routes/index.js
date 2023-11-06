const router = require("express").Router();

const packageRoutes = require("./packageRoutes");

router.use("/packages", packageRoutes);

router.get("/", (req, res) => {
	res.send("Welcome to the home page.");
});

module.exports = router;
