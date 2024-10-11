const express = require('express');
const router = express.Router();
const permisoController = require('../controllers/permisoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/',  permisoController.crearPermiso);
router.get('/',  permisoController.obtenerPermisos);
router.get('/:id',  permisoController.obtenerPermisoPorId);
router.put('/:id',  permisoController.actualizarPermiso);
router.delete('/:id',  permisoController.eliminarPermiso);

module.exports = router;
