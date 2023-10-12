const router = require("express").Router();
const authController = require("../controllers/authController");

router.route("/auth/login")
.post(authController.createAuthLogin);

router.route("/auth/signup")
.post(authController.createAuthSignup);

module.exports = router;
