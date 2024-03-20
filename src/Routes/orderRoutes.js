const express = require("express");
const router = express.Router();
const orderControllerPost = require("./../Controllers/Order_management/Post");
const orderControllerGet = require("./../Controllers/Order_management/Get");
const orderControllerUpdate = require("./../Controllers/Order_management/Update");
const orderControllerDelete = require("./../Controllers/Order_management/Delete");

router.post("/orderPost", orderControllerPost.createOrder);
router.get("/orders", orderControllerGet.getAllOrders);
router.get("/order/dayOrders", orderControllerGet.getOrdersCountForDay);
router.get("/orders/dayRevenue", orderControllerGet.getRevenueForDay);
router.put("/order/update/:id", orderControllerUpdate.updateOrderStatus);
router.delete("/order/delete/:id", orderControllerDelete.deleteOrder);

module.exports = router;
