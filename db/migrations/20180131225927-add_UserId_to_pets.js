'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Pets',
      'UserId',
      Sequelize.INTEGER
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Pets', 'UserId')
  }
};
