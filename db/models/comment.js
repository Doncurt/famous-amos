'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    content: DataTypes.STRING,
    PetId: DataTypes.INTEGER

  });
// associating comments to pets
  Comment.associate = function(models){
      Comment.belongsTo(models.Pet);

    Comment.belongsTo(models.Pet)
  };
  return Comment;
};
