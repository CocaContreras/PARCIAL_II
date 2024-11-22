    module.exports = (sequelize, Sequelize) => {
        const juego = sequelize.define('juego', {
        id_juego: {
            autoIncrement: true,
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        nombre_juego: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        genero: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        plataforma: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        fecha_lanzamiento: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        precio_alquiler: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0.00
        },
        disponibilidad: {  
            type: Sequelize.INTEGER,
            allowNull: false
        },
        fecha_alquiler: {
            type: Sequelize.DATE,
            allowNull: true 
        },
        fecha_devolucion: {
            type: Sequelize.DATE,
            allowNull: true  
        },
        nombre_cliente: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        comentarios: {
            type: Sequelize.TEXT,
            allowNull: true  
        }
        });
    
        return juego;
    };
    