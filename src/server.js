import { app } from './app.js';
import { connection_db } from './database/index.js'
import express from 'express';

const server = express();

connection_db();

server.use(app);

server.listen(3000, () => {
    console.log('O servidor foi inciado!');
})