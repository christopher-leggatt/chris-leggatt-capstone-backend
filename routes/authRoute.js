const router = require("express").Router();
const authController = require("../controllers/authController");
const { verifyJWT } = require("../middleware");

router.route("/auth/login")
.post(authController.createAuthLogin);

router.route("/auth/signup")
.post(authController.createAuthSignup);

router.route("/protected")
  .get(verifyJWT, authController.showUsersDetails);

module.exports = router;
