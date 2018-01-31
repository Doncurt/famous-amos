'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comment', [{
      content: DataTypes.STRING
    }], {});
  },

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Comment')
  }
};
