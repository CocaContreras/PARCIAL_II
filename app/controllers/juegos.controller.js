const db = require('../config/db.config.js');
const Juego = db.juego;

// Crear un nuevo juego
exports.create = (req, res) => {
    let juego = {};

    try {
        juego.nombre_juego = req.body.nombre_juego;
        juego.genero = req.body.genero;
        juego.plataforma = req.body.plataforma;
        juego.fecha_lanzamiento = req.body.fecha_lanzamiento;
        juego.precio_alquiler = req.body.precio_alquiler;
        juego.disponibilidad = req.body.disponibilidad;
        juego.fecha_alquiler = req.body.fecha_alquiler;
        juego.fecha_devolucion = req.body.fecha_devolucion;
        juego.nombre_cliente = req.body.nombre_cliente;
        juego.comentarios = req.body.comentarios;

        Juego.create(juego).then(result => {
            res.status(200).json({
                message: "Juego creado exitosamente con id = " + result.id_juego,
                juego: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear juego!",
            error: error.message
        });
    }
};

// Recuperar todos los juegos
exports.findAll = (req, res) => {
    Juego.findAll()
        .then(juegos => {
            res.status(200).json({
                message: "Juegos recuperados exitosamente!",
                juegos: juegos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error al recuperar los juegos!",
                error: error
            });
        });
};

// Encontrar un juego por Id
exports.findById = (req, res) => {
    Juego.findByPk(req.params.id)
        .then(juego => {
            res.status(200).json({
                message: "Juego recuperado exitosamente con id = " + req.params.id,
                juego: juego
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error al recuperar el juego!",
                error: error
            });
        });
};

// Actualizar un juego por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Juego.update(req.body, { where: { id_juego: id } })
        .then(() => {
            res.status(200).json({
                message: "Juego actualizado exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error al actualizar el juego con id = " + id,
                error: error.message
            });
        });
};

// Eliminar un juego por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Juego.destroy({ where: { id_juego: id } })
        .then(() => {
            res.status(200).json({
                message: "Juego eliminado exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error al eliminar el juego con id = " + id,
                error: error.message
            });
        });
};
