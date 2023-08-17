const router = require("express").Router();
const productController = require("../controllers/productController");

router
  .route("/")
  .get(productController.getProductList)
  .post(productController.postProductList);

router
  .route("/:id")
  .get(productController.getProductItem)
  .put(productController.editProductItem)
  .delete(productController.deleteProductItem);

module.exports = router;
