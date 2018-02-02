'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: {DataTypes.STRING, notNull: true, notEmpty: true},
    last_name: {DataTypes.STRING, notNull: true, notEmpty: true},
    bio: {DataTypes.TEXT, notNull: true, notEmpty: true}
  });
  User.associate = function(models){
      User.hasMany(models.Pet);
      // User.sync(force:true);

      };
  return User;
};
