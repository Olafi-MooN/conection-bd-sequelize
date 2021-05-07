import { app } from './app.js';
import { sequelize } from './database/index.js'
import express from 'express';

const server = express();

server.use(app);

(async () => {
    const database = sequelize;
 
    try {
        const resultado = await database.sync();
        console.log("Conectado ao banco de dados!");
    } catch (error) {
        console.log('Ocorreu um erro ao se conectar com o banco de dados!');
    }
})();

server.listen(3000, () => {
    console.log('O servidor foi inciado!');
})