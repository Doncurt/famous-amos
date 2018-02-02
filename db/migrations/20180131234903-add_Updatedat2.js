'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Pets',
      'updatedAt',
      Sequelize.INTEGER
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Pets', 'updatedAt')
  }
};
