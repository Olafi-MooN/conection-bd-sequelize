const { Model, DataTypes } = require('sequelize');

class Clientes extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING,
            salary: DataTypes.NUMBER,
            gender: DataTypes.STRING,
            contact: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Clientes;