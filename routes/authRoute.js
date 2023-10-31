const router = require("express").Router();
const authController = require("../controllers/authController");
const { verifyJWT } = require("../middleware");

router.route("/login").post(authController.createAuthsLogin);

router.route('/refresh').post(verifyJWT, authController.refreshToken);

// ... other routes ...

router.route('/logout').post(verifyJWT, authController.logout);



// router.route("/signup")
// .post(authController.createAuthSignup);

router
  .route("/profile")
  .get(verifyJWT, authController.showUsersProfile)
  .put(verifyJWT, authController.editUsersProfile)
  .delete(verifyJWT, authController.deleteUsersProfile);

module.exports = router;
