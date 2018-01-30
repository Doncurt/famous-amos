'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pet = sequelize.define('Pet', {
    id: DataTypes.NUMBER,
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    birthday: DataTypes.DATE,
    favoriteFood: DataTypes.STRING,
    picUrl: DataTypes.STRING,
    picUrlSq: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Pet;
};