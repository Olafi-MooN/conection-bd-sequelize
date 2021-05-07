import Clientes from '../models/Clientes.cjs';
import { sequelize } from '../database/index.js';

async function store(req, res) {
    Clientes.init(sequelize);

    const clientes = await Clientes.create({
        name: 'Alef',
        cpf: '70050873644',
        salary: 5000,
        gender: 'Masculino',
        contact: '31 9 75452891'
    })

    return res.json({ on: clientes });
}

export { store };