const router = require("express").Router();

const PackageControllers = require("../controllers/packageControllers");

const controller = new PackageControllers();

router.get("/", controller.getAllPackages);
router.post("/", controller.createPackage);
router.get("/:id", controller.getPackageById);
router.put("/:id", controller.updatePackageById);
router.delete("/:id", controller.deletePackageById);

module.exports = router;
