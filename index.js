const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

// Create the Product model
const Product = mongoose.model("Product", productSchema);

app.get("/", (req, res) => {
  res.send("Welcome to the Ecommerce API!");
});

// JSON parsing middleware
app.use(bodyParser.json());

// API to create a new product
app.post("/create", async (req, res) => {
  try {
    const { name, quantity } = req.body.product;
    const product = new Product({ name, quantity });
    await product.save();
    res.status(201).json({ data: { product } });
  } catch (err) {
    res.status(500).json({ error: "Failed to create product" });
  }
});

// API to list products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ data: { products } });
  } catch (err) {
    res.status(500).json({ error: "Failed to get products" });
  }
});

// API to delete products
app.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ data: { message: "Product deleted" } });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});

// API to update quantity of a product
app.post("/:id/update_quantity", async (req, res) => {
  try {
    const { id } = req.params;
    const { number } = req.query;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const newQuantity = product.quantity + parseInt(number);
    product.quantity = newQuantity;
    await product.save();

    res.json({
      data: {
        product: {
          id: product._id,
          name: product.name,
          quantity: product.quantity,
        },
      },
      message: "Updated successfully",
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to update product quantity" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
