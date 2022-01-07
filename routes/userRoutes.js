const express = require("express");
const userCtrl = require("../controllers/userController");

const router = express.Router();

router.route("/api/users").get(userCtrl.registerUser).post(userCtrl.listUsers);

router
	.route("/api/users/:userId")
	.get(userCtrl.getUser)
	.put(userCtrl.updateUser)
	.delete(userCtrl.deleteUser);

module.exports = router;
