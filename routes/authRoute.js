const router = require("express").Router();
const authController = require("../controllers/authController");
const { verifyJWT } = require("../middleware");

router.route("/login").post(authController.createAuthsLogin);

// router.route("/signup")
// .post(authController.createAuthSignup);

// router.route("/protected").get(verifyJWT, authController.showUsersDetails);

router
  .route("/profile")
  .get(verifyJWT, authController.showUsersProfile)
  .put(verifyJWT, authController.editUsersProfile)
  .delete(verifyJWT, authController.deleteUsersProfile);

module.exports = router;
