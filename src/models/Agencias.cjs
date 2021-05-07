const { Model, DataTypes } = require('sequelize');

class Agencias extends Model {
    static init(sequelize) {
        super.init({
            number_agency: DataTypes.STRING,
            description_agency: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Bancos, {foreignKey: 'id_bancos', as: 'Bancos'})
    }
}

module.exports = Agencias;