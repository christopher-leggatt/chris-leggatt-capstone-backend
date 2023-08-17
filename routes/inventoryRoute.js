const router = require("express").Router();
const inventoryController = require("../controllers/inventoryController");

router.route("/")
.get(inventoryController.getInventoryList);

router.route(":productId").put(inventoryController.editInventoryItem);

module.exports = router;
