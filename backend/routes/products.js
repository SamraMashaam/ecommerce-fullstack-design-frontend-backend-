import express from 'express';
import Product from '../models/Product.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

// GET /api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching products', err });
  }
});

// GET /api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching product', err });
  }
});

// POST /api/products (Add product)
router.post('/add', async (req, res) => {
  const { name, description, price, image, rating } = req.body;

  try {
    const newProduct = new Product({ name, description, price, image, rating });
    await newProduct.save();
    console.log("product added")
    res.status(201).json({ msg: 'Product added', product: newProduct });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to add product', err });
  }
});

// PUT /api/products/:id (Update product)
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ msg: 'Product not found' });
    res.json({ msg: 'Product updated', product: updated });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to update product', err });
  }
});

// DELETE /api/products/:id
router.delete('/:id', async (req, res) => {
  try {
    const removed = await Product.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ msg: 'Product not found' });
    res.json({ msg: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to delete product', err });
  }
});

export default router;
