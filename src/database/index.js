import Sequelize from 'sequelize';
import config from '../config/database.cjs'

import Agencias from '../models/Agencias.cjs';
import Bancos from '../models/Bancos.cjs';
import Clientes from '../models/Clientes.cjs';


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

Agencias.init(sequelize);
Bancos.init(sequelize);
Clientes.init(sequelize);

Agencias.associate(sequelize.models);
Bancos.associate(sequelize.models);
 
export { sequelize, connection_db };