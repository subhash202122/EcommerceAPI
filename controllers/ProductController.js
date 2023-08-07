const Product = require("../models/product");

exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body.product;
    const product = new Product({ name, quantity });
    await product.save();
    res.status(201).json({ data: { product } });
  } catch (err) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ data: { products } });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ data: { message: "Product deleted" } });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};

exports.updateProductQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { number } = req.query;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    product.quantity += parseInt(number, 10);
    await product.save();
    res.json({ data: { product }, message: "Updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update product quantity" });
  }
};
