import Bancos from '../models/Bancos.cjs';

async function store(req, res) {
    const { cnpj, company_name, contact } = req.body;

    if (!cnpj || !company_name || !contact) {
        return res.json({ 
            status: false,
            result: 'É necessário informar todos os campos' 
        });
    }

    const bancos = await Bancos.create({
        cnpj,
        company_name,
        contact,
    });

    return res.json({ 
        status: true,
        date: bancos,
        result: 'Usuário inserido com sucesso!' 
    });    
}

export { store };