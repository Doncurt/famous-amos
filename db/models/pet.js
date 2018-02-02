'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    birthday: DataTypes.DATE,
    favoriteFood: DataTypes.STRING,
    picUrl: {type :DataTypes.STRING},
    picUrlSq: {type :DataTypes.STRING},
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  });
  // associating pet to comments
  Pet.associate = function(models){
      Pet.hasMany(models.Comment);
     Pet.belongsTo(models.User);

  };
  return Pet;
};
