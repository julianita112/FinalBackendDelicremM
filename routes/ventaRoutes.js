const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/',  ventaController.agregarVenta);
router.get('/activos',  ventaController.obtenerVentasActivas);
router.get('/', ventaController.listarVentas);
router.get('/:id', ventaController.obtenerVentaPorId);
router.put('/:id',  ventaController.actualizarVenta);
router.put('/:id/estado',  ventaController.cambiarEstadoDeProduccionVenta);
router.delete('/:id',  ventaController.eliminarVenta);
router.patch('/:id/estado',  ventaController.anularVenta);
router.patch('/:id/entregar', ventaController.entregarVenta);


module.exports = router;
