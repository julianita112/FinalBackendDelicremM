const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/',  rolController.agregarRol);
router.get('/activos',  rolController.obtenerRolesActivos);
router.get('/',  rolController.listarRoles);
router.get('/:id',  rolController.obtenerRolPorId);
router.put('/:id',  rolController.editarRol);
router.delete('/:id', rolController.eliminarRol);
router.patch('/:id/estado',  rolController.cambiarEstadoRol);

module.exports = router;
