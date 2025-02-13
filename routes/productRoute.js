const express = require('express');
const router = express.Router();
const validateProduct = require('../middlewares/middleware');

let products = [
  { id: 1, name: 'Product A', price: 10.99, category: 'Electronics', description: 'A great product' },
  { id: 2, name: 'Product B', price: 20.49, category: 'Books', description: 'An amazing book' }
];

// Get all products
router.get('/', (req, res) => {
  res.json(products);
});

// Get product by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID format' });

  const product = products.find(prod => prod.id === id);
  if (!product) return res.status(404).json({ message: 'No product like this' });

  res.json(product);
});

// Add product
router.post('/products', validateProduct,(req, res) => {
    const { name, price,category,description } = req.body;
    const id = products.length + 1;
    const np = { id, name, price,category,description };
    products.push(np);
    res.status(201).json({ message: "Product added", data: req.body });
  });

// Update product
router.put('/:id', validateProduct, (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID format' });

  const product = products.find(prod => prod.id === id);
  if (!product) return res.status(404).json({ message: 'Does not exist' });

  Object.assign(product, req.body);
  res.json(product);
});

// Delete product
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID format' });

  const index = products.findIndex(prod => prod.id === id);
  if (index === -1) return res.status(404).json({ message: 'Nahi hai ye product' });

  products.splice(index, 1);
  res.status(200).json({ message: `Product with ID ${id} deleted successfully.` });
});

module.exports = router;
