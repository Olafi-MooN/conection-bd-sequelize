import Clientes from '../models/Clientes.cjs';

async function store(req, res) {
    const { 
        name,
        cpf,
        salary,
        gender,
        contact, } = req.body;

    const clientes = await Clientes.create({
        name,
        cpf,
        salary,
        gender,
        contact 
    })

    return res.json({ on: clientes });
}

export { store };