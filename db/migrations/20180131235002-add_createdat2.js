'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Pets',
      'createdAt',
      Sequelize.INTEGER
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Pets', 'createdAt')
  }
};
