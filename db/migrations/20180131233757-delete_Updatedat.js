'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Pets',
      'updatedAt',
      Sequelize.INTEGER
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Pets', 'updatedAt')
  }
};
