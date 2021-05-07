'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bancos', {
      //Id, CNPJ, Razao Social, Contato
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contact: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE(),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE(),
        allowNull: false,
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bancos');
  }
};
