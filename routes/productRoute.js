const router = require("express").Router();
const productController = require("../controllers/productController");

router
  .route("/")
  .get(productController.index)
  .post(productController.postProductList);

router
  .route("/:id")
  .get(productController.getProductItem)
  .put(productController.editProductItem)
  .delete(productController.deleteProductItem);

router.route("/category/:category").get(productController.getProductCategory);

module.exports = router;
