const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('tournament', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
    champion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};