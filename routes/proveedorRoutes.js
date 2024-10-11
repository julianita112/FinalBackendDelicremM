const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/',  proveedorController.agregarProveedor);
router.get('/activos',  proveedorController.obtenerProveedoresActivos);
router.get('/', proveedorController.listarProveedores);
router.get('/:id', proveedorController.obtenerProveedorPorId);
router.put('/:id',  proveedorController.editarProveedor);
router.delete('/:id',  proveedorController.eliminarProveedor);
router.patch('/:id/estado',  proveedorController.cambiarEstadoProveedor);

module.exports = router;
