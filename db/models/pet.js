'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pet = sequelize.define('Pet', {
    name: {DataTypes.STRING, notNull: true, notEmpty: true},
    species: {DataTypes.STRING, notNull: true, notEmpty: true},
    birthday: {DataTypes.DATE, notNull: true, notEmpty: true},
    favoriteFood: {DataTypes.STRING, notNull: true, notEmpty: true},
    picUrl: {DataTypes.STRING, notNull: true, notEmpty: true},
    picUrlSq: {DataTypes.STRING, notNull: true, notEmpty: true},
    description: {DataTypes.STRING, notNull: true, notEmpty: true},
    createdAt: {DataTypes.DATE},
    updatedAt: {DataTypes.DATE}
  });
  // associating pet to comments
  Pet.associate = function(models){
      Pet.hasMany(models.Comment);
     Pet.belongsTo(models.User);

  };
  return Pet;
};
