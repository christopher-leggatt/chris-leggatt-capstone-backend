const router = require("express").Router();

router.route("/")
.get(inventoryController.getInventoryList);

router.route(":productId").put(inventoryController.editInventoryItem);

module.exports = router;
