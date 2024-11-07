const express = require('express');
const router = express.Router();

const Juego = require('../controllers/juegos.controller.js');

// Rutas para el controlador de Juegos

router.post('/api/juegos/create', Juego.create);
router.get('/api/juegos/all', Juego.findAll);
router.get('/api/juegos/onebyid/:id', Juego.findById);
router.put('/api/juegos/update/:id', Juego.update);
router.delete('/api/juegos/delete/:id', Juego.delete);

module.exports = router;
