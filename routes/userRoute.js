const router = require("express").Router();
const userController = require("../controllers/userController");

router
  .route("/profile")
  .get(userController.showUsersProfile)
  .put(userController.editUsersProfile)
  .delete(userController.deleteUsersProfile);
  

router
  .route("/register")
  .post(inventoryController.createRegisteredUsers);

  router
  .route("/login")
  .post(inventoryController.postUserLogin);

module.exports = router;