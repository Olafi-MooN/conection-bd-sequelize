const { Model, DataTypes } = require('sequelize');

class Agencias extends Model {
    static init(sequelize) {
        super.init({
            number_agency: DataTypes.STRING,
            description_agency: DataTypes.STRING,
            id_bancos: DataTypes.NUMBER,
        }, {
            sequelize
        })
    }
}

module.exports = Agencias;