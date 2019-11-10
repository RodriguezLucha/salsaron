'use strict';
module.exports = (sequelize, DataTypes) => {
  const Club = sequelize.define('Club', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    details: DataTypes.TEXT,
    location: DataTypes.TEXT
  }, {});
  Club.associate = function(models) {
    Club.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Club;
};