'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Agencias', {
      //Id, numero agencia, descricao da agencia, id do banco 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      number_agency: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description_agency: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_bancos: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
      },
      updated_at: {
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Clientes');
  }
};
