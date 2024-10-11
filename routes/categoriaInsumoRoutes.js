const express = require('express');
const router = express.Router();
const categoriaInsumoController = require('../controllers/categoriaInsumoController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas CRUD para Categoría de Insumos
router.get('/',  categoriaInsumoController.listarCategoriasInsumos);
router.get('/activos',  categoriaInsumoController.obtenerCategoriasInsumosActivas);
router.get('/:id',  categoriaInsumoController.obtenerCategoriaInsumoPorId);
router.post('/',  categoriaInsumoController.agregarCategoriaInsumo);
router.put('/:id', categoriaInsumoController.editarCategoriaInsumo);
router.delete('/:id',  categoriaInsumoController.eliminarCategoriaInsumo);
router.patch('/:id/estado',  categoriaInsumoController.cambiarEstadoCategoriaInsumo);

module.exports = router;
