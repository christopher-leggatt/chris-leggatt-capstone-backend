const router = require("express").Router();
const orderController = require("../controllers/orderController");

router.route("/").post(orderController.createOrdersEntry);

// router.route("/:userId").get(orderController.showOrdersEntry);

// router.route("/admin/:orderId").get(orderController.showOrdersList);

router.route("/admin/:orderId").get(orderController.showUserOrdersEntry);


module.exports = router;
