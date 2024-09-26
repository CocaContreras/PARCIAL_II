module.exports = (sequelize, Sequelize) => {
    const Tarea = sequelize.define('tarea', {
      id_tarea: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      id_proyecto: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_creacion: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      fecha_vencimiento: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  
    return Tarea;
  };
  