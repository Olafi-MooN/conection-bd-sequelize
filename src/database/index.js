import Sequelize from 'sequelize';
import config from '../config/database.cjs'

const sequelize = new Sequelize(config.development);

async function connection_db () {
    const database = sequelize;

    try {
        const resultado = await sequelize.authenticate();;
        console.log("Conectado ao banco de dados!");
    } catch (error) {
        console.log('Ocorreu um erro ao se conectar com o banco de dados!');
    }
};
 
export { sequelize, connection_db };