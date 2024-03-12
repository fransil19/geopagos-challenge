const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('player', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(200),
      validate: {
        notNull: true,
        notEmpty: true,
      },
      allowNull: false,
      set(value) {
        this.setDataValue('name', value.toLowerCase());
      }
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 0,
        max:100,
      }
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true,
        min: 1,
        max:100,
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true,
        min: 1,
        max:100,
      }
    },
    reaction: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true,
        min: 1,
        max:100,
      }
    },
    gender: {
      type: DataTypes.STRING(1),
      validate: {
        notNull: true,
        notEmpty: true,
      },
      allowNull: false,
      set(value) {
        this.setDataValue('gender', value.toLowerCase());
      }
    },
  });
};