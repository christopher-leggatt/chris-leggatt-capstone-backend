const router = require("express").Router();
const userController = require("../controllers/userController");

router
  .route("/profile")
  .get(userController.getUserProfile)
  .put(userController.editUserProfile);
  

router
  .route("/register")
  .post(inventoryController.postRegisteredUser);

  router
  .route("/login")
  .post(inventoryController.postUserLogin);

module.exports = router;