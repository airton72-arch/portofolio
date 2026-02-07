const express = require('express');
const router = express.Router();
const products = require('../data/products.json');

// listar todos
router.get('/', (req, res) => {
  res.json(products);
});

// buscar por id
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }
  res.json(product);
});

module.exports = router;