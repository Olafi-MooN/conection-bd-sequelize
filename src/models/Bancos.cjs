const { Model, DataTypes } = require('sequelize');

class Bancos extends Model {
    static init(sequelize) {
        super.init({
            cnpj: DataTypes.STRING,
            company_name: DataTypes.STRING,
            contact: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}
module.exports = Bancos;