const express = require('express');
const router = express.Router();
const detallePedidoController = require('../controllers/detallePedidoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/',  detallePedidoController.agregarDetallePedido);
router.get('/',  detallePedidoController.listarDetallesPedido);
router.get('/:id',  detallePedidoController.obtenerDetallePedidoPorId);
router.put('/:id',  detallePedidoController.editarDetallePedido);
router.delete('/:id', detallePedidoController.eliminarDetallePedido);

module.exports = router;
