const router = require("express").Router();

const SaleController = require("../controllers/saleController");

const controller = new SaleController();

router.get("/", controller.getAllSales);
router.post("/", controller.createNewSale);

module.exports = router;
