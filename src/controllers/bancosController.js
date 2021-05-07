import Bancos from '../models/Bancos.cjs';
import { sequelize } from '../database/index.js';

async function store(req, res) {
    Bancos.init(sequelize);

    const bancos = await Bancos.create({
        cnpj: '12090032123',
        company_name: 'Bradesco',
        contact: '31000983213',
    })

    return res.json({ on: bancos });
}

export { store };