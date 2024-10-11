const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/',  productoController.agregarProducto);
router.post('/producir',  productoController.producirProducto); // Nueva ruta para producción
router.get('/activos',  productoController.obtenerProductosActivos);
router.get('/',  productoController.listarProductos);
router.get('/:id',  productoController.obtenerProductoPorId);
router.put('/:id',  productoController.editarProducto);
router.delete('/:id', productoController.eliminarProducto);
router.patch('/:id/estado',  productoController.cambiarEstadoProducto);

module.exports = router;
