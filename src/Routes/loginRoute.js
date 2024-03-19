const express = require("express");
const router = express.Router();
const loginController = require("./../Authentication/login");

router.post("/login", loginController.login);

module.exports = router;
