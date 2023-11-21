const router = require("express").Router();

const packageRoutes = require("./packageRoutes");
const saleRoutes = require("./saleRoutes");

router.use("/packages", packageRoutes);
router.use("/sales", saleRoutes);

router.get("/", (req, res) => {
	res.send("Welcome to the home page.");
});

module.exports = router;
