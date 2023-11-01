const router = require("express").Router();

const DestinationControllers = require("../controllers/destinationControllers");

const controller = new DestinationControllers();

router.get("/", controller.getAllPackages);
router.post("/", controller.createPackage);
router.get("/:id", controller.getPackageById);
router.put("/:id", controller.updatePackageById);
router.delete("/:id", controller.deletePackageById);

module.exports = router;
