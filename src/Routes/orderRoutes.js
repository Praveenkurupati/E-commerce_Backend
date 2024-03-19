const express = require("express");
const router = express.Router();
const orderControllerPost = require("./../Controllers/Order_management/Post");
const orderControllerGet = require("./../Controllers/Order_management/Get");
const orderControllerUpdate = require("./../Controllers/Order_management/Update");
const orderControllerDelete = require("./../Controllers/Order_management/Delete");

const verifyToken = require("../../auth/authMiddleware");

router.post("/orderPost", verifyToken, orderControllerPost.);
router.get("/orders", verifyToken, orderControllerGet.getAllUsers);
router.put(
  "/order/update/:id",
  verifyToken,
  orderControllerUpdate.updateUserById
);
router.delete(
  "/order/delete/:id",
  verifyToken,
  orderControllerDelete.deleteUserById
);

module.exports = router;
