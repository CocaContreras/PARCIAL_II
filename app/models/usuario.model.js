module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define('usuario', {
    id_usuario: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    correo: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    fecha_creacion: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  });

  return Usuario;
};

