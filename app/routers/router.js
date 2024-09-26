const express = require('express');
const router = express.Router();

const Usuario = require('../controllers/usuario.controller.js');

// Rutas para el controlador de Usuarios

router.post('/api/usuarios/create', Usuario.create);
router.get('/api/usuarios/all', Usuario.findAll);
router.get('/api/usuarios/onebyid/:id', Usuario.findById);
router.put('/api/usuarios/update/:id', Usuario.update);
router.delete('/api/usuarios/delete/:id', Usuario.delete);

const Proyecto = require('../controllers/proyecto.controller.js');

// Rutas para el controlador de Proyectos

router.post('/api/proyectos/create', Proyecto.create);
router.get('/api/proyectos/all', Proyecto.findAll);
router.get('/api/proyectos/onebyid/:id', Proyecto.findById);
router.put('/api/proyectos/update/:id', Proyecto.update);
router.delete('/api/proyectos/delete/:id', Proyecto.delete);

const Tarea = require('../controllers/tarea.controller.js');

// Rutas para el controlador de Tareas

router.post('/api/tareas/create', Tarea.create);
router.get('/api/tareas/all', Tarea.findAll);
router.get('/api/tareas/onebyid/:id', Tarea.findById);
router.put('/api/tareas/update/:id', Tarea.update);
router.delete('/api/tareas/delete/:id', Tarea.delete);

module.exports = router;
