const db = require('../config/db.config.js');
const Proyecto = db.Proyecto;

// Crear un nuevo proyecto
exports.create = (req, res) => {
    let proyecto = {};

    try {
        proyecto.id_usuario = req.body.id_usuario;
        proyecto.nombre = req.body.nombre;
        proyecto.descripcion = req.body.descripcion;
        proyecto.fecha_creacion = req.body.fecha_creacion;

        Proyecto.create(proyecto).then(result => {
            res.status(200).json({
                message: "Proyecto creado exitosamente con id = " + result.id_proyecto,
                proyecto: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear proyecto!",
            error: error.message
        });
    }
};

// Recuperar todos los proyectos
exports.findAll = (req, res) => {
    Proyecto.findAll()
        .then(proyectos => {
            res.status(200).json({
                message: "Proyectos recuperados exitosamente!",
                proyectos: proyectos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error al recuperar los proyectos!",
                error: error
            });
        });
};

// Encontrar un proyecto por Id
exports.findById = (req, res) => {
    Proyecto.findByPk(req.params.id)
        .then(proyecto => {
            res.status(200).json({
                message: "Proyecto recuperado exitosamente con id = " + req.params.id,
                proyecto: proyecto
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error al recuperar el proyecto!",
                error: error
            });
        });
};

// Actualizar un proyecto por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Proyecto.update(req.body, { where: { id_proyecto: id } })
        .then(() => {
            res.status(200).json({
                message: "Proyecto actualizado exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error al actualizar el proyecto con id = " + id,
                error: error.message
            });
        });
};

// Eliminar un proyecto por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Proyecto.destroy({ where: { id_proyecto: id } })
        .then(() => {
            res.status(200).json({
                message: "Proyecto eliminado exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error al eliminar el proyecto con id = " + id,
                error: error.message
            });
        });
};
