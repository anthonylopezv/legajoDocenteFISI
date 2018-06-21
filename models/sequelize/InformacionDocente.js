'use strict';

var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');

module.exports = function(db, DataTypes) {
  var InformacionDocente = db.define('InformacionDocente', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    fech_ingreso: DataTypes.DATE,
    sunedu_ley: DataTypes.STRING(2),
    // nivel_programa: DataTypes.STRING,
    pregrado: DataTypes.STRING(2),
    maestria: DataTypes.STRING(2),
    doctorado: DataTypes.STRING(2),
    categoria: DataTypes.STRING,
    regimen_dedicacion: DataTypes.STRING,
    horas_semanales: DataTypes.INTEGER,
    investigador: DataTypes.STRING(2),
    dina: DataTypes.STRING(2),
    per_academico: DataTypes.STRING,

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'informacion_docente',
    timestamps: true,
    classMethods: {
      associate: function(models) {
        InformacionDocente.belongsTo(models.User);
      }
    }
  });

  return InformacionDocente;
};