'use strict';
module.exports = (sequelize, DataTypes) => {
  const Turma = sequelize.define('Turma', {
    data_inicio: DataTypes.DATEONLY
  }, {});
  Turma.associate = function(models) {
    // associations can be defined here
  };
  return Turma;
};