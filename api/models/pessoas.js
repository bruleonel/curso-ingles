'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, { foreignkey: 'docente_id'})
    Pessoas.hasMany(models.Matriculas, { foreignkey: 'estudante_id'})
  };
  return Pessoas;
};