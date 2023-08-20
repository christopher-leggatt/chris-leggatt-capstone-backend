const router = require("express").Router();
const productController = require("../controllers/productController");

router
  .route("/")
  .get(productController.index)
  .post(productController.createProductsList);

router
  .route("/:id")
  .get(productController.showProductsItem)
  .put(productController.editProductsItem)
  .delete(productController.deleteProductsItem);

router.route("/category/:category").get(productController.listCategorizedProducts);

module.exports = router;
