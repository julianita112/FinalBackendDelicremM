const express = require('express');
const router = express.Router();
const insumoController = require('../controllers/insumoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/',  insumoController.agregarInsumo);
router.get('/activos',  insumoController.obtenerInsumosActivos);
router.get('/',  insumoController.listarInsumos);
router.get('/:id', insumoController.obtenerInsumoPorId);
router.put('/:id',  insumoController.editarInsumo);
router.delete('/:id',  insumoController.eliminarInsumo);
router.patch('/:id/estado',  insumoController.cambiarEstadoInsumo);

module.exports = router;
