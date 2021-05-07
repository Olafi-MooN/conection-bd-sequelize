import { Router } from 'express'; 
import { store as storeClients } from '../controllers/clientsController.js';
import { store as storeAgency, index as indexAgency } from '../controllers/agenciasController.js';
import { store as storeBancos } from '../controllers/bancosController.js';

const routes = Router();

routes.get('/', (req, res) => res.json({server: true}));
routes.post('/insertclients', storeClients);
routes.post('/bancos/:id_bancos/insertAgency', storeAgency);
routes.get('/bancos/:id_bancos/insertAgency', indexAgency);
routes.post('/insertBancos', storeBancos);

export { routes };
