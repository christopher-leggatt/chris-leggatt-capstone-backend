const router = require("express").Router();
const orderController = require("../controllers/orderController");

router.route("/").post(orderController.createOrdersEntry);

module.exports = router;
