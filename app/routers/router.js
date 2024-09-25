const express = require('express');
const router = express.Router();

const Usuario = require('../controllers/usuario.controller.js');

// Rutas para el controlador de Usuarios

router.post('/api/usuarios/create', Usuario.create);
router.get('/api/usuarios/all', Usuario.findAll);
router.get('/api/usuarios/onebyid/:id', Usuario.findById);
router.put('/api/usuarios/update/:id', Usuario.update);
router.delete('/api/usuarios/delete/:id', Usuario.delete);

module.exports = router;
