'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado) {
          if (dado.length < 3) throw new Error ('O campo nome deve conter mais de 3 caracteres')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: { args: true, msg: 'E-mail inválido, por favor tente outro e-mail' }
      }
    },
    role: DataTypes.STRING
  },
    {
      paranoid: true,
      defaultScope: {
        where: { ativo: true }
      },
      scopes: {
        todos: { where: {} },
      }
    })
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, { foreignkey: 'docente_id'})
    Pessoas.hasMany(models.Matriculas, { foreignkey: 'estudante_id'})
  };
  return Pessoas;
};