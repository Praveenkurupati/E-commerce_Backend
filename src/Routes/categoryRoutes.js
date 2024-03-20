const express = require("express");
const router = express.Router();
const categoryControllerPost = require("./../Controllers/Category_Management/category");

router.post("/categoryPost", categoryControllerPost.createCategory);
router.get("/categories", categoryControllerPost.getAllCategories);
router.get("/category/:id", categoryControllerPost.getCategoryById);
router.put("/category/update/:id", categoryControllerPost.updateCategory);
router.delete("/category/delete/:id", categoryControllerPost.deleteCategory);

module.exports = router;
