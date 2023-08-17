const router = require("express").Router();
const orderController = require("../controllers/orderController");

router.route("/").post(orderController.getOrderList);

router.route(":userId").get(orderController.getUserOrderList);

router.route("/admin/:orderId").get(orderController.getOrderItem);

module.exports = router;
