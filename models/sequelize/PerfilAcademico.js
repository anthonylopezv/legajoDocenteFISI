'use strict';

var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');

module.exports = function(db, DataTypes) {
  var PerfilAcademico = db.define('PerfilAcademico', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    mayor_grado: DataTypes.STRING,
    menc_grado: DataTypes.STRING,
    universidad: DataTypes.STRING,
    pais_grado: DataTypes.STRING,
    cv: DataTypes.STRING,

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'perfil_academico',
    timestamps: true,
    classMethods: {
      associate: function(models) {
        PerfilAcademico.belongsTo(models.User);
      }
    }
  });

  return PerfilAcademico;
};