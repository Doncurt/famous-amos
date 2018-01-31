'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pet', [{
      name: DataTypes.STRING,
      species: DataTypes.STRING,
      birthday: DataTypes.DATE,
      favoriteFood: DataTypes.STRING,
      picUrl: DataTypes.STRING,
      picUrlSq: DataTypes.STRING,
      description: DataTypes.STRING
    }], {});
  },

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pet', null, {});
  }
};
