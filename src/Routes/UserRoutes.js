const express = require("express");
const router = express.Router();
const userControllerPost = require("./../Controllers/User_Management/Post");
const userControllerGet = require("./../Controllers/User_Management/Get");
const userControllerUpdate = require("./../Controllers/User_Management/Update");
const userControllerDelete = require("./../Controllers/User_Management/Delete");

// con = require("../../auth/authMiddleware");

router.post("/userPost", userControllerPost.createUser);
router.get("/users", userControllerGet.getAllUsers);
router.get("/user/update/:id", userControllerUpdate.updateUserById);
router.get("/user/delete/:id", userControllerDelete.deleteUserById);

module.exports = router;
