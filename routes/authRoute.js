const router = require("express").Router();
const authController = require("../controllers/authController");

router.route("/google")
.post(authController.postAuthGoogle);

router.route("/facebook")
.post(authController.postAuthFacebook);

module.exports = router;
