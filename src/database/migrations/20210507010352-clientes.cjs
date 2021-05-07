'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clientes', {
      //Id, Nome, CPF, Sexo, Salario,Contato 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      salary: {
        type: Sequelize.NUMBER,
        allowNull: false
      },
      gender: {
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
    return queryInterface.dropTable('Clientes');
  }
};
