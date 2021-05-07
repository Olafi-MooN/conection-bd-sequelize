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
    static associate(models) {
        this.hasMany(models.Agencias, { foreignKey: 'id_bancos', as: 'Agencias' })
    }
}

module.exports = Bancos;