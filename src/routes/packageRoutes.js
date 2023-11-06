const router = require("express").Router();

const PackageControllers = require("../controllers/packageControllers");
const { validatePackage } = require("../validation/validationMiddleware");

const controller = new PackageControllers();

router.get("/", controller.getAllPackages);
router.post("/", validatePackage, controller.createPackage);
router.get("/:id", controller.getPackageById);
router.put("/:id/edit", validatePackage, controller.updatePackageById);
router.delete("/:id/delete", controller.deletePackageById);

module.exports = router;
