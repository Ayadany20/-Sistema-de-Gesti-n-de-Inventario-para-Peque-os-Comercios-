const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoria.controller');

router.get('/', controller.getCategorias);
router.get('/:id', controller.getCategoriaById);
router.post('/', controller.createCategoria);
router.put('/:id', controller.updateCategoria);
router.delete('/:id', controller.deleteCategoria);
// Obtener todas las categorías
router.get('/categoria', async (req, res) => {
  try {
    const [categorias] = await db.query('SELECT * FROM categoria');
    res.json(categorias);
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    res.status(500).json({ error: 'Error al cargar categorías' });
  }
});

module.exports = router;
