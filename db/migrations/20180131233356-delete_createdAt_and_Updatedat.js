'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Pets',
      'createdAt',
      Sequelize.INTEGER
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Pets', 'createdAt')
  }
};
