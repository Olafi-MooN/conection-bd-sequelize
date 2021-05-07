import Agencias from '../models/Agencias.cjs';
import Bancos from '../models/Bancos.cjs';

async function store(req, res) {
    const { id_bancos } = req.params;
    const {
        number_agency,
        description_agency
    } = req.body;

    try {
        const agencias = await Agencias.create({
            number_agency,
            description_agency,
            id_bancos,
        });

        return res.json({ on: agencias });

    } catch (error) {
        return res.json({ on: error })
    }
}

async function index(req, res) {
    const { id_bancos } = req.params;

    const banco = await Bancos.findByPk(id_bancos, {
        include: { association: 'Agencias' }
    });

    return res.json({banco})
}

export { store, index };