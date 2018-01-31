'use strict';
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('Pet', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      species: {
        type: DataTypes.STRING
      },
      birthday: {
        type: DataTypes.DATE,
        allowNull: false
      },
      favoriteFood: {
        type: DataTypes.STRING
      },
      picUrl: {
        type: DataTypes.STRING
      },
      picUrlSq: {
        type: DataTypes.STRING
      },
      description: DataTypes.TEXT
    })
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable('Pet', null, {});
  }
};
