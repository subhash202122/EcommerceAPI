const express = require("express");
const router = express.Router();
const ProductController = require("../controller/ProductController");

router.post("/create", ProductController.createProduct);
router.get("/", ProductController.getAllProducts);
router.delete("/:id", ProductController.deleteProduct);
router.post("/:id/update_quantity", ProductController.updateProductQuantity);

module.exports = router;
