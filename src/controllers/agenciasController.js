import Agencias from '../models/Agencias.cjs';
import { sequelize } from '../database/index.js';

async function store(req, res) {
    Agencias.init(sequelize);

    const agencias = await Agencias.create({
        number_agency: '1856',
        description_agency: 'make a good job',
        id_bancos: 1,
    })

    return res.json({ on: agencias });
}

export { store };